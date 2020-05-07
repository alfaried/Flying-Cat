<template>
  <div class="course-analytics-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Cloud Profile</h1>
      <el-divider content-position="left"><h2>Profile ID: <b>{{ cloudProfile }}</b></h2></el-divider>
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

      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="8">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class="el-icon-wallet"></i>
              <span>Account Information</span>
            </div>

            <div class="card-body">
              <el-form :model="cloudProfileForm" ref="generalForm" class="cloudProfileForm-form" label-position="top">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="Account Name">
                      <el-input v-model="cloudProfileForm.accountName" disabled/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="Account Cateogry">
                      <el-input v-model="cloudProfileForm.accountCategory" disabled/>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="Account Type">
                      <el-input v-model="cloudProfileForm.accountType" disabled/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="Account ID">
                      <el-input v-model="cloudProfileForm.accountID" disabled/>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="24">
                    <el-form-item label="Account Email">
                      <el-input v-model="cloudProfileForm.accountEmail" disabled/>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
            <br><br><br>
          </el-card>
        </el-col>

        <el-col :span="16">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class="el-icon-receiving"></i>
              <span>Services List</span>
            </div>

            <div class="card-body">
              <el-table
                :data="tableData"
                ref="serviceListTable"
                fit
                stripe
                border
                height="335px"
                @selection-change="handleSelectionChange"
                @cell-click="handleCellClick">
                <el-table-column
                  type="selection"
                  header-align="center"
                  align="center"
                  width="50">
                </el-table-column>
                <el-table-column
                  property="serviceType"
                  label="Service Type"
                  header-align="center"
                  align="center"
                  width="160"
                  column-key="serviceType"
                  :filters="[{text: 'Compute', value: 'Compute'}, {text: 'Storage', value: 'Storage'}, {text: 'Security', value: 'Security'}, {text: 'Network', value: 'Network'}]"
                  :filter-method="filterHandler">
                </el-table-column>
                <el-table-column
                  property="serviceName"
                  label="Service Name"
                  header-align="center"
                  align="center"
                  width="250">
                </el-table-column>
                <el-table-column
                  property="serviceHealth"
                  label="Service Health"
                  header-align="center"
                  align="center"
                  width="170">
                  <template slot-scope="scope">
                    <div v-if="scope.row.serviceHealth === 'Available'">
                      <font color="#67C23A">
                        <i class="el-icon-success"></i>
                        <b><span style="margin-left: 10px">{{ scope.row.serviceHealth }}</span></b>
                      </font>
                    </div>
                    <div v-else>
                      <font color="#F56C6C">
                        <i class="el-icon-error"></i>
                        <b><span style="margin-left: 10px">{{ scope.row.serviceHealth }}</span></b>
                      </font>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  property="serviceRegion"
                  label="Service Region"
                  header-align="center"
                  align="center"
                  width="170">
                </el-table-column>
                <el-table-column
                  property="serviceZone"
                  label="Service Zone"
                  header-align="center"
                  align="center"
                  width="200">
                </el-table-column>
              </el-table>
              <br>
              <el-button type="warning" @click="clearSelection" :disabled="tableSelection.length === 0" plain>
                <i class="el-icon-refresh"/>
                <span>Clear selection</span>
              </el-button>
              <el-button type="danger" @click="stopServices" :disabled="tableSelection.length === 0" plain>
                <i class="el-icon-warning-outline"/>
                <span>Stop Services</span>
              </el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class="el-icon-document"></i>
              <span>Service Information</span>
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
import { cloudProfileData } from './serverInfo.js'

export default {
  name: 'Cloud_Profile',
  data () {
    return {
      cloudProfile: '',
      cloudProfileForm: {
        accountType: '',
        accountID: '',
        accountName: '',
        accountEmail: ''
      },
      tableData: [],
      tableSelection: []
    }
  },
  created () {
    this.cloudProfile = this.$route.params.profileID
    this.fetchData()
    console.log(this.tableData)
  },
  methods: {
    handleCellClick () {
      this.$notify.info({
        title: 'Info',
        message: 'TO-DO: Cell click reveal service information'
      })
    },
    stopServices () {
      console.log('Stop Services')
      this.$confirm('Stop services for selected row(s)?', 'Confirm', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel'
      }).then(() => {
        this.$notify({
          title: 'Warning',
          message: 'This is a prototype, services selected does not exists.',
          type: 'warning'
        })
      }).catch(() => {
        // Do nothing
      })
    },
    clearSelection () {
      console.log('Selection Cleared')
      this.$refs.serviceListTable.clearSelection()
      this.$notify.info({
        title: 'Info',
        message: 'Table selection cleared.'
      })
    },
    handleSelectionChange (val) {
      this.tableSelection = val
    },
    filterHandler (value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    fetchData () {
      this.cloudProfileForm.accountType = this.cloudProfile.split('-')[0]
      this.cloudProfileForm.accountID = this.cloudProfile.split('-')[1]
      this.cloudProfileForm.accountName = cloudProfileData[this.cloudProfile].accountName
      this.cloudProfileForm.accountEmail = cloudProfileData[this.cloudProfile].accountEmail
      this.cloudProfileForm.accountCategory = cloudProfileData[this.cloudProfile].accountCategory
      this.tableData = cloudProfileData[this.cloudProfile].serviceList
    },
    route () {
      this.$activeNavBarIndex = '/server/management'
      this.$router.push({
        name: 'Application_Management'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-form {
  padding: 20px;
}
</style>
