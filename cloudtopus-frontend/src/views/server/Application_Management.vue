<template>
  <div class="student-analytics-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Application Management</h1>
      <el-divider content-position="left"><h2>{{ "View & Manage Student's Deployed Applications" }}</h2></el-divider>
    </el-row>

    <el-card>
      <div class="card-header" slot="header">
        <i class="el-icon-collection"></i>
        <span>{{ courseListRef[serverList[parseInt(activeTabIndex)].label] }}</span>
      </div>

      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="6">
          <el-card shadow="hover" class="inner-card overview-info">
            <el-row style="font-weight: bolder;">
              <el-progress
              type="dashboard"
              color="#E6A23C"
              :percentage="overview2Info.dashboardPercentage"
              :width="200"
              :stroke-width="20"/>
            </el-row>
            <el-row>
              <strong class="overview-body">
                {{ overview2Info.totalDeployed }} out of {{ overview2Info.totalStudents }} students deployed
              </strong>
            </el-row>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="hover" class="inner-card overview-info">
            <el-row class="overview-1-row">
              <el-row class="overview-1-header">
                <i class="el-icon-s-platform"/>
                <strong>{{ overview1Info.totalApps }}</strong>
              </el-row>

              <el-row class="overview-1-body">
                <strong>Deployed Apps</strong>
              </el-row>
            </el-row>
            <br>
            <el-row>
              <el-card shadow="never">
                <el-row>
                  <el-col :span="12">
                    <el-row class="overview-1-sub-header healthy-color">
                      <i class="el-icon-success"/>
                      <strong>{{ overview1Info.healthyApps }}</strong>
                    </el-row>

                    <el-row class="overview-1-sub-body healthy-color">
                      <strong>Healthy</strong>
                    </el-row>
                  </el-col>

                  <el-col :span="12">
                    <el-row class="overview-1-sub-header down-color">
                      <i class="el-icon-error"/>
                      <strong>{{ overview1Info.downApps }}</strong>
                    </el-row>

                    <el-row class="overview-1-sub-body down-color">
                      <strong>Down</strong>
                    </el-row>
                  </el-col>
                </el-row>
              </el-card>
            </el-row>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="hover" class="inner-card overview-info">
            <el-row class="overview-1-row">
              <el-row class="overview-1-header">
                <strong>{{ overview4Info.totalUniqueTeams }}</strong>
                <i class="el-icon-s-custom"/>
              </el-row>

              <el-row class="overview-1-body">
                <strong>Unique Teams</strong>
              </el-row>
            </el-row>
            <br>
            <el-row>
              <el-card shadow="never">
                <el-row class="wrapper-padding">
                    <el-col
                      v-for="(count, team) in overview4Info.uniqueTeamArray"
                      :key="team"
                      :span="24/overview4Info.totalUniqueTeams">
                      <el-badge :value="count" type="success">
                        <el-tag style="font-size: 15px; font-weight: bolder;" type="info">
                          {{ team }}
                        </el-tag>
                      </el-badge>
                    </el-col>
                </el-row>
              </el-card>
            </el-row>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="hover" class="inner-card overview-info">
            <el-row class="overview-3-header">
              {{ overview3Info.averagelUsageAmount }} %
            </el-row>
            <el-row class="overview-body">
              <strong>Average Application Usage</strong>
            </el-row>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="24">
          <el-card shadow="hover" class="inner-card">
            <el-tabs v-model="activeTabIndex" type="card" @tab-click="handleTabClick">
              <el-tab-pane v-for="course in serverList" :key="course.label" :label="course.label">
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
                      <el-button type="text" @click="route('profile', scope.row.cloudProfile)"><u>{{ scope.row.cloudProfile }}</u></el-button>
                    </template>
                  </el-table-column>
                  <el-table-column
                    property="applicationIP"
                    label="Application IP"
                    header-align="center"
                    align="center"
                    width="230">
                    <template slot-scope="scope">
                      <el-button type="text" @click="route('website', scope.row.applicationIP)"><u>{{ scope.row.applicationIP }}</u></el-button>
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
                    <template slot-scope="scope">
                      {{ scope.row.applicationUsage }} %
                    </template>
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
import { studentList } from '../student/studentInfo.js'
import { courseList } from '../course/courseInfo.js'

export default {
  name: 'Server_Management',
  data () {
    return {
      activeTabIndex: 0,
      profile: '',
      serverList: [],
      overview1Info: {
        totalApps: 0,
        healthyApps: 0,
        downApps: 0
      },
      overview2Info: {
        dashboardPercentag: 0,
        totalDeployed: 0,
        totalStudents: 0
      },
      overview3Info: {
        totalUsageAmount: 0,
        averagelUsageAmount: 0
      },
      overview4Info: {
        totalUniqueTeams: 0,
        uniqueTeamArray: {}
      },
      courseListRef: {}
    }
  },
  created () {
    this.profile = this.$route.params
    this.serverList = serverList
    this.computeOverview1()
    this.computeOverview2()
    this.computeOverview3()
    this.computeOverview4()
    courseList.forEach(courseInfo => {
      this.courseListRef[courseInfo.courseCode] = courseInfo.courseName
    })
  },
  methods: {
    handleTabClick (clickedTab) {
      console.log(clickedTab)
    },
    computeOverview1 () {
      this.serverList.forEach(course => {
        course.data.forEach(datapoint => {
          this.overview1Info.totalApps += 1
          if (datapoint.applicationStatus === 'Healthy') { this.overview1Info.healthyApps += 1 }
          if (datapoint.applicationStatus === 'Down') { this.overview1Info.downApps += 1 }
        })
      })
    },
    computeOverview2 () {
      this.overview2Info.dashboardPercentage = parseInt(this.overview1Info.totalApps / studentList.length * 100)
      this.overview2Info.totalDeployed = this.overview1Info.totalApps
      this.overview2Info.totalStudents = studentList.length
    },
    computeOverview3 () {
      var count = 0
      var total = 0
      this.serverList.forEach(course => {
        course.data.forEach(datapoint => {
          total += datapoint.applicationUsage
          count += 1
        })
      })
      this.overview3Info.totalUsageAmount = total
      this.overview3Info.averagelUsageAmount = (total / count).toFixed(2)
    },
    computeOverview4 () {
      this.serverList.forEach(course => {
        course.data.forEach(datapoint => {
          var team = datapoint.team
          if (team in this.overview4Info.uniqueTeamArray) {
            this.overview4Info.uniqueTeamArray[team] += 1
          } else {
            this.overview4Info.uniqueTeamArray[team] = 1
            this.overview4Info.totalUniqueTeams += 1
          }
        })
      })
    },
    route (location, params) {
      var pageName = 'Cloud_Profile'
      var pageUrl = '/server/management'

      if (location === 'app') {
        pageName = 'Application_Detail'
      } else if (location === 'website') {
        console.log('Go to Website')
        this.$notify({
          title: 'Warning',
          message: 'This is a prototype, IP address ' + params + ' does not exists.',
          type: 'warning'
        })
        return null
      }

      this.$activeNavBarIndex = pageUrl
      this.$router.push({
        name: pageName,
        params: { profileID: params, applicationIP: params }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.overview-info {
  text-align: center;
}
.overview-1-row {
  padding-top: 5px;
  padding-bottom: 5px
}
.overview-1-header {
  margin-bottom: 10px;
  font-size: 50px;
  color: #606266;
}
.overview-1-body {
  font-size: 20px;
}
.overview-1-sub-header {
  margin-bottom: 10px;
  font-size: 30px;
}
.overview-1-sub-body {
  font-size: 18px;
}
.healthy-color {
  color: #67C23A;
}
.down-color {
  color: #F56C6C;
}
.overview-3-header {
  font-size: 80px;
  font-weight: bolder;
  color: #606266;
  padding-top: 57px;
  padding-bottom: 57px;
}
.overview-body {
  font-size: 20px;
}
.wrapper-padding {
  padding-top: 18px;
  padding-bottom: 18px;
}
</style>
