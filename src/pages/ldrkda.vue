<template>
  <screen-adapter>
    <div class="mainPage">
      <!-- 返回主页按钮 -->
      <go-back-main></go-back-main>
      <!-- 页面标题 -->
      <page-title></page-title>
      <!-- 页面主体 -->
      <div class="mainSection">
        <!-- 主体上部 数字统计区 -->
        <div class="sectionTop">
          <num-statistics :data="numStatisticsData" :imgNameArr="imgArr"></num-statistics>
        </div>
        <!-- 主体下部 -->
        <div class="sectionBottom">
          <!-- 主体下部 左部图表区 -->
          <div class="sectionBottom-side">
            <div class="sectionBottom-side-item">
              <item-title :title="'性别分布'"></item-title>
              <pie-chart :pData="sexData"></pie-chart>
            </div>
            <div class="sectionBottom-side-item">
              <item-title :title="'年龄分布'"></item-title>
              <column-bar-chart></column-bar-chart>
            </div>
            <div class="sectionBottom-side-item">
              <item-title :title="'学历分布'"></item-title>
              <funnel-chart></funnel-chart>
            </div>
          </div>
          <!-- 主体下部 中部图表区 -->
          <div class="sectionBottom-center">
            <!-- 地图 -->
            <div class="sectionBottom-center-top">
              <map-chart></map-chart>
            </div>
            <div class="sectionBottom-center-bottom">
              <multi-pie-chart></multi-pie-chart>
            </div>
          </div>
          <!-- 主体下部 右部图表区 -->
          <div class="sectionBottom-side">
            <div class="sectionBottom-side-item">
              <item-title :title="'存档性质分析'"></item-title>
              <pie-chart
                :pData="cdxzfxData"
                :color="cdxzfxColor"
                :bgImgName="'存档性质分析.png'"
                :bgImgWidth="50"
                :bgImgHeight="60"
              ></pie-chart>
            </div>
            <div class="sectionBottom-side-item">
              <item-title :title="'存档民族分析'"></item-title>
              <pie-chart
                :pData="cdmzfxData"
                :color="cdmzfxColor"
                :bgImgName="'存档民族分析.png'"
                :bgImgWidth="50"
                :bgImgHeight="60"
              ></pie-chart>
            </div>
            <div class="sectionBottom-side-item">
              <item-title :title="'近6个月档案接收和转出情况'"></item-title>
              <two-bar-chart></two-bar-chart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </screen-adapter>
</template>

<script>
// 返回主页按钮
import goBackMain from '@/components/goBackMain'
// 自适应组件
import screenAdapter from '@/components/screenAdapter'
// 页面标题组件
import pageTitle from '@/components/pageTitle'
// 主图上部 数字统计组件
import numStatistics from '@/components/ldrkdaCpn/numStatistics'
// 各板块标题组件
import itemTitle from '@/components/ldrkdaCpn/itemTitle'
// 地图组件
import mapChart from '@/components/ldrkdaCpn/mapChart'
// 饼图组件
import pieChart from '@/components/ldrkdaCpn/pieChart'
// 横向柱状图组件
import columnBarChart from '@/components/ldrkdaCpn/columnBarChart'
// 多饼图组件
import multiPieChart from '@/components/ldrkdaCpn/multiPieChart'
// 双量柱状图组件
import twoBarChart from '@/components/ldrkdaCpn/twoBarChart'
// 漏斗图组件
import funnelChart from '@/components/ldrkdaCpn/funnelChart'

export default {
  components: {
    goBackMain,
    screenAdapter,
    pageTitle,
    numStatistics,
    itemTitle,
    mapChart,
    pieChart,
    columnBarChart,
    multiPieChart,
    twoBarChart,
    funnelChart
  },
  data () {
    return {
      numStatisticsData: [],
      sexData: [],
      imgArr: [
        '档案总存档.png',
        '档案转出量.png',
        '档案借阅量.png',
        '档案接受量.png'
      ],
      cdxzfxData: [],
      cdxzfxColor: ['#00d999', '#ffe400'],
      cdmzfxData: [],
      cdmzfxColor: ['#125bff', '#1afbff']
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$http.post('/ldrkda/getData').then((res) => {
        console.log(res)
        this.numStatisticsData = res.data.data.numStatisticsData
        this.sexData = res.data.data.sexData
        this.cdxzfxData = res.data.data.cdxzfxData
        this.cdmzfxData = res.data.data.cdmzfxData
      })
    }
  }
}
</script>

<style lang="less" scoped>
.mainPage {
  background: url('../assets/19/背景.png') no-repeat 100%;
  width: 1920px;
  height: 1080px;
  position: relative;
  .mainSection {
    box-sizing: border-box;
    width: 100%;
    height: 997px;
    padding: 20px;
    .sectionTop {
      width: 100%;
      height: 111px;
    }
    .sectionBottom {
      width: 100%;
      height: 817px;
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .sectionBottom-side {
        width: 540px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .sectionBottom-side-item {
          flex: 1;
          width: 540px;
        }
      }
      .sectionBottom-center {
        width: 780px;
        .sectionBottom-center-top {
          height: 580px;
        }
        .sectionBottom-center-bottom {
          height: 250px;
        }
      }
    }
  }
}
</style>
