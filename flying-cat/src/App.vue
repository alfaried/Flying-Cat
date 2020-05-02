<template>
  <div class="app-main">
    <el-header class="header">
      <NavBar/>
    </el-header>
    <el-main class="body">
      <router-view style="padding-left: 20px; padding-right: 20px;"/>
    </el-main>
  </div>
</template>

<script>
import NavBar from '@/components/Layout/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
h1 {
  padding-bottom: 10px;
}
h2 {
  font-weight: normal;
}
.card-header {
  font-weight: bolder;
  font-size: 20px;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 20px;
}
.app-main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
