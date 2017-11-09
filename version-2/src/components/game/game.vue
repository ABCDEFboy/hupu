<template>
  <div>
    <div class="box">
      <div class="content" ref="gameName">
        <ul>
          <li v-for="item in game">
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
      return {}
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
</style>
