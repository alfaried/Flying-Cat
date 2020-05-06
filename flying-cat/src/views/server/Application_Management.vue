<template>
  <div class="student-analytics-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Application Management</h1>
      <el-divider content-position="left"><h2>{{ "View & Manage Student's Deployed Applications" }}</h2></el-divider>
    </el-row>

    <el-card>
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="8">
          <el-card shadow="hover" class="inner-card">
            Overview 1
          </el-card>
        </el-col>

        <el-col :span="8">
          <el-card shadow="hover" class="inner-card">
            Overview 2
          </el-card>
        </el-col>

        <el-col :span="8">
          <el-card shadow="hover" class="inner-card">
            Overview 3
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
                    property="projectName"
                    label="Project Name"
                    header-align="center"
                    align="center"
                    width="250">
                  </el-table-column>
                  <el-table-column
                    property="cloudProfile"
                    label="Cloud Profile"
                    header-align="center"
                    align="center"
                    width="250">
                    <template slot-scope="scope">
                      <el-button type="text" @click="route('profile', scope.row.cloudProfile)">{{ scope.row.cloudProfile }}</el-button>
                    </template>
                  </el-table-column>
                  <el-table-column
                    property="applicationIP"
                    label="Application IP"
                    header-align="center"
                    align="center"
                    width="250">
                    <template slot-scope="scope">
                      <el-button type="text" @click="route('website', scope.row.applicationIP)">{{ scope.row.applicationIP }}</el-button>
                    </template>
                  </el-table-column>
                  <el-table-column
                    property="applicationStatus"
                    label="Application Status"
                    header-align="center"
                    align="center"
                    width="200">
                    <template slot-scope="scope">
                      <div v-if="scope.row.applicationStatus === 'Healthy'">
                        <font color="#67C23A">
                          <i class="el-icon-success"></i>
                          <b><span style="margin-left: 10px">{{ scope.row.applicationStatus }}</span></b>
                        </font>
                      </div>
                      <div v-else>
                        <font color="#F56C6C">
                          <i class="el-icon-error"></i>
                          <b><span style="margin-left: 10px">{{ scope.row.applicationStatus }}</span></b>
                        </font>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    property="applicationUsage"
                    label="Application Usage"
                    header-align="center"
                    align="center"
                    width="150">
                  </el-table-column>
                  <!-- To view the server -->
                  <el-table-column
                    property="action"
                    label="Action"
                    header-align="center"
                    align="center"
                    width="180">
                    <template slot-scope="scope">
                      <el-button size="small" type="primary" @click="route('app', scope.row.applicationIP)" plain>
                        <i class="el-icon-view"></i>
                        <span>View More</span>
                      </el-button>
                    </template>
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
import { serverList } from './serverInfo.js'

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
    this.courseList = serverList
  },
  methods: {
    route (location, params) {
      var pageName = 'Cloud_Profile'
      var pageUrl = '/server/management'

      if (location === 'app') {
        pageName = 'Server_Management'
      } else if (location === 'website') {
        console.log('Go to Website')
        this.$notify({
          title: 'Warning',
          message: 'This is a prototype, IP address ' + params + ' does not exists.',
          type: 'warning'
        })
        return null
      }

      this.$confirm('Go to ' + pageName.split('_').join(' ') + ' page ?', 'Confirm', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel'
      }).then(() => {
        this.$activeNavBarIndex = pageUrl
        this.$router.push({
          name: pageName,
          params: { profileID: params, applicationIP: params }
        })
      }).catch(() => {
        // Do nothing
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
