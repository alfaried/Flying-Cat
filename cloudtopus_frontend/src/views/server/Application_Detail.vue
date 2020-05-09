<template>
  <div class="course-analytics-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Application Detail</h1>
      <el-divider content-position="left"><h2>Application IP: <b>{{ applicationIP }}</b></h2></el-divider>
    </el-row>

    <el-card>
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="12">
          <el-button style="float: left;" type="warning" @click="route" plain>
            <i class="el-icon-back"/>
            <span>Back to Application Management</span>
          </el-button>
        </el-col>
        <el-col :span="12">
          <el-button style="float: right;" type="primary" @click="route('website', applicationIP)" plain>
            <span>Go to Deployed Application Website</span>
            <i class="el-icon-right"/>
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
  name: 'Application_Details',
  data () {
    return {
      applicationIP: ''
    }
  },
  created () {
    this.applicationIP = this.$route.params.applicationIP
  },
  methods: {
    route (location, params) {
      if (location === 'website') {
        // var url = 'https://trailblazer.me/id/' + params
        // window.open(url)
        this.$notify({
          title: 'Warning',
          message: 'This is a prototype, IP address ' + params + ' does not exists.',
          type: 'warning'
        })
      } else {
        this.$activeNavBarIndex = '/server/management'
        this.$router.push({
          name: 'Application_Management'
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
