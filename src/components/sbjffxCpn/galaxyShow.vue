<template>
  <!-- 各险种缴费明细 动态旋转图-->
  <div class="galaxy">
    <div class="bg_ring">
      <div class="bg_ring1"></div>
    </div>
    <div class="unit">单位：万元/万人</div>
    <div class="title">{{ title }}</div>
    <div class="center">
      <div class="center_msg">
        <p class="p_title">{{ data[0] ? data[0].value : '' }}</p>
        <p class="p_title">{{ data[0] ? data[0].title : '' }}</p>
      </div>
    </div>
    <div class="innerRing_1 imgWith100">
      <div class="ballTop_msg color1">
        <p class="p_title">{{ data[1] ? data[1].value : '' }}</p>
        <p class="p_title">{{ data[1] ? data[1].title : '' }}</p>
      </div>
    </div>
    <div class="imgWith100 innerRing_2">
      <div class="ballTop_msg color1">
        <p class="p_title">{{ data[2] ? data[2].value : '' }}</p>
        <p class="p_title">{{ data[2] ? data[2].title : '' }}</p>
      </div>
    </div>
    <div class="outerRing_1 imgWith100">
      <div class="ballTop_msg color2">
        <p class="p_title">{{ data[3] ? data[3].value : '' }}</p>
        <p class="p_title">{{ data[3] ? data[3].title : '' }}</p>
      </div>
    </div>
    <div class="outerRing_2 imgWith100">
      <div class="ballTop_msg color2">
        <p class="p_title">{{ data[4] ? data[4].value : '' }}</p>
        <p class="p_title">{{ data[4] ? data[4].title : '' }}</p>
      </div>
    </div>
    <div class="outerRing_3 imgWith100">
      <div class="ballTop_msg color2">
        <p class="p_title">{{ data[5] ? data[5].value : '' }}</p>
        <p class="p_title">{{ data[5] ? data[5].title : '' }}</p>
      </div>
    </div>
    <div class="outerRing_4 imgWith100">
      <div class="ballTop_msg color2">
        <p class="p_title">{{ data[6] ? data[6].value : '' }}</p>
        <p class="p_title">{{ data[6] ? data[6].title : '' }}</p>
      </div>
    </div>
    <div class="outerRing_5"></div>
    <div class="outerRing_6"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '城职养老'
    },
    data: {
      type: Array,
      default: () => [
        { title: '征缴总金额', value: '455.7' },
        { title: '缴费总人数', value: '254.6' },
        { title: '征缴率', value: '96%' },
        { title: '补缴金额', value: '65.7' },
        { title: '个人缴费金额', value: '155.7' },
        { title: '单位缴费金额', value: '288.7' },
        { title: '退缴金额', value: '98.6' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.galaxy {
  background: url("../../assets/03社保缴费分析/底部001.png") no-repeat center;
  width: 100%;
  height: 100%;
  // height: calc(100% - 40px);
  position: relative;
  .bg_ring {
    width: 100%;
    height: 84%;
    transform: rotateX(70deg);
    .bg_ring1 {
      width: 100%;
      height: 100%;
      background: url("../../assets/03社保缴费分析/底部.png") no-repeat center;
      background-size: 60%;
      animation: rotate 8s linear infinite 0.5s;
    }
  }
  @keyframes rotate {
    from {
      transform: rotateZ(360deg);
    }
    to {
      transform: rotateZ(0deg);
    }
  }
  .unit {
    position: absolute;
    color: #a9b5c0;
    font-size: 14px;
    top: 15px;
    left: 20px;
  }
  .title {
    position: absolute;
    top: 5%;
    left: 46%;
    font-size: 16px;
    font-family: PingFang-SC-Bold;
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;
    letter-spacing: 0px;
    background-image: -webkit-linear-gradient(bottom, orange, #fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .center {
    width: 300px;
    height: 300px;
    background: url("../../assets/03社保缴费分析/球01.png") no-repeat center;
    background-size: 80%;
    position: absolute;
    top: -5%;
    left: 35%;
    transform: translate(-50%, -90%);
    display: table;
    text-align: center;
    animation: updown 2s linear infinite;
    @keyframes updown {
      0% {
        transform: translateY(-8px);
      }
      50% {
        transform: translateY(8px);
      }
      100% {
        transform: translateY(-8px);
      }
    }
    .center_msg {
      display: table-cell;
      vertical-align: middle;
      .p_title {
        font-size: 17px;
        font-weight: bold;
        line-height: 10px;
        color: #8a2500;
      }
    }
  }
  .imgWith100 {
    width: 100px;
    height: 100px;
    position: absolute;
    .ballTop_msg {
      position: absolute;
      width: 100px;
      top: -38px;
      text-align: center;
      font-size: 16px;
      line-height: 5px;
    }
    .color1 {
      color: #f7caa3;
    }
    .color2 {
      color: #bbe4ff;
    }
  }
  .innerRing_1 {
    background: url("../../assets/03社保缴费分析/球03-橙色拷贝.png") no-repeat
      center;
    top: 45%;
    left: 35%;
  }
  .innerRing_2 {
    background: url("../../assets/03社保缴费分析/球03-橙色.png") no-repeat
      center;
    top: 45%;
    left: 55%;
  }
  .outerRing_1 {
    background: url("../../assets/03社保缴费分析/球02-蓝色拷贝2.png") no-repeat
      center;
    top: 35%;
    left: 8%;
  }
  .outerRing_2 {
    background: url("../../assets/03社保缴费分析/球02-蓝色.png") no-repeat
      center;
    top: 57%;
    left: 22%;
  }
  .outerRing_3 {
    background: url("../../assets/03社保缴费分析/球02-蓝色拷贝.png") no-repeat
      center;
    top: 57%;
    left: 68%;
  }
  .outerRing_4 {
    background: url("../../assets/03社保缴费分析/球02-蓝色拷贝3.png") no-repeat
      center;
    top: 35%;
    left: 82%;
  }
  .outerRing_5 {
    width: 50px;
    height: 50px;
    position: absolute;
    background: url("../../assets/03社保缴费分析/球02-蓝色拷贝4.png") no-repeat
      center;
    top: 20%;
    left: 30%;
  }
  .outerRing_6 {
    width: 50px;
    height: 50px;
    position: absolute;
    background: url("../../assets/03社保缴费分析/球02-蓝色拷贝5.png") no-repeat
      center;
    top: 20%;
    left: 65%;
  }
}
</style>
