<template>
  <div style="width: 100%; height: calc(100% - 51px);overflow:hidden">
    <div ref="funnel" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      default: () => [
        { value: 2.1, name: "硕士及以上" },
        { value: 3.2, name: "高中" },
        { value: 4.5, name: "专科" },
        { value: 6.6, name: "本科" },
        { value: 8, name: "中学及以下" },
      ],
    },
    colorList: {
      type: Array,
      default: () => ["#7de5e3", "#37cfcc", "#35a9c3", "#317cb7", "#2f54ac"],
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.initChart();
  },
  /**
   * 销毁图表实例，防止内存溢出
   */
  beforeDestroy() {
    let myCharts = this.$echarts.init(this.$refs.funnel);
    myCharts.dispose();
  },
  methods: {
    /**
     * 初始化实例
     */
    initChart() {
      let myCharts = this.$echarts.init(this.$refs.funnel);
      let options = this.initOptions();
      myCharts.setOption(options);
    },
    initOptions() {
      let colorList = this.colorList;
      return {
        color: colorList,
        tooltip: {
          confine: true,
          trigger: "item",
          formatter: "{b} : {c}",
        },

        series: [
          {
            name: "",
            type: "funnel",
            top: "10%",
            bottom: "10%",
            left: "15%",
            width: "50%",
            sort: "ascending",
            gap: 5,
            label: {
              normal: {
                textStyle: {
                  fontSize: "16",
                  color: "#fff",
                },
                formatter: (p) => {
                  console.log(p);
                  return (
                    "{name|" +
                    p.name +
                    "}\n" +
                    p.value +
                    "万  " +
                    p.percent +
                    "%"
                  );
                },
                rich: {
                  name: {
                    color: "#4b9dd6",
                    fontSize: "16",
                  },
                },
                fontSize: 18,
              },
            },
            labelLine: {
              show: true,
              normal: {
                length: 50,
                // 指示线的属性
                lineStyle: {
                  width: 1,
                  color: "#fff",
                  type: "solid",
                },
              },
            },
            itemStyle: {
              normal: {
                opacity: 0.8,
                borderColor: "rgba(9,20,36,0)",
              },
            },
            data: this.dataList,
          },
          {
            name: "",
            type: "funnel",
            top: "10%",
            bottom: "10%",
            left: "15%",
            width: "50%",
            maxSize: "80%",
            sort: "ascending",
            gap: 5,
            label: {
              normal: {
                show: false,
                position: "inside",
                formatter: "{c}",
                textStyle: {
                  color: "#fff",
                },
              },
            },
            itemStyle: {
              normal: {
                opacity: 1,
                borderColor: "rgba(9,20,36,0)",
                borderWidth: 0,
                shadowBlur: 5,
                shadowOffsetX: 5,
                shadowOffsetY: 0,
                shadowColor: "rgba(0, 0, 0, 1)",
              },
            },
            data: this.dataList,
          },
        ],
      };
    },
  },
};
</script>

<style lang="less" scoped></style>
