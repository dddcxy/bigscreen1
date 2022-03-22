<template>
  <screen-adapter>
    <div class="mainPage">
      <!-- 页面标题 -->
      <page-title></page-title>
      <!-- 页面主体 -->
      <div class="mainSection">
        <!-- 主体上部 数字统计区 -->
        <div class="sectionTop">
          <num-statistics :data="numStatisticsData"></num-statistics>
        </div>
        <!-- 主体下部 -->
        <div class="sectionBottom">
          <!-- 主体下部 左部图表区 -->
          <div class="sectionBottom-side">
            <div class="sectionBottom-side-item">
              <item-title :title="'性别分布'"></item-title>
              <pie-chart></pie-chart>
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
              >
              </pie-chart>
            </div>
            <div class="sectionBottom-side-item">
              <item-title :title="'存档民族分析'"></item-title>
              <pie-chart
                :pData="cdmzfxData"
                :color="cdmzfxColor"
                :bgImgName="'存档民族分析.png'"
                :bgImgWidth="50"
                :bgImgHeight="60"
              >
              </pie-chart>
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
// 自适应组件
import screenAdapter from "../components/screenAdapter";
//页面标题组件
import pageTitle from "../components/pageTitle";
//主图上部 数字统计组件
import numStatistics from "../components/numStatistics";
// 各板块标题组件
import itemTitle from "../components/itemTitle";
// 地图组件
import mapChart from "../components/mapChart";
// 饼图组件
import pieChart from "../components/pieChart";
// 横向柱状图组件
import columnBarChart from "../components/columnBarChart";
// 多饼图组件
import multiPieChart from "../components/multiPieChart";
// 双量柱状图组件
import twoBarChart from "../components/twoBarChart";
// 漏斗图组件
import funnelChart from "../components/funnelChart";

export default {
  components: {
    screenAdapter,
    pageTitle,
    numStatistics,
    itemTitle,
    mapChart,
    pieChart,
    columnBarChart,
    multiPieChart,
    twoBarChart,
    funnelChart,
  },
  data() {
    return {
      cdxzfxData: [
        {
          name: "个人存档",
          value: 2456578,
        },
        {
          name: "企业存档",
          value: 2456578,
        },
      ],
      cdxzfxColor: ["#00d999", "#ffe400"],
      cdmzfxData: [
        {
          name: "汉族",
          value: 2456578,
        },
        {
          name: "少数民族",
          value: 2456578,
        },
      ],
      cdmzfxColor: ["#125bff", "#1afbff"],

      numStatisticsData:[]
    };
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$http.post('/ldrkda/getData').then(res => {
        console.log(res);
        this.numStatisticsData = res.data.data.numStatisticsData
      })
    },
  },
};
</script>

<style lang="less" scoped>
.mainPage {
  background: url("../assets/19/背景.png") no-repeat 100%;
  width: 1920px;
  height: 1080px;
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
