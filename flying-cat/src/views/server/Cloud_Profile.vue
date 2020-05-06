<template>
  <div class="course-analytics-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Cloud Profile</h1>
      <el-divider content-position="left"><h2>Profile ID: <b>{{ cloudProfile }}</b></h2></el-divider>
    </el-row>

    <el-card>
      TO-DO
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Cloud_Profile',
  data () {
    return {
      cloudProfile: ''
    }
  },
  created () {
    this.cloudProfile = this.$route.params.profileID
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
