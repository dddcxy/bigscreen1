<template>
  <div class="numComponent">
    <div
      class="eachNum"
      :style="'width:' + width"
      v-for="(item, index) in data"
      :key="index"
    >
      <!-- 图片 -->
      <div class="imgShow">
        <img
          :src="
            imgNameArr[index]
              ? require('@/assets/19/' + imgNameArr[index])
              : require('@/assets/19/档案接受量.png')
          "
        />
      </div>
      <!-- 数据显示主体 -->
      <div class="dataShow">
        <!-- 标题 -->
        <div class="showTitle">{{ item.title }}</div>
        <div class="showData">
          <span
            class="showNum"
            v-for="(item1, index1) in item.num.toString().length"
            :key="index1"
          >
            {{ numToArray(item.num)[index1] }}
          </span>
          <span class="showUnit">{{ item.unit }}</span>
          同比<span
            class="showTb"
            :style="item.tb > 0 ? { color: 'green' } : { color: 'red' }"
            >{{ item.tb }}%</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "460px",
    },
    imgNameArr: {
      type: Array,
      default: () => [
        "档案总存档.png",
        "档案转出量.png",
        "档案借阅量.png",
        "档案接受量.png",
      ],
    },
    data: {
      type: Array,
      default: () => [
        {
          title: "档案总存档",
          num: 46199,
          tb: 2.56,
          unit: "家",
        },
        {
          title: "档案转出量",
          num: 46199,
          tb: -2.56,
          unit: "家",
        },
        {
          title: "档案借阅量",
          num: 46199,
          tb: 2.56,
          unit: "家",
        },
        {
          title: "档案接受量",
          num: 46199,
          tb: -2.56,
          unit: "家",
        },
      ],
    },
  },
  methods: {
    /**
     * 数字转为数组
     */
    numToArray(num) {
      let str = num.toString();
      let arr = str.split("");
      return arr;
    },
  },
};
</script>

<style lang="less" scoped>
.numComponent {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .eachNum {
    height: 100%;
    background: url("../assets/19/框.png") no-repeat center center;
    display: flex;
    .imgShow {
      height: 100%;
      width: 120px;
      padding: 30px 20px 30px 40px;
    }
    .dataShow {
      display: inline-block;
      font-size: 14px;
      color: #a5a7b1;
      .showTitle {
        height: 40%;
        font-size: 14px;
        color: #ffffff;
        padding-top: 20px;
        text-shadow: 1px 1px 10px #a8daff, -1px 1px 10px #a8daff,
          1px -1px 10px #a8daff, -1px -1px 10px #a8daff;
      }
      .showData {
        padding-top: 10px;
        height: 60%;
      }
      .showNum {
        display: inline-block;
        width: 30px;
        height: 40px;
        line-height: 40px;
        border-radius: 2px;
        border: solid 2px #274d8e;
        font-size: 28px;
        font-family: Impact;
        font-weight: bold;
        background: linear-gradient(to bottom, #ffffff, #a8daff);
        -webkit-background-clip: text;
        color: transparent;
        text-align: center;
        margin-right: 3px;
      }
      .showUnit {
        width: 14px;
        height: 12px;
        font-family: MicrosoftYaHei;
        line-height: 40px;
      }
      .showTb {
        margin-left: 5px;
      }
    }
  }
}
</style>
