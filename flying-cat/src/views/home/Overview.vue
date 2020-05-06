<template>
  <div class="overview-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Overview</h1>
      <el-divider content-position="left"><h2>Welcome back, <b>Micheal Keaton</b></h2></el-divider>
    </el-row>

    <el-card>
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="24">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class="el-icon-alarm-clock"></i>
              <span>{{ todayDateTime }}</span>
            </div>

            <div class="card-body">
              <el-progress :show-text="false" :stroke-width="40" :percentage="70" status="warning"></el-progress>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="12">
          <el-card shadow="hover" class="inner-card">
            <span>TO-DO: Students</span>
          </el-card>
        </el-col>

        <el-col :span="12" style="margin-bottom: 20px;">
          <el-card shadow="hover" class="inner-card">
            <span>TO-DO: Courses</span>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12">
          <el-card shadow="hover" class="inner-card">
            <span>TO-DO: Servers</span>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card shadow="hover" class="inner-card">
            <span>TO-DO: Trailheads</span>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'overview',
  data () {
    return {
      todayDateTime: ''
    }
  },
  created () {
    var today = new Date()
    var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }
    this.todayDateTime = new Intl.DateTimeFormat('default', options).format(today)
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
