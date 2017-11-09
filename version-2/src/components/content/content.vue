<template>
  <div>
    <div class="box">
      <div class="title" ref="titleLi">
        <ul>
          <li @click="witched('news'), found ()" :class="{'active':witching === 'news'}">全部</li>
          <li @click="witched('video'), found ()" :class="{'active':witching === 'video'}">视频</li>
          <li @click="witched('deep'), found ()" :class="{'active':witching === 'deep'}">深度</li>
          <li @click="witched('photos'), found ()" :class="{'active':witching === 'photos'}">图集</li>
          <li @click="witched('out'), found ()" :class="{'active':witching === 'out'}">场外</li>
        </ul>
      </div>
      <loading v-if="date.length === 0"></loading>
      <News :date="date" v-if="witching === 'news'&& date.length>0"></News>
      <myVideo :date="date" v-if="witching === 'video'&& date.length>0"></myVideo>
      <deep :date="date" v-if="witching === 'deep'&& date.length>0"></deep>
      <out :date="date" v-if="witching === 'out'&& date.length>0"></out>
    </div>
  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  import News from '../news/news'
  import myVideo from '../video/video'
  import deep from '../deep/deep'
  import out from '../out/out'
  import loading from '../loading/loading'
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    props: {
      date: {
        type: Array
      }
    },
    data () {
      return {}
    },
    created () {
      this.$nextTick(() => {
        this.myScroll = new IScroll(this.$refs.titleLi, {
          probeType: 3,
          scrollX: true,
          scrollY: false,
          click: true
        })
      })
    },
    updated () {
      this.myScroll.refresh()
    },
    computed: {
      ...mapGetters(['witching', 'showTypeing', 'nbaNewsData', 'chinaNewsFootData', 'internetFootNewsData', 'cbaNewsData', 'nbaVideoData', 'cbaVideoData', 'internetVideoData', 'internetPhotosData', 'nbaPhotosData', 'cbaPhotosData', 'nbaDeepData', 'nbaOutData'])
    },
    methods: {
      ...mapMutations(['witched', 'sendData', 'clearData']),
      found () {
        if (this.showTypeing === 'nba') {
          if (this.witching === 'news') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.nbaNewsData})
            }, 1500)
          }
          if (this.witching === 'video') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.nbaVideoData})
            }, 1500)
          }
          if (this.witching === 'deep') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.nbaDeepData})
            }, 1500)
          }
          if (this.witching === 'photos') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.nbaPhotosData})
            }, 1500)
          }
          if (this.witching === 'out') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.nbaOutData})
            }, 1500)
          }
        }
        if (this.showTypeing === 'cba') {
          if (this.witching === 'news') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.cbaNewsData})
            }, 1500)
          }
          if (this.witching === 'video') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.cbaVideoData})
            }, 1500)
          }
          if (this.witching === 'deep') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.nbaDeepData})
            }, 1500)
          }
          if (this.witching === 'photos') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.cbaPhotosData})
            }, 1500)
          }
          if (this.witching === 'out') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.nbaOutData})
            }, 1500)
          }
        }
        if (this.showTypeing === 'china') {
          if (this.witching === 'news') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.chinaNewsFootData})
            }, 1500)
          }
          if (this.witching === 'video') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.internetVideoData})
            }, 1500)
          }
          if (this.witching === 'deep') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.nbaDeepData})
            }, 1500)
          }
          if (this.witching === 'photos') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.internetPhotosData})
            }, 1500)
          }
          if (this.witching === 'out') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.nbaOutData})
            }, 1500)
          }
        }
        if (this.showTypeing === 'internet') {
          if (this.witching === 'news') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.internetFootNewsData})
            }, 1500)
          }
          if (this.witching === 'video') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.internetVideoData})
            }, 1500)
          }
          if (this.witching === 'deep') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.nbaDeepData})
            }, 1500)
          }
          if (this.witching === 'photos') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.internetPhotosData})
            }, 1500)
          }
          if (this.witching === 'out') {
            this.clearData()
            setTimeout(() => {
              this.sendData({data: this.nbaOutData})
            }, 1500)
          }
        }
      }
    },
    components: {
      News,
      myVideo,
      deep,
      loading,
      out
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .box {
    padding-top: 80px;
    padding-bottom: 50px;
    width: 100%;
    height: 100%;
    font-size: 0;
    overflow: hidden;
    background-color: #fff;
    .title {
      height: 25px;
      padding-bottom: 5px;
      border-bottom: 1px solid #eeeeee;
      overflow: hidden;
      ul {
        display: flex;
        position: relative;
        width: 105%;
        height: 25px;
        background-color: #fff;
        z-index: 666;
        li {
          flex: 1;
          height: 100%;
          margin: 0 8px 7px;
          border: 1px solid #eeeeee;
          border-radius: 15px 15px 15px 4px;
          text-align: center;
          line-height: 25px;
          font-size: 14px;
          color: #A9A8AE;
          background-color: #eeeeee;
          box-sizing: border-box;
        }
        .active {
          background-color: #C01D1E;
          color: #fff;
        }
      }
    }
  }
</style>
