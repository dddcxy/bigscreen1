<template>
  <div style="width: 100%; height: calc(100% - 51px);overflow:hidden">
    <div ref="columnBar" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [
        {
          name: '60岁以上',
          num: '1136'
        },
        {
          name: '50-59岁',
          num: '1236'
        },
        {
          name: '40-49岁',
          num: '1336'
        },
        {
          name: '30-39岁',
          num: '1836'
        },
        {
          name: '20-29岁',
          num: '1536'
        },
        {
          name: '20岁及以下',
          num: '1236'
        }
      ]
    },
    maxData: {
      type: Number,
      default: 2000
    },
    unit: {
      type: String,
      default: '人'
    }
  },
  data () {
    return {
      nameData: [],
      numData: [],
      maxDataArr: [],
      total: 0
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
    const myCharts = this.$echarts.init(this.$refs.columnBar)
    myCharts.dispose()
  },
  methods: {
    dealData () {
      this.nameData = this.data.map((item) => item.name)
      this.numData = this.data.map((item) => item.num)
      for (let i = 0; i < this.data.length; i++) {
        this.maxDataArr.push(this.maxData)
      }
      // 计算总数
      let total = 0
      this.data.forEach((item) => {
        total += parseInt(item.num)
      })
      this.total = total
    },
    /**
     * 初始化实例
     */
    initChart () {
      const myCharts = this.$echarts.init(this.$refs.columnBar)
      const options = this.initOptions()
      myCharts.setOption(options)
    },
    initOptions () {
      return {
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: '10%',
          containLabel: true
        },
        tooltip: {
          transitionDuration: 0,
          confine: true,
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          formatter: params => {
            return params[0].name + '\n\n' + params[0].value + this.unit
          }
        },
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: [
          {
            type: 'category',
            inverse: true,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#58b5f5'
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            data: this.nameData
          },
          {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
              textStyle: {
                color: '#ffffff',
                fontSize: '12'
              },
              formatter: value => {
                if (value >= 10000) {
                  return (value / 10000).toLocaleString() + '万' + this.unit + '\t\t' + ((value / this.total) * 100).toFixed(2) + '%'
                } else {
                  return value.toLocaleString() + '\t\t' + ((value / this.total) * 100).toFixed(2) + '%'
                }
              }
            },
            data: this.numData
          }
        ],
        series: [
          {
            name: '人数',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: 'rgb(57,89,255,1)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(46,200,207,1)'
                  }
                ])
              }
            },
            barWidth: 10,
            data: this.numData
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 10,
            barGap: '-100%',
            data: this.maxDataArr,
            itemStyle: {
              normal: {
                color: 'rgba(24,31,68,1)',
                barBorderRadius: 30
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
