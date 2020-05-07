<template>
  <div class="course-analytics-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Server Management</h1>
      <el-divider content-position="left"><h2>Application IP: <b>{{ applicationIP }}</b></h2></el-divider>
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
  name: 'Server_Management',
  data () {
    return {
      applicationIP: ''
    }
  },
  created () {
    this.applicationIP = this.$route.params.applicationIP
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
