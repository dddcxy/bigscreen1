<template>
  <div class="top_item">
    <div class="each_item" v-for="(item, index) in dataMsg" :key="index">
      <div class="item_img">
        <img :src="imgs[index].img" alt />
      </div>
      <div class="item_data">
        <div class="data_title">{{ item.title }}</div>
        <div class="data_num" style="font-size: 12px">
          <span style="font-size: 24px">{{ item.num }}</span>
          <span>万元</span>
          <span :style="{ color: item.rate >= 0 ? 'red' : 'green' }">{{ getRate(item.rate) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgs: {
      type: Array,
      default: () => [
        { img: require('@/assets/03社保缴费分析/01_70.png') },
        { img: require('@/assets/03社保缴费分析/01_38.png') },
        { img: require('@/assets/03社保缴费分析/01_7.png') },
        { img: require('@/assets/03社保缴费分析/01_75.png') },
        { img: require('@/assets/03社保缴费分析/01_44.png') },
        { img: require('@/assets/03社保缴费分析/01_62.png') },
        { img: require('@/assets/03社保缴费分析/01.png') }
      ]
    },
    dataMsg: {
      type: Array,
      default: () => [
        {
          title: '个人缴费金额',
          num: '34.56',
          rate: 2.5
        },
        {
          title: '单位缴费金额',
          num: '86.56',
          rate: -0.2
        },
        {
          title: '征缴总金额',
          num: '234.5',
          rate: 2.5
        },
        {
          title: '缴费总人数',
          num: '34.56',
          rate: 2.5
        },
        {
          title: '征缴率',
          num: '96%',
          rate: 2.5
        },
        {
          title: '补缴金额',
          num: '243.6',
          rate: 2.5
        },
        {
          title: '退费金额',
          num: '34.56',
          rate: 2.5
        }
      ]
    }
  },
  data () {
    return {}
  },
  methods: {
    // 格式化数据
    getRate (rate) {
      let str = ''
      if (rate >= 0) {
        str = '+' + rate + '%'
        return str
      } else {
        str = rate + '%'
        return str
      }
    }
  }
}
</script>

<style scoped>
.top_item {
  position: relative;
  background-color: #071018;
  width: 1840px;
  height: 100px;
  border: solid 1px #2564ae;
  display: flex;
  margin-bottom: 20px;
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
.each_item {
  display: flex;
  width: 242px;
  height: 70px;
  margin-top: 15px;
  margin-left: 20px;
}
.item_img {
  width: 70px;
  height: 70px;
}
.item_data {
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 70px;
}
.data_title {
  color: #fff;
  height: 35px;
  line-height: 35px;
  padding-left: 10px;
  font-size: 14px;
  color: #a9b5c0;
}
.data_num {
  color: #fff;
  height: 35px;
  line-height: 35px;
  padding-left: 10px;
}
</style>
