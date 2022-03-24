<template>
  <div style="width: 100%; height: calc(100% - 51px)">
    <div ref="pie" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  props: {
    pData: {
      type: Array,
      default: () => [
        {
          name: '男性',
          value: 2456578
        },
        {
          name: '女性',
          value: 2456578
        }
      ]
    },
    color: {
      type: Array,
      default: () => ['#0590fc', '#ff2b85']
    },
    bgImgName: {
      type: String,
      default: '性别.png'
    },
    bgImgWidth: {
      type: Number,
      default: 65
    },
    bgImgHeight: {
      type: Number,
      default: 80
    },
    unit: {
      type: String,
      default: '人'
    }
  },
  data () {
    return {
      data: [],
      total: 0,
      legendData: []
    }
  },
  watch: {
    pData (oldV, newV) {
      this.countTotal()
      this.initChart()
    }
  },
  mounted () {
    this.countTotal()
    this.initChart()
  },
  /**
   * 销毁图表实例，防止内存溢出
   */
  beforeDestroy () {
    const myCharts = this.$echarts.init(this.$refs.pie)
    myCharts.dispose()
  },
  methods: {
    /**
     * 计算总数
     */
    countTotal () {
      let total = 0
      this.pData.forEach((item) => {
        total += item.value
      })
      this.total = total
      // 组装legendData
      this.legendData = this.pData.map((item) => item.name)
    },
    /**
     * 初始化实例
     */
    initChart () {
      const myCharts = this.$echarts.init(this.$refs.pie)
      const options = this.initOptions()
      myCharts.setOption(options)
    },
    getData () {
      const pData = this.pData
      const color = this.color
      for (var i = 0; i < pData.length; i++) {
        this.data.push(
          {
            value: pData[i].value,
            name: pData[i].name,
            itemStyle: {
              normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: color[i],
                shadowColor: color[i]
              }
            }
          },
          {
            value: 2,
            name: '',
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
              }
            }
          }
        )
      }
    },
    initOptions () {
      this.getData()
      return {
        color: this.color,
        graphic: {
          elements: [
            {
              type: 'image',
              z: 3,
              style: {
                image: require('@/assets/19/饼图背景.png'),
                width: 178,
                height: 178
              },
              left: 'center',
              top: 'center',
              position: [100, 100]
            },
            {
              type: 'image',
              z: 3,
              style: {
                image: require('@/assets/19/' + this.bgImgName),
                width: this.bgImgWidth,
                height: this.bgImgHeight
              },
              right: 'center',
              top: 'center'
            }
          ]
        },
        legend: {
          icon: 'none',
          data: this.legendData,
          textStyle: {
            color: '#fft',
            rich: {
              icon: {
                fontSize: 30
              },
              type: {
                fontSize: 18
              },
              num: {
                fontSize: 20,
                color: '#fff'
              },
              unit: {
                fontSize: 14,
                color: '#fff'
              },
              percent: {
                fontSize: 14,
                color: '#fff'
              }
            }
          },
          top: '20%',
          itemGap: 200,
          formatter: (params) => {
            let num = 0
            this.pData.forEach((item) => {
              if (item.name === params) {
                num = item.value
              }
            })
            return (
              '{icon|▂▂}\n\n' +
              '{type|' +
              params +
              '}\n\n' +
              '{num|' +
              num +
              '}\t\t' +
              '{unit|' +
              this.unit +
              '}\n\n' +
              '{percent|' +
              ((num / this.total) * 100).toFixed(2) +
              '%}'
            )
          }
        },
        series: [
          {
            type: 'pie',
            clockWise: false,
            radius: [60, 68],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  length: 30,
                  length2: 50,
                  show: true,
                  color: '#00ffff'
                }
              }
            },
            data: this.data
          },
          {
            radius: [60, 64],
            type: 'pie',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            animation: false,
            tooltip: {
              transitionDuration: 0,
              confine: true,
              show: false
            },
            itemStyle: {
              normal: {
                color: 'rgba(250,250,250,0.5)'
              }
            },
            data: [
              {
                value: 1
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
