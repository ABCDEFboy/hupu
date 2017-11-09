<template>
  <div>
    <div class="container">
      <router-link :to="{path:'/header'}">
        <div class="header">
          <div class="back">
            <span>﹤</span>
          </div>
          <div class="title">
            <span>虎扑体育</span>
          </div>
          <div class="more"><span>…</span></div>
        </div>
      </router-link>
      <div class="content-box" ref="content">
        <div class="content">
          <div class="title">
            <span class="text">库兹马：不和新秀比，目标是字母哥和詹姆斯!!!!!</span>
            <span class="time">4分钟前</span>
            <span class="author">Lakers Nation</span>
          </div>
          <div class="containe">
            <div class="image">
              <img
                src="https://c1.hoopchina.com.cn/uploads/star/event/images/171108/thumbnail-87a518a48574b0a7cd3879c2d2a016414f8e3361.png">
            </div>
            <div class="deatil">
              <p>虎扑11月8日讯&nbsp;湖人前锋凯尔-库兹马最近接受了湖人记者Serena Winters的采访，在此期间，他谈到了诸多话题。<br>
                谈及朗佐-鲍尔应对媒体的态度，他说道：&ldquo;他的回答都很简短，我相当确定你们不喜欢他的回答，他那些话没问题，但有些无聊，我的要比他更加有活力。&rdquo;<br>
                谈及是否会把自己和其他新秀作比较，他说道：&ldquo;不，我不那样看，我不会把自己和其他新秀作比较，因为我的关注点第一是赢球，第二是联盟中的所有顶尖球员，因为我想要成为那样的球员，所以，我不觉得我的对手是某个新秀，我的目标是扬尼斯-阿德托昆博和勒布朗-詹姆斯，因为最终，那才是我想要成为的球员。&rdquo;<br>
                谈及和鲍尔之间的关系，库兹马说道：&ldquo;我们的关系始于场下，我感觉，如果你们在场下关系紧密，你们就可以在场上变得更加紧密，我们彼此的目标很相似，对我和他来说，我们都想要变得伟大，场上，我和他就像是阴阳，我们都有这样的心态。&rdquo;<br>库兹马表示，如果在大一赛季结束后有NBA球队对他感兴趣，他会提前离开大学。<br>
                此外，库兹马也表示，在防守端，他已经走在了前面，因为他在犹他大学时期学到的防守原则和术语和NBA非常相似。<br>
                本赛季至今，库兹马场均出战29.1分钟，能够得到15.4分6.3篮板1.4助攻。</p>
            </div>
            <div class="tag">
              标签: &nbsp;<span v-for="item in date">{{item.name}}</span>
            </div>
          </div>
          <div class="count">
            <span class="newCount">最新评论</span>
            <ul>
              <li v-for="item in count.data">
                <div class="li-box">
                  <div class="top">
                  <span class="authorImage">
                    <img :src="item.header">
                  </span>
                    <span class="name">
                    <span class="authorName">{{item.user_name}}</span>
                    <span class="countTime">{{item.format_time}}</span>
                  </span>
                    <span class="light">亮了({{item.lighted}})</span>
                  </div>
                  <div class="bottom">
                    <span class="countText">{{item.content}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  export default {
    data () {
      return {
        date: [],
        count: []
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$axios.get('/api/data')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              this.date = res.data.news.tags
              console.log(this.date)
            }
          })
          .catch((error) => {
            console.log(error)
          })
        this.$axios.get('/api/count')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              this.count = res.data
              console.log(this.count)
            }
          })
          .catch((error) => {
            console.log(error)
          })
      })
    },
    created () {
      this.$nextTick(() => {
        this.myScroll2 = new IScroll(this.$refs.content, {
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
      z-index: 999;
      .back {
        position: absolute;
        top: 0;
        left: 10px;
        width: 10%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        span {
          font-size: 20px;
          font-weight: bold;
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
      .more {
        position: absolute;
        top: 0;
        right: 0;
        width: 10%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        span {
          font-size: 20px;
          font-weight: bold;
          line-height: 20px
        }
      }
    }
    .content-box {
      width: 100%;
      font-size: 0;
      height: 500px;
      .content {
        width: 100%;
        padding: 10px;
        .title {
          position: relative;
          width: 95%;
          height: 80px;
          padding-bottom: 5px;
          margin-bottom: 8px;
          border-bottom: 1px solid #ccc;
          .text {
            display: inline-block;
            width: 100%;
            word-break: break-all;
            letter-spacing: 2px;
            line-height: 30px;
            font-size: 16px;
            color: #000;
            text-align: left;
          }
          .time {
            position: absolute;
            top: 66px;
            left: 0;
            display: inline-block;
            height: 12px;
            line-height: 12px;
            font-size: 12px;
            color: #ccc;
            text-align: left;
          }
          .author {
            position: absolute;
            top: 66px;
            left: 50px;
            display: inline-block;
            height: 12px;
            line-height: 12px;
            font-size: 12px;
            color: blue;
          }
        }
        .containe {
          width: 100%;
          .image {
            width: 95%;
            img {
              display: inline-block;
              width: 95%;
            }
          }
          .deatil {
            display: inline-block;
            width: 95%;
            padding-right: 10px;
            word-break: break-all;
            letter-spacing: 2px;
            line-height: 30px;
            font-size: 14px;
            color: #000;
            text-align: left;
          }
          .tag {
            display: inline-block;
            width: 95%;
            height: 80px;
            padding: 15px 0 10px 0;
            line-height: 20px;
            font-size: 14px;
            text-align: left;
            word-break: break-all;
            span {
              display: inline-block;
              margin: 5px;
              padding: 3px 5px;
              height: 20px;
              line-height: 20px;
              font-size: 16px;
              text-align: center;
              border: 1px solid #2b82ac;
              border-radius: 10px;
              color: #2b82ac;
            }
          }
        }
        .count {
          width: 95%;
          .newCount {
            display: inline-block;
            width: 95%;
            font-size: 14px;
            color: #C01D1E;
            text-align: left;
            line-height: 28px;
            padding-left: 5px;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            border-left: 5px solid #C01D1E;
          }
          ul {
            width: 100%;
            li {
              width: 100%;
              .li-box {
                width: 95%;
                padding: 10px 5px;
                border-bottom: 1px solid #ccc;
                &:last-child {
                  border-bottom: none;
                }
                .top {
                  display: flex;
                  width: 95%;
                  height: 30px;
                  .authorImage {
                    flex: 0 0 15px;
                    width: 30px;
                    height: 30px;
                    margin-right: 5px;
                    img {
                      display: inline-block;
                      width: 30px;
                      height: 30px;
                      border: 1px solid #fff;
                      border-radius: 50%;
                    }
                  }
                  .name {
                    flex: 1;
                    height: 30px;
                    .authorName {
                      display: block;
                      height: 16px;
                      font-size: 15px;
                      text-align: left;
                      line-height: 16px;
                      margin-bottom: 2px;
                    }
                    .countTime {
                      display: block;
                      height: 12px;
                      line-height: 12px;
                      font-size: 12px;
                      text-align: left;
                      color: #9da3a6;
                    }
                  }
                  .light {
                    flex: 0 0 50px;
                    width: 50px;
                    height: 15px;
                    line-height: 15px;
                    font-size: 13px;
                    color: #9da3a6;
                  }
                }
                .bottom {
                  width: 95%;
                  margin: 10px 0 0 20px;
                  .countText {
                    display: inline-block;
                    width: 90%;
                    word-break: break-all;
                    letter-spacing: 2px;
                    line-height: 15px;
                    font-size: 14px;
                    color: #000;
                    text-align: left;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
