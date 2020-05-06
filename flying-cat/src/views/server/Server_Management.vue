<template>
  <div class="student-analytics-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Server Management</h1>
      <el-divider content-position="left"><h2>{{ "View & Manage Student's Deployed Servers" }}</h2></el-divider>
    </el-row>

    <el-card>
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="8">
          <el-card shadow="hover" class="inner-card">
            Info 1
          </el-card>
        </el-col>

        <el-col :span="8">
          <el-card shadow="hover" class="inner-card">
            Info 2
          </el-card>
        </el-col>

        <el-col :span="8">
          <el-card shadow="hover" class="inner-card">
            Info 3
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="24">
          <el-card shadow="hover" class="inner-card">
            <el-tabs type="card">
              <el-tab-pane v-for="course in courseList" :key="course.label" :label="course.label">
                <el-table
                  :data="course.data"
                  fit
                  stripe
                  border
                  height="500px">
                  <el-table-column
                    type="index"
                    label="No."
                    header-align="center"
                    align="center"
                    width="50">
                  </el-table-column>
                  <el-table-column
                    property="section"
                    label="Section"
                    header-align="center"
                    align="center"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    property="team"
                    label="Team"
                    header-align="center"
                    align="center"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    property="serverName"
                    label="Server Name"
                    header-align="center"
                    align="center"
                    width="250">
                  </el-table-column>
                  <el-table-column
                    property="serverProfile"
                    label="Server Profile"
                    header-align="center"
                    align="center"
                    width="250">
                  </el-table-column>
                  <el-table-column
                    property="serverIP"
                    label="Server IP"
                    header-align="center"
                    align="center"
                    width="250">
                  </el-table-column>
                  <el-table-column
                    property="serverStatus"
                    label="Server Status"
                    header-align="center"
                    align="center"
                    width="200">
                  </el-table-column>
                  <el-table-column
                    property="serverCPUUsage"
                    label="CPU Usage"
                    header-align="center"
                    align="center"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    property="action"
                    label="Action"
                    header-align="center"
                    align="center"
                    width="180">
                  </el-table-column>
                </el-table>
              </el-tab-pane>
            </el-tabs>
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
      profile: '',
      courseList: []
    }
  },
  created () {
    console.log(this.$route.params)
    this.profile = this.$route.params
    this.courseList = [
      {
        label: 'ESM240',
        data: []
      }
    ]
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
