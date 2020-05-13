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
              <span class="progress-header">Term 3A Progress:</span>
              <el-progress :show-text="false" :stroke-width="40" :percentage="70" class="progress-bar" status="warning"></el-progress>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="24">
          <el-card shadow="never" class="inner-card">
            <div class="card-header" slot="header">
              <i class="el-icon-collection"></i>
              <span>{{ courseTitle }}</span>
              <el-button style="float: right; padding: 5px" type="text" @click="route('courses')">
                <span>View More</span>
                <i class="el-icon-right"></i>
              </el-button>
            </div>

            <el-tabs v-model="activeTabIndex" type="card" @tab-click="handleTabClick">
              <el-tab-pane v-for="course in courseList" :key="course.label" :label="course.label">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-card shadow="hover" class="inner-card">
                      <div class="card-header" slot="header">
                        <i class="el-icon-s-custom"></i>
                        <span>Students</span>
                        <el-button style="float: right; padding: 5px" type="text" @click="route('students')">
                          <span>View More</span>
                          <i class="el-icon-right"></i>
                        </el-button>
                      </div>
                      <div class="card-body">
                        <StudentPieChart ref="StudentPieChart"/>
                      </div>
                    </el-card>
                  </el-col>

                  <el-col :span="8">
                    <el-card shadow="hover" class="inner-card">
                      <div class="card-header" slot="header">
                        <i class="el-icon-s-platform"></i>
                        <span>Servers</span>
                        <el-button style="float: right; padding: 5px" type="text" @click="route('servers')">
                          <span>View More</span>
                          <i class="el-icon-right"></i>
                        </el-button>
                      </div>
                      <div class="card-body">
                        <ServerPieChart ref="ServerPieChart"/>
                      </div>
                    </el-card>
                  </el-col>

                  <el-col :span="8">
                    <el-card shadow="hover" class="inner-card">
                      <div class="card-header" slot="header">
                        <i class="el-icon-s-opportunity"></i>
                        <span>Trailheads</span>
                        <el-button style="float: right; padding: 5px" type="text" @click="route('trailheads')">
                          <span>View More</span>
                          <i class="el-icon-right"></i>
                        </el-button>
                      </div>
                      <div class="card-body">
                        <el-table
                          :data="trailheadTableData"
                          ref="trailheadTable"
                          fit
                          stripe
                          border
                          height="300px">
                          <el-table-column
                            type="index"
                            label="No."
                            header-align="center"
                            align="center"
                            width="50">
                          </el-table-column>
                          <el-table-column
                            property="profileID"
                            label="Profile ID"
                            header-align="center"
                            align="center">
                            <template slot-scope="scope">
                              <el-button type="text" @click="route('website', scope.row.profileID)"><u>{{ scope.row.profileID }}</u></el-button>
                            </template>
                          </el-table-column>
                          <el-table-column
                            property="points"
                            label="Points"
                            header-align="center"
                            align="center">
                          </el-table-column>
                          <el-table-column
                            property="badges"
                            label="Badges"
                            header-align="center"
                            align="center">
                          </el-table-column>
                        </el-table>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>

      </el-row>
    </el-card>
  </div>
</template>

<script>
import StudentPieChart from './StudentPieChart'
import ServerPieChart from './ServerPieChart'
import { courseList } from '../course/courseInfo.js'
import { trailheadProfileList } from '../trailhead/trailheadInfo.js'

export default {
  name: 'overview',
  components: {
    StudentPieChart,
    ServerPieChart
  },
  data () {
    return {
      todayDateTime: '',
      studentListInfo: {},
      courseListInfo: {},
      activeTabIndex: 0,
      courseList: [],
      courseTitle: '',
      trailheadTableData: []
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
    this.courseList = courseList
    this.courseTitle = courseList[this.activeTabIndex].courseName
    this.fetchTableData()
  },
  methods: {
    fetchTableData () {
      Object.keys(trailheadProfileList).forEach(key => {
        this.trailheadTableData.push(
          {
            profileID: key,
            points: trailheadProfileList[key].points,
            badges: trailheadProfileList[key].badges
          }
        )
      })
    },
    route (location, params) {
      var url = '/trailhead/management'

      if (location === 'students') {
        url = '/student/management'
      } else if (location === 'servers') {
        url = '/server/management'
      } else if (location === 'courses') {
        url = '/course/management'
      } else if (location === 'website') {
        url = 'https://trailblazer.me/id/' + params
        window.open(url)
        return
      }

      this.$activeNavBarIndex = url
      this.$router.push({
        path: url
      })
    },
    handleTabClick (clickedTab) {
      this.courseTitle = courseList[this.activeTabIndex].courseName
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progress-header {
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 10px;
}
.progress-bar {
  padding-top: 15px;
}
</style>
