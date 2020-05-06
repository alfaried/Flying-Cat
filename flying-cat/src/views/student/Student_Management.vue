<template>
  <div class="student-management-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Student Management</h1>
      <el-divider content-position="left"><h2>{{ "View & Edit Student Information" }}</h2></el-divider>
    </el-row>

    <el-card>
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="24">
          <el-card shadow="hover" class="inner-card">
            <el-table
              :data="tableData"
              fit
              stripe
              border
              height="400px"
              @cell-click="handleClick">
              <el-table-column
                type="index"
                label="No."
                header-align="center"
                align="center"
                width="50">
              </el-table-column>
              <el-table-column
                property="course_code"
                label="Course Code"
                header-align="center"
                align="center"
                width="150">
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
                property="name.full"
                label="Name"
                header-align="center"
                align="center"
                width="265">
              </el-table-column>
              <!-- Leades to AWS Server profile page -->
              <el-table-column
                property=""
                label="Server Profile"
                header-align="center"
                align="center"
                width="300">
                <template slot-scope="scope">
                  <el-button type="text" @click="route('server', scope.row.server_profile)">{{ scope.row.server_profile }}</el-button>
                </template>
              </el-table-column>
              <!-- Leads to Trialhead profile page -->
              <el-table-column
                property=""
                label="Trailhead Profile"
                header-align="center"
                align="center"
                width="250">
                <template slot-scope="scope">
                  <el-button type="text" @click="route('trailhead', scope.row.trailhead_profile)">{{ scope.row.trailhead_profile }}</el-button>
                </template>
              </el-table-column>
              <!-- Online or Offline -->
              <el-table-column
                property=""
                label="Status"
                header-align="center"
                align="center"
                width="150">
                <template slot-scope="scope">
                  <div v-if="scope.row.status === 'Online'">
                    <font color="#67C23A">
                      <i class="el-icon-success"></i>
                      <b><span style="margin-left: 10px">{{ scope.row.status }}</span></b>
                    </font>
                  </div>
                  <div v-else>
                    <font color="#F56C6C">
                      <i class="el-icon-success"></i>
                      <b><span style="margin-left: 10px">{{ scope.row.status }}</span></b>
                    </font>
                  </div>
                </template>
              </el-table-column>
              <!-- To delete a student -->
              <el-table-column
                property="action"
                label="Action"
                header-align="center"
                align="center"
                width="150">
                <template>
                  <el-button size="small" type="danger" @click="handleRemove" plain>Remove</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class="el-icon-document"></i>
              <span>General Information</span>
            </div>

            <div class="card-body">
              <el-form :model="generalForm" ref="generalForm" class="card-form" label-position="top">
                <el-row :gutter="20">
                  <el-col :span="6">
                    <el-form-item label="Section">
                      <el-input v-model="generalForm.section" :placeholder="placeholder_text"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="Team">
                      <el-input v-model="generalForm.team" :placeholder="placeholder_text"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="Metric Number">
                      <el-input v-model="generalForm.metricNumber" :placeholder="placeholder_text"/>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item label="Course Code">
                      <el-input v-model="generalForm.courseCode" :placeholder="placeholder_text"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="16">
                    <el-form-item label="Course Name">
                      <el-input v-model="generalForm.courseName" :placeholder="placeholder_text"/>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="24">
                    <el-form-item label="Course Description">
                      <el-input v-model="generalForm.courseDesc" type="textarea" :placeholder="placeholder_text"/>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="14">
                    <el-form-item style="padding-top: 8px;" label="Progess">
                      <el-progress :text-inside="true" :stroke-width="30" :percentage="generalForm.progress" status="warning"></el-progress>
                    </el-form-item>
                  </el-col>

                  <el-col style="float: right;" :span="10">
                    <el-form-item class="card-button">
                      <el-button icon="el-icon-edit" type="primary" @click="updateGeneral" plain>Update</el-button>
                      <el-button icon="el-icon-refresh" type="warning" @click="resetGeneral" plain>Reset</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class="el-icon-tickets"></i>
              <span>Personal Information</span>
            </div>

            <div class="card-body">
              <el-form :model="personalForm" ref="personalForm" class="card-form" label-position="top">
                <el-row :gutter="20">
                  <el-col :span="4">
                    <el-form-item label="Salutation">
                      <el-select v-model="personalForm.salutation">
                        <el-option label="Mr." value="mr."></el-option>
                        <el-option label="Mrs." value="mrs."></el-option>
                        <el-option label="Ms." value="ms."></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10">
                    <el-form-item label="First Name">
                      <el-input v-model="personalForm.firstName" :placeholder="placeholder_text"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10">
                    <el-form-item label="Last Name">
                      <el-input v-model="personalForm.lastName" :placeholder="placeholder_text"/>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="10">
                    <el-form-item label="Email">
                      <el-input v-model="personalForm.email" :placeholder="placeholder_text"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="NRIC">
                      <el-input v-model="personalForm.nric" :placeholder="placeholder_text"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="Gender">
                      <el-select v-model="personalForm.gender">
                        <el-option label="Male" value="m"></el-option>
                        <el-option label="Female" value="f"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="24">
                    <el-form-item label="Address">
                      <el-input v-model="personalForm.address" type="textarea" :placeholder="placeholder_text"/>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="4">
                    <el-form-item label="Code">
                      <el-input v-model="personalForm.countryCode" :placeholder="placeholder_text"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10">
                    <el-form-item label="Mobile Number">
                      <el-input v-model="personalForm.mobileNumber" :placeholder="placeholder_text"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10">
                    <el-form-item class="card-button">
                      <el-button icon="el-icon-edit" type="primary" @click="updatePersonal" plain>Update</el-button>
                      <el-button icon="el-icon-refresh" type="warning" @click="resetPersonal" plain>Reset</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { studentList } from './studentInfo.js'

export default {
  name: 'Student_Management',
  data () {
    return {
      placeholder_text: '',
      generalForm: {
        section: '',
        team: '',
        metricNumber: '',
        courseCode: '',
        courseName: '',
        courseDesc: '',
        status: '',
        progress: 0
      },
      generalFormCopy: {},
      personalForm: {
        salutation: '',
        firstName: '',
        lastName: '',
        gender: '',
        nric: '',
        email: '',
        address: '',
        countryCode: '',
        mobileNumber: ''
      },
      personalFormCopy: {},
      tableData: []
    }
  },
  created () {
    this.placeholder_text = 'Select a row'
    this.tableData = studentList
  },
  methods: {
    route (location, profile) {
      var pageName = 'Trialhead_Management'
      var pageUrl = '/trailhead/management'

      if (location === 'server') {
        pageName = 'Server_Management'
        pageUrl = '/server/management'
      }

      this.$confirm('Go to ' + pageName.split('_').join(' ') + ' page ?', 'Confirm', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel'
      }).then(() => {
        this.$activeNavBarIndex = pageUrl
        this.$router.push({
          name: pageName,
          params: { profile: profile }
        })
      }).catch(() => {
        // Do nothing
      })
    },
    handleClick (row, column, cell, event) {
      // Populate persoal information
      this.personalForm.salutation = row.salutation
      this.personalForm.firstName = row.name.first
      this.personalForm.lastName = row.name.last
      this.personalForm.gender = row.gender
      this.personalForm.nric = row.nric
      this.personalForm.email = row.email
      this.personalForm.address = row.address
      this.personalForm.countryCode = row.countryCode
      this.personalForm.mobileNumber = row.mobileNumber
      this.personalFormCopy = JSON.parse(JSON.stringify(this.personalForm))

      // Populate general information
      this.generalForm.section = row.section
      this.generalForm.team = row.team
      this.generalForm.metricNumber = row.metric_number
      this.generalForm.courseCode = row.course_code
      this.generalForm.courseName = row.course_name
      this.generalForm.courseDesc = row.course_desc
      this.generalForm.status = row.status
      this.generalForm.progress = parseInt(row.progress)
      this.generalFormCopy = JSON.parse(JSON.stringify(this.generalForm))
    },
    handleRemove () {
      console.log('Remove Student')
      this.$notify({
        title: 'Warning',
        message: 'This is a prototype, button function "removeStudent" is not mapped yet.',
        type: 'warning'
      })
    },
    updateGeneral () {
      console.log('Update General Information')
      this.$notify({
        title: 'Warning',
        message: 'This is a prototype, button function "updateGeneralInfo" is not mapped yet.',
        type: 'warning'
      })
    },
    resetGeneral () {
      console.log('Reset General Information')
      this.generalForm = JSON.parse(JSON.stringify(this.generalFormCopy))
    },
    updatePersonal () {
      console.log('Update Personal Information')
      this.$notify({
        title: 'Warning',
        message: 'This is a prototype, button function "updatePersonalInfo" is not mapped yet.',
        type: 'warning'
      })
    },
    resetPersonal () {
      console.log('Reset Personal Information')
      this.personalForm = JSON.parse(JSON.stringify(this.personalFormCopy))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-form {
  padding: 20px;
}
.card-button {
  float: right;
  padding-top: 50px;
}
</style>
