<template>
  <div class="app-main">
    <NavBar style="box-shadow: 0 5px 5px rgba(0, 0, 0, .12), 0 0 60px rgba(0, 0, 0, .04)"/>
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
/* .el-row {
  margin-bottom: 20px;
} */
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
.el-card {
  border-radius: 10px;
}
.inner-card:hover {
  border-color: #409EFF;
}
</style>
