<template>
  <div class="course-analytics-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Service Detail</h1>
      <el-divider content-position="left"><h2>Service ID: <b>{{ serviceID }}</b></h2></el-divider>
    </el-row>

    <el-card>
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="6">
          <el-button type="warning" @click="route" plain>
            <i class="el-icon-back"/>
            <span>Back to Cloud Profile</span>
          </el-button>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class=""></i>
              <span>TO-DO</span>
            </div>

            <div class="card-body">
              TO-DO
            </div>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class=""></i>
              <span>TO-DO</span>
            </div>

            <div class="card-body">
              TO-DO
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Service_Detial',
  data () {
    return {
      serviceID: '',
      profileID: ''
    }
  },
  created () {
    this.serviceID = this.$route.params.serviceID
    this.profileID = this.$route.params.profileID
  },
  methods: {
    route () {
      this.$activeNavBarIndex = '/server/management'
      this.$router.push({
        name: 'Cloud_Profile',
        params: { profileID: this.profileID }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
