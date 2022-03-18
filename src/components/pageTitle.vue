<template>
  <div class="pageTitle">
    <div class="pageTitle-msg">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "流动人员档案情况分析",
    },
  },
};
</script>

<style lang="less" scoped>
.pageTitle {
  width: 100%;
  height: 83px;
  line-height: 60px;
  text-align: center;
  background: url("../assets/19/标题背景.png") no-repeat center center / 100%;
  .pageTitle-msg {
    font-size: 28px;
    background: linear-gradient(to bottom, #ffffff, #a8daff);
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
  }
}
</style>
