<template>
  <div style="width: 100%; height: calc(100% - 40px);overflow:hidden">
    <div ref="radar" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  props: {
    bjdata: {
      type: Array,
      default: () => [17.2, 7.9, 1.6, 28, 18]
    },
    tjdata: {
      type: Array,
      default: () => [5.4, 26, 12, 18, 15]
    },
    dataMaxMin: {
      type: Array,
      default: () => [
        { name: '机关养老', value: 453 },
        { name: '城居养老', value: 453 }
      ]
    },
    defaultFontSize: {
      type: [String, Number],
      default: 14
    },
    defaultTextColor: {
      type: String,
      default: '#636c72'
    },
    defaultGlobalColor: {
      type: Array,
      default: () => ['#2985c7', '#c67c3b', '#0c1f45']
    },
    legendData: {
      type: Array,
      default: () => ['补缴', '退缴']
    }
  },
  data () {
    return {}
  },
  mounted () {
    this.initChart()
  },
  // 销毁示例
  beforeDestroy () {
    let myCharts = this.$echarts.init(this.$refs.radar)
    myCharts.dispose()
  },
  methods: {
    // 初始化示例
    initChart () {
      let myCharts = this.$echarts.init(this.$refs.radar)
      let options = this.initOptions()
      myCharts.setOption(options)
    },
    initOptions () {
      let bjdata = this.bjdata
      let tjdata = this.tjdata
      let dataMaxMin = this.dataMaxMin
      return {
        color: this.defaultGlobalColor, // 调色盘颜色列表。
        textStyle: {
          // 全局字体样式
          color: this.defaultTextColor,
          fontSize: this.defaultFontSize
        },
        legend: {
          bottom: '15%',
          left: 'center',
          icon: 'circle',
          width: 500,
          itemWidth: 14,
          itemHeight: 14,
          itemBorderRadius: 8,
          orient: 'horizontal',
          data: this.legendData,
          textStyle: {
            color: '#fff',
            rich: {
              m: {
                fontSize: 13,
                lineHeight: 10,
                fontWeight: 'bold',
                color: '#fft',
                padding: [-10, 5, 30, 5]
              },
              title: {
                fontSize: 18,
                lineHeight: 10,
                fontWeight: 'bold',
                color: '#fft',
                padding: [-40, 5, 30, 5]
              },
              value: {
                fontSize: 14,
                lineHeight: 18,
                color: '#fff',
                padding: [-70, 5, 0, 5]
              },
              unit: {
                fontSize: 10,
                lineHeight: 18,
                color: '#fff',
                padding: [-70, 5, 0, -5]
              }
            }
          },
          formatter: function (p) {
            let m = ['缴费最多险种', '退费最多险种']
            for (let i = 0; i < dataMaxMin.length; i++) {
              return (
                '{m|' +
                m[i] +
                '}\n{title|' +
                dataMaxMin[i].name +
                '}\n\n' +
                '{value|' +
                dataMaxMin[i].value +
                '}{unit|万元    25%}'
              )
            }
          }
        },
        tooltip: {
          confine: true,
          // 提示框组件
          trigger: 'item', // 触发类型 可选为：'axis' | 'item' | 'none'
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'line', // 默认为直线，可选为：'line' | 'shadow'
            shadowStyle: {
              color: 'rgba(204, 214, 235, 0.247059)'
            }
          }
        },
        radar: {
          // shape: 'circle',
          splitArea: {
            show: true,
            areaStyle: {
              color: [
                'rgba(12,62,129,0)',
                'rgba(6,23,51,0.3)',
                'rgba(12,31,69,0.8)',
                'rgba(12,62,129,0)'
              ]
            }
          },
          center: ['50%', '40%'],
          radius: 120,
          splitNumber: 4,
          splitLine: {
            lineStyle: {
              color: [
                '#eae9e9',
                '#eae9e9',
                '#eae9e9',
                '#eae9e9',
                '#eae9e9',
                '#6a7791'
              ]
            }
          },
          axisLine: {
            lineStyle: {
              color: '#eae9e9'
            }
          },
          indicator: [
            {
              name: '机关养老'
            },
            {
              name: '工商保险'
            },
            {
              name: '城居养老'
            },
            {
              name: '城职养老'
            },
            {
              name: '失业保险'
            }
          ],
          nameGap: 5
        },
        series: [
          {
            name: '雷达图',
            type: 'radar',
            symbol: 'none',
            areaStyle: {
              normal: {
                opacity: 0.7
              }
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 2
                }
              },
              emphasis: {
                areaStyle: {
                  opacity: 0.3
                }
              }
            },
            data: [
              {
                value: bjdata,
                name: '补缴',
                z: 3
              },
              {
                value: tjdata,
                name: '退缴',
                z: 1
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
