<template>
  <div class="student-analytics-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Trialhead Management</h1>
      <el-divider content-position="left"><h2>Overview of Student's Trailhead Profile</h2></el-divider>
    </el-row>

    <el-card>
      <div class="card-header" slot="header">
        <i class="el-icon-collection"></i>
        <span>{{ courseListRef[trailheadList[parseInt(activeTabIndex)].label] }}</span>
      </div>

      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="6">
          <el-card shadow="hover" class="inner-card overview-info">
            <el-row>
              <el-col :span="24">
                <el-progress
                  type="dashboard"
                  color="#E6A23C"
                  :percentage="overview1Info.dashboardPercentage"
                  :width="200"
                  :stroke-width="20"/>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="24">
                <span class="overview-body">
                  {{ overview1Info.totalRegistered }} out of {{ overview1Info.totalStudents }} students reigstered
                </span>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="hover" class="inner-card overview-info">
            <div class="wrapper-overview2-top">
              <el-row class="overview-header">
                <el-col :span="24">
                  {{ overview2Info.averageNumberPoint }}
                </el-col>
              </el-row>

              <el-row class="overview-body">
                <el-col :span="24">
                  <span>
                    Average No. of Points
                  </span>
                </el-col>
              </el-row>
            </div>

            <br>

            <div class="wrapper-overview2-bottom">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-card shadow="never">
                    <span>
                      Min: {{ overview2Info.minNumberPoint }}
                    </span>
                  </el-card>
                </el-col>

                <el-col :span="12">
                  <el-card shadow="never">
                    <span>
                      Max: {{ overview2Info.maxNumberPoint }}
                    </span>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="hover" class="inner-card overview-info">
            <div class="wrapper-overview2-top">
              <el-row class="overview-header">
                <el-col :span="24">
                  {{ overview3Info.averageNumberBadge }}
                </el-col>
              </el-row>

              <el-row class="overview-body">
                <el-col :span="24">
                  <span>
                    Average No. of Badges
                  </span>
                </el-col>
              </el-row>
            </div>

            <br>

            <div class="wrapper-overview2-bottom">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-card shadow="never">
                    <span>
                      Min: {{ overview3Info.minNumberBadge }}
                    </span>
                  </el-card>
                </el-col>

                <el-col :span="12">
                  <el-card shadow="never">
                    <span>
                      Max: {{ overview3Info.maxNumberBadge }}
                    </span>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="hover" class="inner-card overview-info">
            <div class="wrapper-overview2-top">
              <el-row class="overview-header">
                <el-col :span="24">
                  {{ overview3Info.averageNumberTrail }}
                </el-col>
              </el-row>

              <el-row class="overview-body">
                <el-col :span="24">
                  <span>
                    Average No. of Trails
                  </span>
                </el-col>
              </el-row>
            </div>

            <br>

            <div class="wrapper-overview2-bottom">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-card shadow="never">
                    <span>
                      Min: {{ overview3Info.minNumberTrail }}
                    </span>
                  </el-card>
                </el-col>

                <el-col :span="12">
                  <el-card shadow="never">
                    <span>
                      Max: {{ overview3Info.maxNumberTrail }}
                    </span>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-card shadow="hover" class="inner-card">
            <el-tabs v-model="activeTabIndex" type="card" @tab-click="handleTabClick">
              <el-tab-pane v-for="detail in trailheadList" :key="detail.label" :label="detail.label">
                <el-table
                  :data="detail.data"
                  ref="trailheadProfileListTable"
                  fit
                  stripe
                  border
                  height="500px"
                  @selection-change="handleSelection">
                  <el-table-column
                    type="selection"
                    header-align="center"
                    align="center"
                    width="50">
                  </el-table-column>
                  <el-table-column
                    property="section"
                    label="Section"
                    header-align="center"
                    align="center"
                    width="80">
                  </el-table-column>
                  <el-table-column
                    property="team"
                    label="Team"
                    header-align="center"
                    align="center"
                    width="80">
                  </el-table-column>
                  <el-table-column
                    property="fullName"
                    label="Full Name"
                    header-align="center"
                    align="center"
                    width="230">
                  </el-table-column>
                  <el-table-column
                    property="trailheadProfile"
                    label="Trailhead Profile"
                    header-align="center"
                    align="center">
                    <template slot-scope="scope">
                      <el-button type="text" @click="route('website', scope.row.trailheadProfile)"><u>{{ scope.row.trailheadProfile }}</u></el-button>
                    </template>
                  </el-table-column>
                  <el-table-column
                    property="numPoints"
                    label="No. of Points"
                    header-align="center"
                    align="center">
                  </el-table-column>
                  <el-table-column
                    property="numBadges"
                    label="No. of Badges"
                    header-align="center"
                    align="center">
                  </el-table-column>
                  <el-table-column
                    property="numTrails"
                    label="No. of Trails"
                    header-align="center"
                    align="center">
                  </el-table-column>
                  <!-- To view the server -->
                  <el-table-column
                    property="action"
                    label="Action"
                    header-align="center"
                    align="center">
                    <template slot-scope="scope">
                      <el-button size="small" type="primary" @click="route('app', scope.row.trailheadProfile)" plain>
                        <i class="el-icon-view"></i>
                        <span>View More</span>
                      </el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div style="margin-top: 20px">
                  <el-button @click="clearTableSelection" type="warning" plain disabled>
                    <i class="el-icon-refresh"/>
                    <span>Clear selection</span>
                  </el-button>
                  <el-button @click="scrapeProfileInformation" type="primary" plain :disabled="tableSelection.length === 0">
                    <i class="el-icon-download"/>
                    <span v-if="tableSelection.length === trailheadList[activeTabIndex].data.length">Scrape All Profile Information</span>
                    <span v-else>Scrape Selected Profile Information</span>
                  </el-button>
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { trailheadList } from '../trailhead/trailheadInfo.js'
import { studentList } from '../student/studentInfo.js'
import { courseList } from '../course/courseInfo.js'

export default {
  name: 'Trailhead_Management',
  data () {
    return {
      activeTabIndex: '0',
      courseListRef: {},
      trailheadList: [],
      overview1Info: {},
      overview2Info: {},
      overview3Info: {},
      overview4Info: {},
      tableSelection: []
    }
  },
  created () {
    this.trailheadList = trailheadList
    courseList.forEach(courseInfo => {
      this.courseListRef[courseInfo.courseCode] = courseInfo.courseName
    })
    this.computeOverview1()
    this.computeOverview2()
    this.computeOverview3()
    this.computeOverview4()
  },
  methods: {
    handleSelection (val) {
      this.tableSelection = val
    },
    clearTableSelection () {
      console.log('Selection Cleared')
      this.$refs['trailheadProfileListTable'].clearSelection()
      this.$notify.info({
        title: 'Info',
        message: 'Table selection cleared.'
      })
    },
    scrapeProfileInformation () {
      this.$confirm('This may take a while. Are you sure you want to initiate scrapping procedure for all accounts?', 'Confirm', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel'
      }).then(() => {
        const loading = this.$loading({
          lock: true,
          text: 'Scrapping Profile Information for all Trailhead Accounts...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        setTimeout(() => {
          loading.close()
          this.$notify({
            title: 'Success',
            message: 'Trailhead profile successfully scraped.',
            type: 'success'
          })
        }, this.tableSelection.length * 1000)
      }).catch(() => {
        // Do nothing
      })
    },
    computeOverview4 () {
      var counter = 0
      var total = 0
      var max = 0
      var min = 100000000

      trailheadList[this.activeTabIndex].data.forEach(datapoint => {
        var trails = datapoint.numTrails
        total += trails
        if (trails > max) {
          max = trails
        }
        if (trails < min) {
          min = trails
        }
        counter += 1
      })

      this.overview3Info.averageNumberTrail = parseInt(total / counter)
      this.overview3Info.maxNumberTrail = max
      this.overview3Info.minNumberTrail = min
    },
    computeOverview3 () {
      var counter = 0
      var total = 0
      var max = 0
      var min = 100000000

      trailheadList[this.activeTabIndex].data.forEach(datapoint => {
        var badges = datapoint.numBadges
        total += badges
        if (badges > max) {
          max = badges
        }
        if (badges < min) {
          min = badges
        }
        counter += 1
      })

      this.overview3Info.averageNumberBadge = parseInt(total / counter)
      this.overview3Info.maxNumberBadge = max
      this.overview3Info.minNumberBadge = min
    },
    computeOverview2 () {
      var counter = 0
      var total = 0
      var max = 0
      var min = 100000000

      trailheadList[this.activeTabIndex].data.forEach(datapoint => {
        var points = datapoint.numPoints
        total += points
        if (points > max) {
          max = points
        }
        if (points < min) {
          min = points
        }
        counter += 1
      })

      this.overview2Info.averageNumberPoint = parseInt(total / counter)
      this.overview2Info.maxNumberPoint = max
      this.overview2Info.minNumberPoint = min
    },
    computeOverview1 () {
      this.overview1Info.dashboardPercentage = parseInt(trailheadList[this.activeTabIndex].data.length / studentList.length * 100)
      this.overview1Info.totalRegistered = trailheadList[this.activeTabIndex].data.length
      this.overview1Info.totalStudents = studentList.length
    },
    handleTabClick (clickedTab) {
      console.log(clickedTab)
    },
    route (location, params) {
      if (location === 'website') {
        var url = 'https://trailblazer.me/id/' + params
        window.open(url)
      } else if (location === 'app') {
        this.$activeNavBarIndex = '/trailhead/management'
        this.$router.push({
          name: 'Trailhead_Profile',
          params: { profileID: params }
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.overview-info {
  text-align: center;
  font-weight: bolder;
}
.overview-header {
  font-size: 70px;
  color: #606266;
}
.overview-body {
  font-size: 20px;
}
.wrapper-overview2-top {
  padding-top: 20px;
  padding-bottom: 20px;
}
.wrapper-overview2-bottom {
  font-size: 18px;
}
</style>
