<template>
  <!-- 动态柱线图 -->
  <div style="width: 100%; height: calc(100% - 40px);overflow:hidden">
    <div ref="oneBarLine" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  props: {
    barData: {
      type: Array,
      default: () => []
    },
    lineData: {
      type: Array,
      default: () => []
    },
    xData: {
      type: Array,
      default: () => []
    },
    yLeftUnit: {
      type: String,
      default: '金额(万元)'
    },
    yRightUnit: {
      type: String,
      default: '同比(%)'
    },
    barName: {
      type: String,
      default: '征缴总额'
    },
    lineName: {
      type: String,
      default: '同比'
    }
  },
  mounted () {
    this.initChart()
  },
  watch: {
    /**
     * @description 判断数据变化，实时更新图表
     */
    barData (newV, oldV) {
      /**
       * @description 获取已有echarts实例的DOM节点
       */
      let myCharts = this.$echarts.getInstanceByDom(this.$refs.oneBarLine)
      /**
       * @description 判断是否创建实例
       */
      if (myCharts == null) {
        myCharts = this.$echarts.init(this.$refs.oneBarLine)
      }
      let options = this.initOptions()
      myCharts.setOption(options)
    }
  },
  /**
   * @description 销毁图表实例，防止内存溢出
   */
  beforeDestroy () {
    let myCharts = this.$echarts.init(this.$refs.oneBarLine)
    myCharts.dispose()
  },
  methods: {
    /**
     * @description 初始化实例
     */
    initChart () {
      let myCharts = this.$echarts.init(this.$refs.oneBarLine)
      let options = this.initOptions()
      myCharts.setOption(options)
    },
    initOptions () {
      return {
        textStyle: {
          color: '#c0c3cd',
          fontSize: 14
        },
        toolbox: {
          show: false,
          feature: {
            saveAsImage: {
              backgroundColor: '#031245'
            },
            restore: {}
          },
          iconStyle: {
            borderColor: '#c0c3cd'
          }
        },
        tooltip: {
          confine: true,
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            crossStyle: {
              color: '#384757'
            }
          }
        },
        legend: {
          top: 10,
          itemWidth: 8,
          itemHeight: 8,
          icon: 'circle',
          left: 'center',
          padding: 0,
          textStyle: {
            color: '#f9f9f9',
            borderColor: '#fff'
          },
          data: [
            { name: this.barName, icon: 'stack' },
            { name: this.lineName, icon: 'line' }
          ]
        },
        color: ['#00D7E9', 'rgba(0, 215, 233, 0.9)'],
        grid: {
          containLabel: true,
          left: 20,
          right: 20,
          bottom: 20,
          top: 40
        },
        xAxis: [
          {
            nameTextStyle: {
              color: '#c0c3cd',
              padding: [0, 0, -10, 0],
              fontSize: 14
            },
            axisLabel: {
              color: '#c0c3cd',
              fontSize: 14,
              interval: 0
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: '#384267',
                width: 1
              }
            },
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#335971'
              },
              show: true
            },
            data: this.xData,
            type: 'category'
          }
        ],
        yAxis: [
          {
            type: 'value',
            nameTextStyle: {
              color: '#c0c3cd',
              padding: [0, 0, 0, 0],
              fontSize: 14
            },
            axisLabel: {
              color: '#c0c3cd',
              fontSize: 14
            },
            axisTick: {
              lineStyle: {
                color: '#668092',
                width: 1
              },
              show: true
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#335971'
                // "type": "dashed"
              }
            },
            axisLine: {
              lineStyle: {
                color: '#668092',
                width: 1
                // "type": "dashed"
              },
              show: true
            },
            name: this.yLeftUnit
          },
          {
            type: 'value',
            min: 0,
            max: 100,
            nameTextStyle: {
              color: '#c0c3cd',
              padding: [0, 0, 0, 0],
              fontSize: 14
            },
            axisLabel: {
              color: '#c0c3cd',
              fontSize: 14,
              formatter: '{value}%'
            },
            axisTick: {
              lineStyle: {
                color: '#668092',
                width: 1
              },
              show: true
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#335971'
                // "type": "dashed"
              }
            },
            axisLine: {
              lineStyle: {
                color: '#668092',
                width: 1
                // "type": "dashed"
              },
              show: true
            },
            name: this.yRightUnit
          }
        ],
        series: [
          {
            data: this.barData,
            type: 'bar',
            name: this.barName,
            barMaxWidth: 'auto',
            barWidth: 20,
            itemStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: 'linear',
                colorStops: [
                  {
                    offset: 0,
                    color: '#0D5EB1'
                  },
                  {
                    offset: 1,
                    color: '#00D7E9'
                  }
                ]
              }
            }
          },
          {
            data: [1, 1, 1, 1, 1, 1],
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [20, 15],
            tooltip: {
              show: false
            }
          },
          {
            data: this.barData,
            type: 'pictorialBar',
            barMaxWidth: '20',

            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [20, 12],
            zlevel: 2,
            tooltip: {
              show: false
            }
          },
          {
            name: this.lineName,
            type: 'line',
            // smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 10,
            zlevel: 10,
            lineStyle: {
              normal: {
                color: '#00D7E9',
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5
              }
            },

            itemStyle: {
              color: '#00ca95',
              borderColor: '#fff',
              borderWidth: 3,
              shadowColor: 'rgba(0, 0, 0, .3)',
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2
            },
            tooltip: {
              confine: true,
              show: true
            },
            data: this.lineData
          }
        ]
      }
    }
  }
}
</script>

<style scoped></style>
