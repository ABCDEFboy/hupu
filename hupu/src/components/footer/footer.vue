<template>
  <div>
    <div class="footer">
      <div class="list">
        <span :class="{'active':showing === 'gameNews'}" @click="news('gameNews')">
          <span class="icon icon-news"></span>
          <span class="message">新闻</span>
        </span>
        <span  @click="news('game')" :class="{'active':showing === 'game'}">
          <span class="icon icon-play"></span>
           <span class="message">比赛</span>
        </span>
        <span  @click="news('society')" :class="{'active':showing === 'society'}">
           <span class="icon icon-twitter"></span>
           <span class="message">社区</span>
        </span>
        <span  @click="news('more')" :class="{'active':showing === 'more'}">
          <span class="icon icon-user"></span>
           <span class="message">更多</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters(['showing'])
    },
    methods: {
      ...mapMutations(['news'])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 7%;
    border-top: 1px solid #ccc;
    background-color: #1d1e1f;
    z-index: 999;
    .list {
      display: table;
      width: 90%;
      height: 100%;
      margin: auto;
      span {
        display: table-cell;
        width: 50px;
        height: 50px;
        margin: 5px 0;
        font-size: 14px;
        .icon {
          display: inline-block;
          width: 84px;
          height: 22px;
          font-size: 18px;
          text-align: center;
          margin: 5px auto 0;
        }
        .message {
          display: inline-block;
          margin: 0;
          width: 84px;
          height: 50px;
          text-align: center;
        }
      }
      .active {
        color: #C01D1E;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
</style>
