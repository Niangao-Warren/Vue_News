<template>
  <div class="tab">
    <!-- 跳转top路由 -->
    <router-link tag="div" class="tab-item" to="/top">Top</router-link>
    <!-- 跳转technology路由 -->
    <router-link tag="div" class="tab-item" to="/technology">Technology</router-link>
    <!-- 跳转finance路由 -->
    <router-link tag="div" class="tab-item" to="/finance">Finance</router-link>
  </div>
</template>

<script type="text/ecmascript-6"></script>

<style scoped lang="less">
.tab {
  display: flex;
  height: 30px;
  width: 100%;
  background-color: #fff;
  .tab-item {
    flex: 1;
    font-size: 14px;
    color: #7790e6;
    line-height: 30px;
    text-align: center;
  }
}
</style>
