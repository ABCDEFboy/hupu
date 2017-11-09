<template>
  <div>
    <div class="content" ref="contentLi">
      <ul>
        <li v-for="item in date">
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
      </ul>
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
      return {}
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
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
</style>
