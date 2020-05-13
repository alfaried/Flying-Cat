<template>
  <div class="course-analytics-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Application Detail</h1>
      <el-divider content-position="left"><h2>Application IP: <b>{{ applicationIP }}</b></h2></el-divider>
    </el-row>

    <el-card>
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="12">
          <el-button style="float: left;" type="warning" @click="route(null, null)" plain>
            <i class="el-icon-back"/>
            <span>Back to Application Management</span>
          </el-button>
        </el-col>
        <el-col :span="12">
          <el-button style="float: right;" type="primary" @click="route('website', applicationIP)" plain :disabled="overviewInfo.serverHealth === 'Down'">
            <span>Go to Deployed Application Website</span>
            <i class="el-icon-right"/>
          </el-button>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="6">
          <el-card shadow="hover" class="inner-card overview-info">
            <el-row v-if="overviewInfo.serverHealth === 'Healthy'" class="overview-header healthy">
              <i class="el-icon-success"/>
              <strong>{{ overviewInfo.serverHealth }}</strong>
            </el-row>
            <el-row v-else class="overview-header down">
              <i class="el-icon-error"/>
              <strong>{{ overviewInfo.serverHealth }}</strong>
            </el-row>
            <br>
            <el-row class="overview-body">
              <span>Application Health</span>
            </el-row>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="hover" class="inner-card overview-info">
            <el-row class="overview-header">
              <strong>{{ overviewInfo.cpuUtilization }} %</strong>
            </el-row>
            <br>
            <el-row class="overview-body">
              <span>CPU Utilization</span>
            </el-row>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="hover" class="inner-card overview-info">
            <el-row class="overview-header">
              <strong>{{ overviewInfo.networkIN }} Bytes</strong>
            </el-row>
            <br>
            <el-row class="overview-body">
              <span>Network In</span>
            </el-row>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="hover" class="inner-card overview-info">
            <el-row class="overview-header">
              <strong>{{ overviewInfo.networkOUT }} Bytes</strong>
            </el-row>
            <br>
            <el-row class="overview-body">
              <span>Network OUT</span>
            </el-row>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="24">
          <el-card shadow="hover" class="inner-card">
            <el-tabs v-model="activeTabIndex" type="card" @tab-click="handleTabClick">
              <el-tab-pane v-for="server in applicationInfoList" :key="server.id" :label="server.id">
                <el-form :model="serverInfoForm" ref="serverInfoForm" class="card-form" label-position="top">
                  <el-row :gutter="40">
                    <el-col :span="6">
                      <el-form-item label="Instance ID">
                        <el-input v-model="serverInfoForm.instanceID" disabled/>
                      </el-form-item>
                    </el-col>

                    <el-col :span="6">
                      <el-form-item label="Instance Name">
                        <el-input v-model="serverInfoForm.instanceName" disabled/>
                      </el-form-item>
                    </el-col>

                    <el-col :span="6">
                      <el-form-item label="Instance Type">
                        <el-input v-model="serverInfoForm.instanceType" disabled/>
                      </el-form-item>
                    </el-col>

                    <el-col :span="6">
                      <el-form-item label="Instance State">
                        <el-input v-model="serverInfoForm.instanceState" disabled/>
                      </el-form-item>
                    </el-col>
                  </el-row>

                  <el-row :gutter="40">
                    <el-col :span="6">
                      <el-form-item label="Region">
                        <el-input v-model="serverInfoForm.region" disabled/>
                      </el-form-item>
                    </el-col>

                    <el-col :span="6">
                      <el-form-item label="Availability Zone">
                        <el-input v-model="serverInfoForm.availabilityZone" disabled/>
                      </el-form-item>
                    </el-col>

                    <el-col :span="6">
                      <el-form-item label="Private IP">
                        <el-input v-model="serverInfoForm.privateIP" disabled/>
                      </el-form-item>
                    </el-col>

                    <el-col :span="6">
                      <el-form-item label="Private DNS">
                        <el-input v-model="serverInfoForm.privateDNS" disabled/>
                      </el-form-item>
                    </el-col>
                  </el-row>

                  <el-row :gutter="40">
                    <el-col :span="12">
                      <el-form-item label="Is Load Balanced?">
                        <el-radio-group v-model="serverInfoForm.loadBalance">
                          <el-radio disabled label="Yes"/>
                          <el-radio disabled label="No"/>
                        </el-radio-group>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-button @click="stopInstance" type="danger" style="margin-top: 50px; float: right;" plain :disabled="overviewInfo.serverHealth === 'Down'">
                        <i class="el-icon-warning-outline"/>
                        <span>Stop Instance</span>
                      </el-button>
                    </el-col>
                  </el-row>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { applicationInfoList } from './serverInfo.js'

export default {
  name: 'Application_Details',
  data () {
    return {
      applicationIP: '',
      activeTabIndex: 0,
      applicationInfoList: {},
      serverInfoForm: {
        instanceState: ''
      },
      overviewInfo: {
        serverHealth: '',
        cpuUtilization: 0,
        networkIN: 0,
        networkOUT: 0
      }
    }
  },
  created () {
    const loading = this.$loading({
      lock: true,
      text: 'Retrieving Application Data...',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })

    this.applicationIP = this.$route.params.applicationIP
    this.applicationInfoList = applicationInfoList[this.applicationIP]
    this.fetchData()

    setTimeout(() => {
      loading.close()
    }, 2500)
  },
  methods: {
    handleTabClick (clickedTab) {
      console.log(clickedTab)
    },
    stopInstance () {
      console.log('Disrupt Applications')
      this.$confirm('Are you sure you want to stop instance id:<br>' + this.serverInfoForm.instanceID, 'Confirm', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        dangerouslyUseHTMLString: true
      }).then(() => {
        const loading = this.$loading({
          lock: true,
          text: 'Stopping instance...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })

        this.$http.get('http://localhost:8000/api/stop_instance/?instance_id=' + this.serverInfoForm.instanceID).then(response => {
          this.fetchMetricsData('CPUUtilization', 'Percent')
          this.fetchMetricsData('NetworkIn', 'Bytes')
          this.fetchMetricsData('NetworkOut', 'Bytes')
          this.fetchInstanceState()
          this.overviewInfo.serverHealth = 'Down'

          setTimeout(() => {
            loading.close()
            this.$notify({
              title: 'Warning',
              message: 'Instance stopped successfully',
              type: 'success'
            })
          }, 1000)
        })
      }).catch(() => {
        // Do nothing
      })
    },
    fetchData () {
      var serverInfo = this.applicationInfoList[this.activeTabIndex]

      // For Info
      this.serverInfoForm.instanceID = serverInfo.instanceID
      this.serverInfoForm.instanceName = serverInfo.instanceName
      this.serverInfoForm.instanceType = serverInfo.instanceType
      // this.serverInfoForm.instanceState = serverInfo.instanceState
      this.serverInfoForm.region = serverInfo.region
      this.serverInfoForm.availabilityZone = serverInfo.availabilityZone
      this.serverInfoForm.privateIP = serverInfo.privateIP
      this.serverInfoForm.privateDNS = serverInfo.privateDNS
      this.serverInfoForm.loadBalance = serverInfo.loadBalance

      this.fetchMetricsData('CPUUtilization', 'Percent')
      this.fetchMetricsData('NetworkIn', 'Bytes')
      this.fetchMetricsData('NetworkOut', 'Bytes')

      this.fetchInstanceState()
      this.fetchApplicationStatus()
    },
    fetchApplicationStatus () {
      this.$http.get('http://localhost:8000/api/get_application_status/?application_ip=' + this.applicationIP + '&port_number=8000').then(response => {
        this.overviewInfo.serverHealth = response.data.Content
      })
    },
    fetchInstanceState () {
      this.$http.get('http://localhost:8000/api/describe_instance_status/?instance_id=' + this.serverInfoForm.instanceID).then(response => {
        var instanceStatuses = response.data.Content.InstanceStatuses
        if (instanceStatuses.length === 0) {
          this.serverInfoForm.instanceState = 'stopped'
        } else {
          this.serverInfoForm.instanceState = instanceStatuses[0].InstanceState.Name
        }
      })
    },
    fetchMetricsData (metricName, unit) {
      this.$http.get('http://localhost:8000/api/get_ec2_metric_statistics/?instance_id=' + this.serverInfoForm.instanceID + '&metric_name=' + metricName + '&unit=' + unit).then(response => {
        var datapoints = response.data.Content.Datapoints
        if (datapoints.length > 0) {
          if (metricName === 'CPUUtilization') { this.overviewInfo.cpuUtilization = (datapoints[datapoints.length - 1].Average).toFixed(3) }
          if (metricName === 'NetworkIn') { this.overviewInfo.networkIN = parseInt(datapoints[datapoints.length - 1].Average) }
          if (metricName === 'NetworkOut') { this.overviewInfo.networkOUT = parseInt(datapoints[datapoints.length - 1].Average) }
        }
      })
    },
    route (location, params) {
      if (location === 'website') {
        var url = 'http://' + params + ':8000/'
        window.open(url)
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
.overview-info {
  padding-top: 30px;
  text-align: center;
  padding-bottom: 30px;
}
.overview-info:hover {
  color: #E6A23C;
}
.overview-header {
  font-size: 50px;
  color: #606266;
}
.overview-body {
  font-size: 30px;
  font-weight: bolder;
}
.healthy {
  color: #67C23A;
}
.down {
  color: #F56C6C;
}
.card-form {
  padding: 15px;
}
</style>
