<template>
  <div class="goBackBtn" @click="goBack()">返回</div>
</template>

<script>
export default {
  methods: {
    goBack () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.goBackBtn {
  position: absolute;
  right: 3%;
  top: 23px;
  text-align: center;
  height: 50px;
  width: 100px;
  line-height: 50px;
  font-size: 20px;
  color: rgb(138, 195, 248);
  border-radius: 39px;
  background: linear-gradient(145deg, #0a1f48, #081a3c);
  cursor: pointer;
}
</style>
