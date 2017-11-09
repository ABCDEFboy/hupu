<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        transitionName: 'slide-left'
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.path === '/header') {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
      }
    }
  }
</script>

<style lang="less" scoped="">
  #app {
    position: relative;
    margin: 0;
    color: #111;
    font-size: 12px;
    font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;

    .child-view {
      width: 100%;
      height: 100%;
      transition: all .3s cubic-bezier(.55, 0, .1, 1);
    }

    .slide-left-enter {
      opacity: 0;
      -webkit-transform: translate(100%, 0);
      transform: translate(100%, 0);
    }

    .slide-left-leave-active {
      opacity: 0;
      -webkit-transform: translate(-100%, 0);
      transform: translate(-100%, 0);
    }

    .slide-right-enter {
      opacity: 0;
      -webkit-transform: translate(-100%, 0);
      transform: translate(-100%, 0);
    }

    .slide-right-leave-active {
      opacity: 0;
      -webkit-transform: translate(100%, 0);
      transform: translate(100%, 0);
    }
  }
</style>
