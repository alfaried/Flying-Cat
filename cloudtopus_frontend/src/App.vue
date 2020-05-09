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
import image from '@/assets/New_Lands.jpg'

export default {
  name: 'App',
  components: {
    NavBar
  },
  created () {
    // Change background back to image
    document.body.style.background = 'url(' + image + ')'
    document.body.style.backgroundSize = 'cover'
  }
}
</script>

<style>
h1 {
  padding-bottom: 10px;
}
h2 {
  font-weight: normal;
  /* color: white; */
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
}
.el-card {
  border-radius: 10px;
}
.inner-card:hover {
  border-color: #ffd04b;
  border-width: 3px;
}
</style>
