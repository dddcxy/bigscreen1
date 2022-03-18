<template>
  <div style="width: 100%; height: calc(100% - 51px);overflow:hidden">
    <div ref="twoBar" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      default: () => [
        {
          name: "接收量",
          value: [
            {
              max: 1200,
              name: "20210329",
              value: 600,
            },
            {
              max: 1200,
              name: "20210329",
              value: 600,
            },
            {
              max: 1200,
              name: "20210329",
              value: 600,
            },
            {
              max: 1200,
              name: "20210329",
              value: 600,
            },
            {
              max: 1200,
              name: "20210329",
              value: 600,
            },
            {
              max: 1200,
              name: "20210329",
              value: 600,
            },
          ],
        },
        {
          name: "转出量",
          value: [
            {
              max: 1200,
              name: "20210329",
              value: 250,
            },
            {
              max: 1200,
              name: "20210329",
              value: 220,
            },
            {
              max: 1200,
              name: "20210329",
              value: 400,
            },
            {
              max: 1200,
              name: "20210329",
              value: 600,
            },
            {
              max: 1200,
              name: "20210329",
              value: 500,
            },
            {
              max: 1200,
              name: "20210329",
              value: 550,
            },
          ],
        },
      ],
    },
    max:{
      type:Number,
      default:1200
    },
    unit:{
      type:String,
      default:"万次"
    }
  },
  data() {
    return {
      legendData:[]
    }
  },
  mounted() {
    this.dealData()
    this.initChart();
  },
  /**
   * 销毁图表实例，防止内存溢出
   */
  beforeDestroy() {
    let myCharts = this.$echarts.init(this.$refs.twoBar);
    myCharts.dispose();
  },
  methods: {
    /**
     * 数据处理
     */
    dealData(){
      this.legendData = this.dataList.map(item=>item.name)
    },
    /**
     * 初始化实例
     */
    initChart() {
      let myCharts = this.$echarts.init(this.$refs.twoBar);
      let options = this.initOptions();
      myCharts.setOption(options);
    },
    initOptions() {
      return {
        color: ["#1A64F8"],
        tooltip: {
          confine: true,
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
          formatter: function (prams) {
            return prams[0].name + ":" + prams[0].data;
          },
        },
        legend: {
          data: this.legendData,
          icon: "rect",
          top: 0,
          right: "center",
          itemGap: 20,
          itemWidth: 12,
          itemHeight: 8,
          textStyle: {
            fontSize: 14,
            color: "#fff"
          },
        },
        grid: {
          left: "8%",
          right: "3%",
          top: "16%",
          bottom: "10%",
        },
        xAxis: [
          {
            type: "category",
            data: this.dataList[1].value.map((item) => {
              return item.name;
            }),
            axisTick: {
              alignWithLabel: true,
            },
            axisLabel: {
              color: "#606266",
              interval: 0,
              margin: 10,
              align: "center",
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.1)",
              },
            },
          },
        ],
        yAxis: {
          name: "单位:("+this.unit+")",
          nameTextStyle: {
            color: "#606266",
          },
          max: this.max,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#606266",
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,0.1)",
            },
          },
        },
        series: [
          // 梯田
          {
            name: this.legendData[0],
            type: "bar",
            backgroundStyle: {
              color: "rgba(216, 229, 247, 0.55)",
              borderRadius: [8, 8, 0, 0],
            },
            itemStyle: {
              normal: {
                borderRadius: [12, 12, 0, 0],
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: "#0184e7",
                    opacity: 0.85,
                  },
                  {
                    offset: 0,
                    color: "#2cc5fe",
                    opacity: 0.79,
                  },
                ]),
                barBorderRadius: [12, 12, 0, 0],
              },
            },
            barWidth: "15",
            data: this.dataList[0].value.map((item) => {
              return item.value;
            }),
          },
          // 坡地
          {
            name: this.legendData[1],
            type: "bar",
            backgroundStyle: {
              color: "rgba(216, 229, 247, 0.55)",
              borderRadius: [8, 8, 0, 0],
            },
            itemStyle: {
              normal: {
                borderRadius: [12, 12, 0, 0],
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: "#dfaf02",
                    opacity: 0.85,
                  },
                  {
                    offset: 0,
                    color: "#fdf32b",
                    opacity: 0.79,
                  },
                ]),
                barBorderRadius: [12, 12, 0, 0],
              },
            },
            barWidth: "15",
            data: this.dataList[1].value.map((item) => {
              return item.value;
            }),
          },
        ],
      };
    },
  },
};
</script>

<style lang="less" scoped></style>
