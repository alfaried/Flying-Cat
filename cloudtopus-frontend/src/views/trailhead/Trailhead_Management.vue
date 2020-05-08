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
          <el-card shadow="hover" class="inner-card">
            TO-DO: Overview 1
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="hover" class="inner-card">
            TO-DO: Overview 2
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="hover" class="inner-card">
            TO-DO: Overview 3
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="hover" class="inner-card">
            TO-DO: Overview 4
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
                    align="center"
                    width="230">
                    <template slot-scope="scope">
                      <el-button type="text" @click="route('website', scope.row.trailheadProfile)"><u>{{ scope.row.trailheadProfile }}</u></el-button>
                    </template>
                  </el-table-column>
                  <el-table-column
                    property="numPoints"
                    label="No. of Points"
                    header-align="center"
                    align="center"
                    width="210">
                  </el-table-column>
                  <el-table-column
                    property="numBadges"
                    label="No. of Badges"
                    header-align="center"
                    align="center"
                    width="210">
                  </el-table-column>
                  <el-table-column
                    property="numTrails"
                    label="No. of Trails"
                    header-align="center"
                    align="center"
                    width="205">
                  </el-table-column>
                  <!-- To view the server -->
                  <el-table-column
                    property="action"
                    label="Action"
                    header-align="center"
                    align="center"
                    width="180">
                    <template slot-scope="scope">
                      <el-button size="small" type="primary" @click="route('app', scope.row.trailheadProfile)" plain>
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
import { trailheadList } from '../trailhead/trailheadInfo.js'
import { courseList } from '../course/courseInfo.js'

export default {
  name: 'Trailhead_Management',
  data () {
    return {
      activeTabIndex: '0',
      courseListRef: {},
      trailheadList: []
    }
  },
  created () {
    this.trailheadList = trailheadList
    courseList.forEach(courseInfo => {
      this.courseListRef[courseInfo.courseCode] = courseInfo.courseName
    })
  },
  methods: {
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

</style>
