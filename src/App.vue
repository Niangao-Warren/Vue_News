<template>
  <div id="app">
    <keep-alive :exclude="/'home|top|travel/">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6"></script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
