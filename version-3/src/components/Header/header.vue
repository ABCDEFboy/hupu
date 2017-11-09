<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="title">
          <span>虎扑体育</span>
        </div>
        <div class="search">
          <span><img src="../../common/img/search.png"></span>
        </div>
      </div>
      <div class="content">
        <table>
          <tr>
            <td :class="{'active':a === true}" @click="clickA">NBA</td>
            <td :class="{'active':b === true}" @click="clickB">中国篮球</td>
            <td :class="{'active':c === true}" @click="clickC">国际足球</td>
            <td :class="{'active':d === true}" @click="clickD">中国足球</td>
          </tr>
        </table>
      </div>
    </div>
    <Context :date="date" v-if="showing==='gameNews'"></Context>
    <Game :game="date" v-if="showing==='game'&& date.length>0"></Game>
    <loading v-if="date.length === 0&&showing==='game'"></loading>
    <Foot></Foot>
  </div>
</template>

<script>
  import Foot from '../footer/footer'
  import Game from '../game/game'
  import Context from '../content/content'
  import loading from '../loading/loading'
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    data () {
      return {
        a: true,
        b: false,
        c: false,
        d: false
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$axios.get('/api/nbaNews')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              this.setData({str: 'nbaNews', data: res.data})
              this.setFirstData({data: this.nbaNewsData})
            }
          })
          .catch((error) => {
            console.log(error)
          })
        this.$axios.get('/api/chinaFootNews')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              this.setData({str: 'chinaNewsFoot', data: res.data})
            }
          })
          .catch((error) => {
            console.log(error)
          })
        this.$axios.get('/api/internetFootNews')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              this.setData({str: 'internetFootNews', data: res.data})
            }
          })
          .catch((error) => {
            console.log(error)
          })
        this.$axios.get('/api/cbaNews')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              this.setData({str: 'cbaNews', data: res.data})
            }
          })
          .catch((error) => {
            console.log(error)
          })
        this.$axios.get('/api/nbaGames')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              this.setData({str: 'nbaGames', data: res.data})
            }
          })
          .catch((error) => {
            console.log(error)
          })
        this.$axios.get('/api/cbaGames')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              this.setData({str: 'cbaGames', data: res.data})
            }
          })
          .catch((error) => {
            console.log(error)
          })
        this.$axios.get('/api/chinaGames')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              this.setData({str: 'chinaGames', data: res.data})
            }
          })
          .catch((error) => {
            console.log(error)
          })
        this.$axios.get('/api/nbaVideo')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              this.setData({str: 'nbaVideo', data: res.data})
            }
          })
          .catch((error) => {
            console.log(error)
          })
        this.$axios.get('/api/cbaVideo')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              this.setData({str: 'cbaVideo', data: res.data})
            }
          })
          .catch((error) => {
            console.log(error)
          })
        this.$axios.get('/api/internetVideo')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              this.setData({str: 'internetVideo', data: res.data})
            }
          })
          .catch((error) => {
            console.log(error)
          })
        this.$axios.get('/api/internetPhotos')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              this.setData({str: 'internetPhotos', data: res.data})
            }
          })
          .catch((error) => {
            console.log(error)
          })
        this.$axios.get('/api/nbaPhotos')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              this.setData({str: 'nbaPhotos', data: res.data})
            }
          })
          .catch((error) => {
            console.log(error)
          })
        this.$axios.get('/api/cbaPhotos')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              this.setData({str: 'cbaPhotos', data: res.data})
            }
          })
          .catch((error) => {
            console.log(error)
          })
        this.$axios.get('/api/nbaDeep')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              this.setData({str: 'nbaDeep', data: res.data})
            }
          })
          .catch((error) => {
            console.log(error)
          })
        this.$axios.get('/api/nbaOut')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              this.setData({str: 'nbaOut', data: res.data})
            }
          })
          .catch((error) => {
            console.log(error)
          })
      })
    },
    computed: {
      ...mapGetters(['showing', 'witching', 'date', 'nbaDeepData', 'nbaOutData', 'nbaVideoData', 'cbaVideoData', 'internetVideoData', 'nbaNewsData', 'chinaNewsFootData', 'internetFootNewsData', 'cbaNewsData', 'nbaGamesData', 'cbaGamesData', 'chinaGamesData'])
    },
    methods: {
      ...mapMutations(['setShow', 'setData', 'sendData', 'clearData', 'setFirstData']),
      clickA () {
        this.a = true
        this.b = false
        this.c = false
        this.d = false
        this.setShow('nba')
        this.clearData()
        setTimeout(() => {
          if (this.showing === 'gameNews') {
            if (this.witching === 'news') {
              this.sendData({data: this.nbaNewsData})
            }
            if (this.witching === 'video') {
              this.sendData({data: this.nbaVideoData})
            }
            if (this.witching === 'deep') {
              this.sendData({data: this.nbaDeepData})
            }
            if (this.witching === 'out') {
              this.sendData({data: this.nbaOutData})
            }
            if (this.witching === 'photos') {
              this.sendData({data: this.nbaNewsData})
            }
          }
          if (this.showing === 'game') {
            this.sendData({data: this.nbaGamesData})
          }
        }, 1500)
      },
      clickB () {
        this.a = false
        this.b = true
        this.c = false
        this.d = false
        this.setShow('cba')
        this.clearData()
        setTimeout(() => {
          if (this.showing === 'gameNews') {
            if (this.witching === 'news') {
              this.sendData({data: this.cbaNewsData})
            }
            if (this.witching === 'video') {
              this.sendData({data: this.cbaVideoData})
            }
            if (this.witching === 'deep') {
              this.sendData({data: this.nbaDeepData})
            }
            if (this.witching === 'out') {
              this.sendData({data: this.nbaOutData})
            }
          }
          if (this.showing === 'game') {
            this.sendData({data: this.cbaGamesData})
          }
        }, 1500)
      },
      clickC () {
        this.a = false
        this.b = false
        this.c = true
        this.d = false
        this.setShow('china')
        this.clearData()
        setTimeout(() => {
          if (this.showing === 'gameNews') {
            if (this.witching === 'news') {
              this.sendData({data: this.internetFootNewsData})
            }
            if (this.witching === 'video') {
              this.sendData({data: this.internetVideoData})
            }
            if (this.witching === 'deep') {
              this.sendData({data: this.nbaDeepData})
            }
            if (this.witching === 'out') {
              this.sendData({data: this.nbaOutData})
            }
          }
          if (this.showing === 'game') {
            this.sendData({data: this.chinaGamesData})
          }
        }, 1500)
      },
      clickD () {
        this.a = false
        this.b = false
        this.c = false
        this.d = true
        this.setShow('internet')
        this.clearData()
        setTimeout(() => {
          if (this.showing === 'gameNews') {
            if (this.witching === 'news') {
              this.sendData({data: this.chinaNewsFootData})
            }
            if (this.witching === 'video') {
              this.sendData({data: this.internetVideoData})
            }
            if (this.witching === 'deep') {
              this.sendData({data: this.nbaDeepData})
            }
            if (this.witching === 'out') {
              this.sendData({data: this.nbaOutData})
            }
          }
          if (this.showing === 'game') {
            this.sendData({data: this.chinaGamesData})
          }
        }, 1500)
      }
    },
    components: {
      Context,
      Foot,
      Game,
      loading
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
    .content {
      width: 100%;
      height: 30px;
      background-color: #fff;
      table {
        width: 100%;
        height: 100%;
        tr {
          width: 100%;
          height: 100%;
          td {
            width: 25%;
            height: 100%;
            text-align: center;
            vertical-align: middle;
            font-size: 14px;
            color: #A9A8AE;
          }
          .active {
            color: #C01D1E;
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
