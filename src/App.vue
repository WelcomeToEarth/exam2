<template>
  <div id="app">
    <router-link to="/">音乐管理</router-link> |
    <router-link to="/sprider">爬虫程序</router-link> |
    <router-link to="/savedb">存入程序</router-link>|
    <router-link to="/mocha">mocha测试</router-link> |
    <router-link to="/api">接口测试</router-link>
    <br>
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
