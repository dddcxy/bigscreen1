<template>
  <!-- 屏幕适配 -->
  <screen-adapter>
    <div class="main">
      <!-- 返回主页按钮 -->
      <go-back-main></go-back-main>
      <!-- 页面标题 -->
      <page-title :title="'社保缴费分析'"></page-title>
      <div style="padding-left: 40px">
        <!-- 上部数据展示 -->
        <top-item></top-item>
        <!-- 中部数据展示 -->
        <div class="center_item">
          <!-- 中部左 饼图 各险种缴费分布 -->
          <div class="center_1">
            <title-slot :titleMsg="'各险种缴费分布'">
              <div class="slot">
                <select class="slot_select">
                  <option value="征缴总金额" selected="selected">征缴总金额</option>
                </select>
              </div>
            </title-slot>
            <div class="center_1_chart">
              <pie-chart></pie-chart>
            </div>
          </div>
          <!-- 中部中 银河图 各险种缴费明细-->
          <div class="center_2">
            <title-slot :titleMsg="'各险种缴费明细'">
              <div class="slot">
                <div class="tab">
                  <div class="tab_item">城职养老</div>
                  <div class="tab_item">城居养老</div>
                  <div class="tab_item">机关养老</div>
                  <div class="tab_item">失业保险</div>
                  <div class="tab_item">工商保险</div>
                </div>
              </div>
            </title-slot>
            <galaxy-show></galaxy-show>
          </div>
          <!-- 中部右 雷达图 各险种补缴/退缴情况-->
          <div class="center_1">
            <title-slot :titleMsg="'各险种补缴/退缴情况'">
              <div class="slot"></div>
            </title-slot>
            <radar-map></radar-map>
          </div>
        </div>
        <!-- 下部数据展示 -->
        <div class="bottom_item">
          <!-- 下部左 动态柱线图  缴费趋势分析-->
          <div class="bottom_1">
            <title-slot :titleMsg="'缴费趋势分析'">
              <div class="slot">
                <select class="slot_select">
                  <option value="全部" selected="selected">全部</option>
                </select>
              </div>
            </title-slot>
            <one-bar-line class="echarts_bg" :barData="barData" :lineData="lineData" :xData="xData"></one-bar-line>
          </div>
          <!-- 下部中 折线图 征缴趋势分析-->
          <div class="bottom_1">
            <title-slot :titleMsg="'征缴趋势分析'">
              <div class="slot"></div>
            </title-slot>
            <three-line class="echarts_bg"></three-line>
          </div>
          <!-- 下部右 静态柱线图 补缴/退缴趋势分析 -->
          <div class="bottom_1">
            <title-slot :titleMsg="'补缴/退缴趋势分析'">
              <div class="slot">
                <select class="slot_select">
                  <option value="全部" selected="selected">全部</option>
                </select>
              </div>
            </title-slot>
            <two-bar-line class="echarts_bg"></two-bar-line>
          </div>
        </div>
      </div>
    </div>
  </screen-adapter>
</template>

<script>
// 返回主页按钮
import goBackMain from '@/components/goBackMain'
// 屏幕适配
import ScreenAdapter from '@/components/screenAdapter.vue'
// 页面标题组件
import pageTitle from '@/components/pageTitle'
// 顶部数据展示
import TopItem from '@/components/sbjffxCpn/topItem.vue'
// 各板块标题组件
import TitleSlot from '@/components/sbjffxCpn/titleSlot.vue'
// 饼图
import PieChart from '@/components/sbjffxCpn/pieChart.vue'
// 银河图
import GalaxyShow from '@/components/sbjffxCpn/galaxyShow.vue'
// 雷达图
import RadarMap from '@/components/sbjffxCpn/radarMap.vue'
// 动态柱线图
import oneBarLine from '@/components/sbjffxCpn/oneBarLine.vue'
// 静态柱线图
import twoBarLine from '@/components/sbjffxCpn/twoBarLine.vue'
// 折线图
import threeLine from '@/components/sbjffxCpn/threeLine.vue'

export default {
  components: {
    goBackMain,
    ScreenAdapter,
    pageTitle,
    TopItem,
    TitleSlot,
    PieChart,
    GalaxyShow,
    RadarMap,
    oneBarLine,
    twoBarLine,
    threeLine
  },
  data () {
    return {
      pieData: [],
      barData: [200, 85, 112, 275, 305, 415],
      xData: ['1月', '2月', '3月', '4月', '5月', '6月'],
      lineData: [274.55, 156.35, 299.02, 199.55, 319.57, 256.14]
    }
  },
  mounted () {
    this.getData()
    setInterval(() => {
      this.getBarData()
      this.getXData()
      this.getLineData()
    }, 2100)
  },
  methods: {
    getData () {
      this.$http.post('/sbjffx/getData').then((res) => {
        this.pieData = res.data.data.pieData
      })
    },
    /**
     * 模拟动态数据
     */
    getBarData () {
      let firstData = this.barData[0]
      this.barData.shift()
      this.barData.push(firstData)
    },
    getXData () {
      let firstData = this.xData[0]
      this.xData.shift()
      this.xData.push(firstData)
    },
    getLineData () {
      let firstData = this.lineData[0]
      this.lineData.shift()
      this.lineData.push(firstData)
    }
  }
}
</script>

<style lang="less" scoped>
/* 页面主体样式 */
.main {
  width: 1920px;
  height: 1080px;
  background: url('../assets/19/背景.png') no-repeat 100% 100%;
  position: relative;
}

/* 中间样式 */
.center_item {
  width: 1840px;
  height: 490px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.center_1 {
  display: inline-block;
  width: 420px;
  height: 489px;
  background: linear-gradient(to top, #306eef, #306eef) left top no-repeat,
    /*上左*/ linear-gradient(to right, #306eef, #306eef) left top no-repeat,
    /*左上*/ linear-gradient(to left, #306eef, #306eef) right top no-repeat,
    /*上右*/ linear-gradient(to bottom, #306eef, #306eef) right top no-repeat,
    /*上右*/ linear-gradient(to left, #306eef, #306eef) left bottom no-repeat,
    /*下左*/ linear-gradient(to bottom, #306eef, #306eef) left bottom no-repeat,
    /*左下*/ linear-gradient(to top, #306eef, #306eef) right bottom no-repeat,
    /*下右*/ linear-gradient(to left, #306eef, #306eef) right bottom no-repeat; /*右下*/
  background-size: 2px 16px, 16px 2px, 2px 16px, 16px 2px;
  background-color: rgba(36, 56, 128, 0.21);
}
.center_2 {
  display: inline-block;
  width: 960px;
  height: 489px;
  background: linear-gradient(to top, #306eef, #306eef) left top no-repeat,
    /*上左*/ linear-gradient(to right, #306eef, #306eef) left top no-repeat,
    /*左上*/ linear-gradient(to left, #306eef, #306eef) right top no-repeat,
    /*上右*/ linear-gradient(to bottom, #306eef, #306eef) right top no-repeat,
    /*上右*/ linear-gradient(to left, #306eef, #306eef) left bottom no-repeat,
    /*下左*/ linear-gradient(to bottom, #306eef, #306eef) left bottom no-repeat,
    /*左下*/ linear-gradient(to top, #306eef, #306eef) right bottom no-repeat,
    /*下右*/ linear-gradient(to left, #306eef, #306eef) right bottom no-repeat; /*右下*/
  background-size: 2px 16px, 16px 2px, 2px 16px, 16px 2px;
  background-color: rgba(36, 56, 128, 0.21);
}
/* 底部 */
.bottom_item {
  width: 1840px;
  height: 320px;
  display: flex;
  justify-content: space-between;
}
.bottom_1 {
  display: inline-block;
  width: 600px;
  height: 320px;
  background: linear-gradient(to top, #306eef, #306eef) left top no-repeat,
    /*上左*/ linear-gradient(to right, #306eef, #306eef) left top no-repeat,
    /*左上*/ linear-gradient(to left, #306eef, #306eef) right top no-repeat,
    /*上右*/ linear-gradient(to bottom, #306eef, #306eef) right top no-repeat,
    /*上右*/ linear-gradient(to left, #306eef, #306eef) left bottom no-repeat,
    /*下左*/ linear-gradient(to bottom, #306eef, #306eef) left bottom no-repeat,
    /*左下*/ linear-gradient(to top, #306eef, #306eef) right bottom no-repeat,
    /*下右*/ linear-gradient(to left, #306eef, #306eef) right bottom no-repeat; /*右下*/
  background-size: 2px 16px, 16px 2px, 2px 16px, 16px 2px;
  background-color: rgba(36, 56, 128, 0.21);
}
.echarts_bg {
  background: url('../assets/03社保缴费分析/bar_bottom.png') no-repeat 45% 82%;
  background-size: 81%;
}
.slot {
  /* display:flex;
    align-items:center;
    justify-content:center; */
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-10%, -70%);
}
.slot_select {
  width: 140px;
  height: 28px;
  background-color: #061524;
  border: solid 1px #134086;
  color: #fff;
  border: none;
}
.center_1_chart {
  width: 100%;
  height: 420px;
  background: url('../assets/03社保缴费分析/底部.png') no-repeat center 30%;
}
.tab {
  display: flex;
}
.tab_item {
  box-sizing: border-box;
  height: 65px;
  padding: 24px 10px 0;
  font-size: 17px;
  color: rgba(250, 250, 250, 0.9);
}
.tab_item:first-child {
  border-bottom: 5px solid #306eef;
}
</style>
