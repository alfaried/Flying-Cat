<template>
  <div class="course-analytics-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Cloud Profile</h1>
      <el-divider content-position="left"><h2>Profile ID: <b>{{ cloudProfile }}</b></h2></el-divider>
    </el-row>

    <el-card>
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="6">
          <el-button type="warning" @click="route" plain>
            <i class="el-icon-back"/>
            <span>Back to Application Management</span>
          </el-button>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="8">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class="el-icon-wallet"></i>
              <span>Profile Information</span>
            </div>

            <div class="card-body">
              TO-DO
            </div>
          </el-card>
        </el-col>

        <el-col :span="16">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class="el-icon-receiving"></i>
              <span>Services List</span>
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
  name: 'Cloud_Profile',
  data () {
    return {
      cloudProfile: ''
    }
  },
  created () {
    this.cloudProfile = this.$route.params.profileID
  },
  methods: {
    route () {
      this.$router.push({
        name: 'Application_Management'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
