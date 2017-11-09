<template>
  <div>
    <div class="box">
      <div class="scroller-pullDown" style="display: none" ref="down">
        <div id="pullDown-msg" class="pull-down-msg">松手刷新哦</div>
      </div>
      <div class="content" ref="gameName">
        <ul>
          <li v-for="(item, index) in game" v-if="index<num">
            <div class="days">
              <span>{{item.date_block}}</span>
            </div>
            <div class="compition" v-for="list in item.data">
              <div class="compition-content">
                <div class="games">
                  <div class="team">
                    <img v-if="item.video_url ==='nba'"
                         :src="require('../../common/team/logo'+list.home_tid+'@2x.png')">
                    <img v-if="list.home_logo!=='undefined'" :src="list.home_logo">
                    <span class="teamName">{{list.home_name}}</span>
                  </div>
                  <div class="team">
                    <img v-if="item.video_url ==='nba'"
                         :src="require('../../common/team/logo'+list.away_tid+'@2x.png')">
                    <img v-if="list.away_logo!=='undefined'" :src="list.away_logo">
                    <span class="teamName">{{list.away_name}}</span>
                  </div>
                </div>
                <div class="gard">
                  <span class="count">{{list.home_score}}</span>
                  <span class="count">{{list.away_score}}</span>
                </div>
                <div class="finish">
                  <span v-if="item.video_url==='nba'">{{list.process}}</span>
                  <span v-if="item.video_url!=='nba'">{{list.status.desc}}</span>
                </div>
                <div class="video" @click="">
                  <span>腾讯视频</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="scroller-pullUp" style="display: none" ref="up">
        <span id="pullUp-msg" class="pull-up-msg"><img src="../../common/img/5.gif" alt="loding..."></span>
      </div>
    </div>
  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  export default {
    props: {
      game: {
        type: Array
      }
    },
    data () {
      return {
        show: true,
        showTop: false,
        num: 4,
        n: 1
      }
    },
    created () {
      this.$nextTick(() => {
        this.myScroll2 = new IScroll(this.$refs.gameName, {
          probeType: 3,
          scrollX: false,
          scrollY: true,
          click: true
        })
      })
    },
    updated () {
      this.myScroll2.refresh()
    },
    mounted () {
      let that = this
      this.$nextTick(() => {
        this.myScroll2.on('scroll', () => {
          let height = that.myScroll2.y
          let bottomHeight = that.myScroll2.maxScrollY - height
          if (-height > 10) {
            this.show = false
          } else {
            this.show = true
          }
          if (-height > 400) {
            this.showTop = true
          } else {
            this.showTop = false
          }
//          if (-height > (70 * this.n)) {
//            this.num += 3
//            this.n++
//          }
          if (height >= 40) {
            that.$refs.down.style.display = 'block'
          } else if (height < 40 && height >= 0) {
            that.$refs.down.style.display = 'none'
          }
          if (bottomHeight >= 50) {
            that.$refs.up.style.display = 'block'
          } else if (bottomHeight < 50 && bottomHeight >= 0) {
            that.$refs.up.style.display = 'none'
          }
        })
        this.myScroll2.on('scrollEnd', () => {
          this.num += 1
          this.n++
        })
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .scroller-pullDown {
    position: relative;
    top: 5px;
    width: 100%;
    height: 14px;
    padding: 10px 0;
    text-align: center;
    font-size: 14px;
  }

  .box {
    padding-top: 80px;
    padding-bottom: 50px;
    width: 100%;
    height: 100%;
    font-size: 0;
    overflow: hidden;
    background-color: #fff;
    .content {
      position: relative;
      width: 100%;
      font-size: 0;
      top: 0;
      bottom: 50px;
      height: 500px;
      ul {
        width: 100%;
        li {
          border-top: 5px solid #eee;
          .days {
            width: 100%;
            height: 20px;
            border-bottom: 1px solid #FAFAFA;
            text-align: left;
            background-color: #fff;
            span {
              width: 100%;
              height: 20px;
              padding-left: 3%;
              line-height: 20px;
              font-size: 12px;
            }
          }
          .compition {
            width: 100%;
            height: 72px;
            border-bottom: 1px solid #eee;
            &:last-child {
              border-bottom: none;
            }
            .compition-content {
              display: flex;
              margin: auto;
              width: 95%;
              height: 72px;
              .games {
                flex: 0 0 25%;
                width: 25%;
                height: 60px;
                margin-right: 20px;
                padding: 5px 5px;
                .team {
                  position: relative;
                  width: 25%;
                  height: 30px;
                  line-height: 30px;
                  img {
                    display: inline-block;
                    position: absolute;
                    left: 0;
                    top: 3px;
                    width: 27px;
                    height: 22px;
                    border: 1px solid #fff;
                    border-radius: 60%;
                  }
                  .teamName {
                    position: absolute;
                    display: inline-block;
                    top: 0;
                    left: 30px;
                    height: 20px;
                    width: 400%;
                    line-height: 30px;
                    text-align: left;
                    font-size: 14px;
                  }
                }
              }
              .gard {
                flex: 0 0 10%;
                width: 10%;
                height: 60px;
                margin-right: 30px;
                padding: 5px;
                .count {
                  display: inline-block;
                  width: 100%;
                  height: 30px;
                  line-height: 30px;
                  font-size: 14px;
                }
              }
              .finish {
                flex: 0 0 20%;
                width: 20%;
                height: 60px;
                padding: 5px;
                span {
                  width: 100%;
                  height: 60px;
                  line-height: 60px;
                  font-size: 12px;
                  color: #9da3a6;
                }
              }
              .video {
                flex: 0 0 20%;
                width: 20%;
                height: 60px;
                margin-left: 10px;
                padding: 5px;
                span {
                  width: 100%;
                  height: 60px;
                  line-height: 60px;
                  font-size: 12px;
                  color: #9da3a6;
                }
              }
            }
          }
        }
      }
    }
  }

  .scroller-pullUp {
    width: 100%;
    text-align: center;
    img {
      display: inline-block;
      position: relative;
      top: -200px;
      width: 100%;
      height: 300px;
    }
  }
</style>
