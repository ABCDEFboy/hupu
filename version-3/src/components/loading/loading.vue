<template>
  <div class="loading"><img src="../../common/img/5.gif" height="300" width="400"/></div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="less" scoped>
  .loading {
    padding-top: 50%;
    width: 100%;
    height: 100%;
    img {
      display: inline-block;
      position: relative;
      top: 50%;
      left: 50%;
      margin-top: -100px;
      margin-left: -200px;
    }
  }
</style>
