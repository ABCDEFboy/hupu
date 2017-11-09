<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="back">
          <span>＜</span>
        </div>
        <div class="title">
          <span>虎扑体育</span>
        </div>
        <div class="search">
          <span><img src="../../common/img/search.png"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .container {
    position: fixed;
    width: 100%;
    height: 10%;
    font-size: 0;
    background-color: #fff;
    z-index: 999;
    .header {
      position: relative;
      width: 100%;
      height: 50px;
      background-color: #C01D1E;
      .back {
        position: absolute;
        top: 0;
        left: 0;
        width: 10%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        span {
          font-size: 14px;
        }
      }
      .title {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        padding-left: 10%;
        width: 80%;
        height: 50px;
        color: #fff;
        text-align: center;
        line-height: 50px;
        span {
          font-size: 18px;
          font-weight: bold;
        }
      }
      .search {
        position: absolute;
        top: 0;
        right: 0;
        display: inline-block;
        width: 10%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        span {
          font-size: 12px;
          font-weight: bold;
          img {
            margin-top: 20px;
            width: 15px;
            height: 15px;
          }
        }
      }
    }
  }
</style>
