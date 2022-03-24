<template>
  <div ref="multiPie" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [
        {
          name: '北京市',
          value: 8.5
        },
        {
          name: '四川省',
          value: 8.5
        },
        {
          name: '天津市',
          value: 8.5
        },
        {
          name: '湖南省',
          value: 8.5
        },
        {
          name: '宁夏回族自治区',
          value: 8.5
        },
        {
          name: '山西省',
          value: 8.5
        }
      ]
    },
    color: {
      type: Array,
      default: () => ['#e3543d', '#20356f']
    },
    pieGap: {
      type: Number,
      default: 16.5
    },
    unit: {
      type: String,
      default: '人'
    },
    title: {
      type: String,
      default: '转移人数排行'
    }
  },
  data () {
    return {
      titleArr: [
        {
          top: 0,
          left: 0,
          text: this.title,
          subtext: '',
          textStyle: {
            color: '#aee0ff'
          }
        }
      ],
      seriesArr: []
    }
  },
  mounted () {
    this.dealData()
    this.initChart()
  },
  /**
   * 销毁图表实例，防止内存溢出
   */
  beforeDestroy () {
    const myCharts = this.$echarts.init(this.$refs.multiPie)
    myCharts.dispose()
  },
  methods: {
    /**
     * 数据格式处理
     */
    dealData () {
      const colors = this.color
      this.data.forEach((item, index) => {
        this.titleArr.push({
          text: '{A|}' + item.name,
          textStyle: {
            fontSize: '12',
            color: '#fff',
            textAlign: 'center',
            rich: {
              A: {
                height: 15,
                width: 15,
                backgroundColor: {
                  image: index < 3 ? require('@/assets/19/' + (index + 1) + '.png') : ''
                }
              }
            }
          },
          subtext: '  ' + item.value + '万' + this.unit,
          subtextStyle: {
            color: '#5afff1',
            fontSize: 20
          },
          itemGap: 130,
          left: index * this.pieGap + 9 + '%',
          top: '20%',
          textAlign: 'center'
        })
        this.seriesArr.push({
          name: item.name,
          type: 'pie',
          clockWise: false,
          radius: [45, 50],
          itemStyle: {
            normal: {
              color: colors[0],
              shadowColor: colors[0],
              shadowBlur: 0,
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          },
          hoverAnimation: false,
          center: [index * this.pieGap + 10 + '%', '53%'],
          data: [
            {
              value: item.value,
              label: {
                normal: {
                  formatter: (params) => {
                    return '{a|}'
                  },
                  position: 'center',
                  show: true,
                  textStyle: {
                    fontSize: '20',
                    fontWeight: 'bold',
                    color: colors[0]
                  },
                  rich: {
                    a: {
                      width: 40,
                      height: 40,
                      lineHeight: 50,
                      shadowBlur: 0,
                      shadowColor: '#2b2a38',
                      shadowOffsetX: '1',
                      shadowOffsetY: '1',
                      backgroundColor: {
                        image: require('@/assets/19/map.png')
                      }
                    }
                  }
                }
              }
            },
            {
              value: 10 - item.value,
              name: 'invisible',
              itemStyle: {
                normal: {
                  color: colors[1]
                },
                emphasis: {
                  color: colors[1]
                }
              }
            }
          ]
        })
      })
    },
    /**
     * 初始化实例
     */
    initChart () {
      const myCharts = this.$echarts.init(this.$refs.multiPie)
      const options = this.initOptions()
      myCharts.setOption(options)
    },
    initOptions () {
      return {
        title: this.titleArr,
        series: this.seriesArr
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
