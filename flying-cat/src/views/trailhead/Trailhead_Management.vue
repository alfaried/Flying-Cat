<template>
  <div class="student-analytics-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Trialhead Management</h1>
      <el-divider content-position="left"><h2>{{ "View & Manage Student's Trialhead Progress" }}</h2></el-divider>
    </el-row>

    <el-card>
      TO-DO
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Trailhead_Management',
  data () {
    return {
      profile: ''
    }
  },
  created () {
    console.log(this.$route.params)
    this.profile = this.$route.params
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
