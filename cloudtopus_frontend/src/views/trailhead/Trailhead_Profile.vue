<template>
  <div class="student-analytics-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Trialhead Profile</h1>
      <el-divider content-position="left"><h2>Profile ID: <b>{{ trailheadProfile }}</b></h2></el-divider>
    </el-row>

    <el-card>
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="12">
          <el-button style="float: left;" type="warning" @click="route(null, null)" plain>
            <i class="el-icon-back"/>
            <span>Back to Trailhead Management</span>
          </el-button>
        </el-col>
        <el-col :span="12">
          <el-button style="float: right;" type="primary" @click="route('website', trailheadProfile)" plain>
            <span>Go to Trailblazer Website</span>
            <i class="el-icon-right"/>
          </el-button>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="6">
          <el-card shadow="hover" class="inner-card overview-info">
            <el-row class="overview-header">
              <i class="el-icon-s-help"/>
              <strong>{{ trailheadPorfileInfo.badges }}</strong>
            </el-row>
            <br>
            <el-row class="overview-body">
              <span>Badges</span>
            </el-row>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="hover" class="inner-card overview-info">
            <el-row class="overview-header">
              <i class="el-icon-s-opportunity"/>
              <strong>{{ trailheadPorfileInfo.points }}</strong>
            </el-row>
            <br>
            <el-row class="overview-body">
              <span>Points</span>
            </el-row>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="hover" class="inner-card overview-info">
            <el-row class="overview-header">
              <i class="el-icon-s-marketing"/>
              <strong>{{ trailheadPorfileInfo.trails }}</strong>
            </el-row>
            <br>
            <el-row class="overview-body">
              <span>Trails</span>
            </el-row>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="hover" class="inner-card overview-info">
            <el-row class="overview-header">
              <i class="el-icon-s-flag"/>
              <strong>{{ trailheadPorfileInfo.superbadge }}</strong>
            </el-row>
            <br>
            <el-row class="overview-body">
              <span>Superbadge</span>
            </el-row>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class="el-icon-document"></i>
              <span>Student Details</span>
            </div>

            <div class="card-body">
              <el-form :model="trailheadPorfileInfo" ref="trailheadProfileForm" class="card-form" label-position="top">
                <el-row :gutter="40">
                  <el-col :span="12">
                    <el-form-item label="Name">
                      <el-input v-model="trailheadPorfileInfo.name" disabled/>
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
                    <el-form-item label="Organization">
                      <el-input v-model="trailheadPorfileInfo.organization" disabled/>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="40">
                  <el-col :span="12">
                    <el-form-item label="Course Code">
                      <el-input v-model="trailheadPorfileInfo.courseCode" disabled/>
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
                    <el-form-item label="Status Label">
                      <el-input v-model="trailheadPorfileInfo.statusLabel" disabled/>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row>
                  <el-col :span="24">
                    <el-button class="card-button" @click="scrapeProfileInformation" type="primary" plain>
                      <i class="el-icon-download"/>
                      <span>Scrape Profile Information</span>
                    </el-button>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class="el-icon-star-on"></i>
              <span>{{ numOfSkills }} Skills</span>
            </div>

            <div class="card-body">
              <PieChart :profile="trailheadProfile" ref="PieChart"/>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { trailheadProfileList, skillsList } from '../trailhead/trailheadInfo.js'
import PieChart from './PieChart'

export default {
  name: 'Trailhead_Profile',
  components: {
    PieChart
  },
  data () {
    return {
      trailheadProfile: '',
      trailheadPorfileInfo: {},
      numOfSkills: 0
    }
  },
  created () {
    this.trailheadProfile = this.$route.params.profileID
    this.fetchData()
  },
  methods: {
    scrapeProfileInformation () {
      const loading = this.$loading({
        lock: true,
        text: 'Scrapping Information for Trailhead Profile...',
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
      }, 1000)
    },
    fetchData () {
      this.trailheadPorfileInfo = trailheadProfileList[this.trailheadProfile]
      this.numOfSkills = skillsList[this.trailheadProfile].length
    },
    route (location, params) {
      if (location === 'website') {
        var url = 'https://trailblazer.me/id/' + params
        window.open(url)
      } else {
        this.$activeNavBarIndex = '/trailhead/management'
        this.$router.push({
          name: 'Trailhead_Management'
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.overview-info {
  padding-top: 30px;
  text-align: center;
  padding-bottom: 30px;
}
.overview-header {
  font-size: 50px;
  color: #606266;
}
.overview-body {
  font-size: 30px;
  font-weight: bolder;
}
.overview-info:hover {
  color: #E6A23C;
}
.card-button {
  margin-top: 18px;
  margin-bottom: 18px;
}
</style>
