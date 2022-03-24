<template>
  <screenAdapter>
    <div id="mainPage">
      <div class="btnArea">
        <div @mouseup="goPage('ldrkda',$event)" @mousedown="mouseDown($event)" class="goBtn">
          <div class="btnWord">流动人员档案情况分析</div>
        </div>
        <div @mouseup="goPage('sbjffx',$event)" @mousedown="mouseDown($event)" class="goBtn">
          <div class="btnWord">社保缴费分析</div>
        </div>
      </div>
    </div>
  </screenAdapter>
</template>

<script>
import screenAdapter from '@/components/screenAdapter'
export default {
  name: 'App',
  components: {screenAdapter},
  methods: {
    goPage (pageName, $event) {
      $event.currentTarget.className = 'goBtn'
      setTimeout(() => {
        this.$router.push('/' + pageName)
      }, 500)
    },
    mouseDown ($event) {
      $event.currentTarget.className = 'goBtn goBtnActive'
    }
  }
}
</script>

<style lang="less" scoped>
#mainPage {
  width: 100%;
  height: 100%;
  background-color: #091d43;
  display: flex;
  align-items: center;
  .btnArea {
    width: 800px;
    height: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .goBtn {
      height: 300px;
      width: 300px;
      border-radius: 39px;
      background: linear-gradient(145deg, #0a1f48, #081a3c);
      box-shadow: 16px 16px 21px #051128, -16px -16px 21px #0d295e;
      display: inline-block;
      text-align: center;
      display: flex;
      align-items: center;
      cursor: pointer;
      .btnWord {
        margin: auto;
        width: 250px;
        word-wrap: break-word;
        background: linear-gradient(to right, #c4e2ee, #a8daff);
        -webkit-background-clip: text;
        color: transparent;
        font-weight: bold;
      }
    }
    .goBtnActive {
      height: 300px;
      width: 300px;
      border-radius: 39px;
      background: linear-gradient(145deg, #081a3c, #0a1f48);
      box-shadow: 16px 16px 21px #051128, -16px -16px 21px #0d295e;
      display: inline-block;
      text-align: center;
      display: flex;
      align-items: center;
    }
  }
}
</style>
