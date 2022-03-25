<template>
  <div style="width: 100%; height: 100%; position: relative">
    <div ref="map" style="width: 100%; height: 100%"></div>
    <div class="changeBtn">
      <div
        class="eachBtn"
        @click="changeType(0)"
        :style="
          type === 0 ? { backgroundColor: '#002b97' } : { backgroundColor: '' }
        "
      >转入</div>
      <div
        class="eachBtn"
        @click="changeType(1)"
        :style="
          type === 1 ? { backgroundColor: '#002b97' } : { backgroundColor: '' }
        "
      >转出</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mainArea: {
      type: String,
      default: '石河子市'
    },
    fromMap: {
      type: Object,
      default: () => {
        return {
          哈密市: [93.44, 42.78],
          图木舒克市: [79.13, 39.85],
          巴音郭楞蒙古自治州: [86.15, 41.77],
          阿勒泰地区: [88.13, 47.85],
          伊犁哈萨克自治州: [81.32, 43.92],
          和田地区: [79.92, 37.12]
        }
      }
    },
    mapDatas: {
      type: Array,
      default: () => [
        [
          {
            name: '哈密市',
            value: 0
          }
        ],
        [
          {
            name: '图木舒克市',
            value: 0
          }
        ],
        [
          {
            name: '巴音郭楞蒙古自治州',
            value: 0
          }
        ],
        [
          {
            name: '阿勒泰地区',
            value: 0
          }
        ],
        [
          {
            name: '伊犁哈萨克自治州',
            value: 0
          }
        ],
        [
          {
            name: '和田地区',
            value: 0
          }
        ]
      ]
    },
    title: {
      type: String,
      default: '劳动转移情况'
    }
  },
  data () {
    return {
      option: null,
      dataItem: null,
      type: 0
    }
  },
  /**
   * 初始化图表
   */
  mounted () {
    this.getJsonData()
  },
  /**
   * 销毁图表实例，防止内存溢出
   */
  beforeDestroy () {
    const myCharts = this.$echarts.init(this.$refs.map)
    myCharts.dispose()
  },
  computed: {
    lineColor () {
      const type = this.type
      if (type === 0) {
        return '#1be7d4'
      } else {
        return 'yellow'
      }
    }
  },
  methods: {
    /**
     * 获取地图数据被注册
     */
    getJsonData () {
      this.$axios.get('../../../static/map/xinjiang.json').then((res) => {
        this.$echarts.registerMap('xinjiang', res.data)
        this.initChart()
      })
    },
    /**
     * 初始化实例
     */
    initChart () {
      const myCharts = this.$echarts.init(this.$refs.map)
      const options = this.initOptions()
      this.mapOptionPush()
      myCharts.setOption(options)
    },
    initOptions () {
      this.option = {
        title: {
          top: 0,
          left: 0,
          text: this.title,
          subtext: '',
          textStyle: {
            color: '#aee0ff'
          }
        },
        legend: {
          y: '20%',
          x: 'left',
          data: ['转入', '转出'],
          textStyle: {
            color: '#fff'
          },
          selectedMode: false
        },
        geo: {
          map: 'xinjiang',
          aspectScale: 0.75,
          zoom: 1.1,
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#013c62',
              shadowColor: '#182f68',
              shadowOffsetX: 0,
              shadowOffsetY: 25
            },
            emphasis: {
              areaColor: '#2ab8ff',
              borderWidth: 0,
              color: 'green',
              label: {
                show: false
              }
            }
          }
        },
        series: [
          {
            type: 'map',
            roam: false,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff'
                }
              },
              emphasis: {
                textStyle: {
                  color: '#fff'
                }
              }
            },

            itemStyle: {
              normal: {
                borderColor: '#2ab8ff',
                borderWidth: 1.5,
                areaColor: '#12235c'
              },
              emphasis: {
                areaColor: '#2ab8ff',
                borderWidth: 1.5,
                color: 'green'
              }
            },
            zoom: 1.1,
            map: 'xinjiang'
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            rippleEffect: {
              period: 15,
              scale: 4,
              brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: '#ffff',
                shadowBlur: 10,
                shadowColor: '#333'
              }
            }
          }
        ]
      }
      return this.option
    },
    /**
     * 地图动画
     */
    mapOptionPush () {
      [[this.mainArea, this.mapDatas]].forEach((item, i) => {
        this.option.series.push(
          {
            type: 'lines',
            color: this.lineColor,
            zlevel: 2,
            effect: {
              show: true,
              period: 4, // 箭头指向速度，值越小速度越快
              trailLength: 0.02, // 特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: 'arrow', // 箭头图标
              symbolSize: 5 // 图标大小
            },
            lineStyle: {
              normal: {
                width: 1, // 尾迹线条宽度
                opacity: 1, // 尾迹线条透明度
                curveness: 0.3 // 尾迹线条曲直度
              }
            },
            data: this.convertData(item[1])
          },
          {
            name: '转入',
            type: 'lines',
            color: '#1be7d4'
          },
          {
            name: '转出',
            type: 'lines',
            color: 'yellow'
          },
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              // 涟漪特效
              period: 4, // 动画时间，值越小速度越快
              brushType: 'stroke', // 波纹绘制方式 stroke, fill
              scale: 4 // 波纹圆环最大限制，值越大波纹越大
            },
            label: {
              normal: {
                show: false,
                position: 'right', // 显示位置
                offset: [5, 0], // 偏移设置
                formatter: function (params) {
                  // 圆环显示文字
                  return params.data.name
                },
                fontSize: 13
              },
              emphasis: {
                show: true
              }
            },
            symbol: 'circle',
            symbolSize: function (val) {
              return 5 + val[2] * 5 // 圆环大小
            },
            itemStyle: {
              normal: {
                show: false,
                color: '#34c6bb'
              }
            },
            data: item[1].map((dataItem) => {
              return {
                name: this.dataItem[0].name,
                value: this.fromMap[this.dataItem[0].name].concat([
                  dataItem[0].value
                ])
              }
            })
          }
        )
      })
    },
    convertData (data) {
      var res = []
      for (var i = 0; i < data.length; i++) {
        this.dataItem = data[i]
        let fromCoord = []
        let toCoord = []
        if (this.type === 0) {
          fromCoord = this.fromMap[this.dataItem[0].name]
          toCoord = [86.03, 44.3]
        } else {
          toCoord = this.fromMap[this.dataItem[0].name]
          fromCoord = [86.03, 44.3]
        }
        if (fromCoord && toCoord) {
          res.push([
            {
              coord: toCoord
            },
            {
              coord: fromCoord,
              value: this.dataItem[0].value
            }
          ])
        }
      }
      return res
    },
    /**
     * 改变type 并重绘图表
     */
    changeType (type) {
      this.type = type
      this.initChart()
    }
  }
}
</script>

<style lang="less" scoped>
.changeBtn {
  position: absolute;
  top: 10%;
  left: 0;
  .eachBtn {
    font-size: 16px;
    color: #fff;
    display: inline-block;
    width: 64px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    // background-color: #002b97;
    border-radius: 2px;
    border: solid 1px #1371ff;
    float: left;
  }
}
</style>
