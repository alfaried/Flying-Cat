<template>
  <div class="student-analytics-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Trialhead Profile</h1>
      <el-divider content-position="left"><h2>Profile ID: <b>{{ trailheadProfile }}</b></h2></el-divider>
    </el-row>

    <el-card>
      TO-DO
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Trailhead_Profile',
  data () {
    return {
      trailheadProfile: ''
    }
  },
  created () {
    console.log(this.$route.params)
    this.trailheadProfile = this.$route.params.profileID
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
