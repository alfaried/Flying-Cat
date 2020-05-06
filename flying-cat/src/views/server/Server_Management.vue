<template>
  <div class="course-analytics-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Server Management</h1>
      <el-divider content-position="left"><h2>Application IP: <b>{{ applicationIP }}</b></h2></el-divider>
    </el-row>

    <el-card>
      TO-DO
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Server_Management',
  data () {
    return {
      applicationIP: ''
    }
  },
  created () {
    this.applicationIP = this.$route.params.applicationIP
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
