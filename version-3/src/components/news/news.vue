<template>
  <div>
    <div class="scroller-pullDown" style="display: none" ref="down">
      <div id="pullDown-msg" class="pull-down-msg">松手刷新哦</div>
    </div>
    <div class="content" ref="contentLi">
      <ul>
        <router-link :to="{path:'/newsDeatil'}">
          <li v-for="(item, index) in date" v-if="index<num">
            <div class="image">
              <img :src="item.img">
            </div>
            <div class="text-box">
              <span class="text">{{item.title}}</span>
              <span class="count">
                <img src="../../common/img/Message.png"/>
                <i>{{item.replies}}</i>
              </span>
            </div>
          </li>
        </router-link>
      </ul>
    </div>
    <div class="scroller-pullUp" style="display: none" ref="up">
      <span id="pullUp-msg" class="pull-up-msg">正在玩命加载中...</span>
    </div>
  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  export default {
    props: {
      date: {
        type: Array
      }
    },
    data () {
      return {
        show: true,
        showTop: false,
        num: 8,
        n: 1
      }
    },
    created () {
      this.$nextTick(() => {
        this.myScroll2 = new IScroll(this.$refs.contentLi, {
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
          this.num += 3
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
  .content {
    position: relative;
    width: 100%;
    top: 0;
    height: 500px;
    ul {
      width: 100%;
      li {
        display: flex;
        height: 50px;
        padding: 10px 0 10px 0;
        border-bottom: 1px solid #ccc;
        &:last-child {
          border: none;
        }
        .image {
          flex: 0 0 100px;
          height: 50px;
          img {
            display: inline-block;
            width: 80px;
            height: 50px;
          }
        }
        .text-box {
          position: relative;
          flex: 1;
          margin-right: 10px;
          height: 50px;
          max-width: 80%;
          .text {
            display: inline-block;
            height: 30px;
            width: 100%;
            word-break: break-all;
            overflow: hidden;
            text-overflow: ellipsis;
            letter-spacing: 2px;
            line-height: 16px;
            font-size: 14px;
            color: #000;
            text-align: left;
          }
          .count {
            position: absolute;
            right: 5px;
            bottom: 2px;
            display: inline-block;
            height: 12px;
            img {
              display: inline-block;
              width: 12px;
              height: 12px;
              vertical-align: top;
            }
            i {
              display: inline-block;
              font-size: 12px;
              padding-left: 4px;
              vertical-align: top;
              color: #A9A8AE;
            }
          }
        }
      }
    }
  }
  .scroller-pullUp {
    position: relative;
    bottom: 30px;
    width: 100%;
    height: 14px;
    padding: 10px 0;
    text-align: center;
    font-size: 14px;
  }
</style>
