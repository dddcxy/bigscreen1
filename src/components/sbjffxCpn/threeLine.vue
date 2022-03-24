<template>
  <div style="width: 100%; height: calc(100% - 40px);overflow:hidden">
    <div ref="threeLine" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  props: {
    blueData: {
      type: Array,
      default: () => [400, 700, 500, 400, 300, 500, 800]
    },
    greenData: {
      type: Array,
      default: () => [300, 500, 400, 200, 100, 700, 600]
    },
    redData: {
      type: Array,
      default: () => [100, 200, 300, 600, 200, 300, 100]
    },
    xData: {
      type: Array,
      default: () => ['1月', '2月', '3月', '4月', '5月', '6月']
    },
    yLeftUnit: {
      type: String,
      default: '金额(万元)'
    },
    yRightUnit: {
      type: String,
      default: '同比(%)'
    },
    lineNameArr: {
      type: Array,
      default: () => ['城职养老', '失业保险', '机关养老']
    }
  },
  mounted () {
    this.initChart()
  },
  beforeDestroy () {
    let myCharts = this.$echarts.init(this.$refs.threeLine)
    myCharts.dispose()
  },
  methods: {
    initChart () {
      let myCharts = this.$echarts.init(this.$refs.threeLine)
      let options = this.initOptions()
      myCharts.setOption(options)
    },
    initOptions () {
      return {
        legend: {
          top: 10,
          textStyle: {
            color: '#f9f9f9',
            borderColor: '#fff'
          }
        },
        tooltip: {
          confine: true,
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(0, 255, 233,0)'
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(255, 255, 255,1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 255, 233,0)'
                  }
                ],
                global: false
              }
            }
          }
        },
        grid: {
          left: 20,
          right: 20,
          bottom: 20,
          top: 40,
          containLabel: true
        },
        xAxis: {
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
          type: 'category',
          boundaryGap: false
        },
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
            name: this.lineNameArr[0],
            type: 'line',
            lineStyle: {
              normal: {
                color: '#066ED1'
              }
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#066ED1'
                    },
                    {
                      offset: 1,
                      color: 'rgba(43,193,145,0)'
                    }
                  ],
                  false
                )
              }
            },
            data: this.blueData
          },
          {
            name: this.lineNameArr[1],
            type: 'line',
            lineStyle: {
              normal: {
                color: '#30A89F'
              }
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#30A89F'
                    },
                    {
                      offset: 1,
                      color: 'rgba(81,150,164,0)'
                    }
                  ],
                  false
                )
              }
            },
            data: this.greenData
          },
          {
            name: this.lineNameArr[2],
            type: 'line',
            lineStyle: {
              normal: {
                color: '#B83B55'
              }
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#B83B55'
                    },
                    {
                      offset: 1,
                      color: 'rgba(81,150,164,0)'
                    }
                  ],
                  false
                )
              }
            },
            data: this.redData
          }
        ]
      }
    }
  }
}
</script>

<style scoped></style>
