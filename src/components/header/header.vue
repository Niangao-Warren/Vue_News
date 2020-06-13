<template>
  <div class="n-header">
    <!-- 返回键绑定返回事件 -->
    <div class="header-back" @click="back()" v-if="showBack">
      <i class="back"></i>
    </div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: function() {
        return this.$route.name || 'Pluto'
      }
    },
    showBack: {
      type: Boolean,
      default: function() {
        // 默认显示返回箭头，不需要显示可在路由中meta将showBack设置为false
        const showBack = this.$route.meta.showBack
        return showBack !== 'undefined' && showBack === false ? showBack : true
      }
    }
  },
  methods: {
    // 返回事件
    back() {
      if (this.showBack) {
        this.$router.back()
      }
    }
  }
}
</script>

<style scoped lang="less">
.n-header {
  height: 44px;
  text-align: center;
  font-size: 0;
  color: #fff;
  background-color: #7790e6;
  position: relative;
  .header-back {
    width: 44px;
    height: 44px;
    position: absolute;
    top: 0;
    left: 0;
    i {
      display: block;
      width: 44px;
      height: 44px;
      background: url(../../assets/icon/back.png) center no-repeat;
      background-size: 22px 22px;
    }
  }
  h1 {
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    font-size: 18px;
  }
}
</style>
