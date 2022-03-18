<template>
  <div class="itemTitle">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "itemTitle",
    },
  },
};
</script>

<style lang="less" scoped>
.itemTitle {
  width: 100%;
  height: 51px;
  background-image: linear-gradient(to right, #002555, #001533);
  font-size: 16px;
  color: #aee0ff;
  line-height: 51px;
  padding-left: 30px;
}
</style>
