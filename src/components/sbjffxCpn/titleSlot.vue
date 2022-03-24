<template>
  <div class="title_item">
    <div style="height: 40px; line-height: 40px">
      <div class="d3"></div>
    </div>
    <div class="title_msg">
      {{ titleMsg }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['titleMsg']
}
</script>

<style scoped>
.title_item {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-image: linear-gradient(-90deg, #072854 0%, #3698ff 100%),
    linear-gradient(#136cce, #136cce);
  background-blend-mode: normal, normal;
}
.d3 {
  margin-left: 10px;
  margin-top: 12px;
  width: 0;
  height: 0;
  border-width: 8px;
  border-style: solid;
  border-color: transparent transparent transparent #f39f52;
}
.title_msg {
  width: 180px;
  height: 100%;
  font-family: PingFang-SC-Bold;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 40px;
  letter-spacing: 0px;
  color: #fefefe;
}
</style>
