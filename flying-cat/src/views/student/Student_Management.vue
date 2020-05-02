<template>
  <div class="student-management-main">
    <el-row>
      <h1>Student Management</h1>
      <el-divider content-position="left"><h2>{{ "View & Edit Student Information" }}</h2></el-divider>
    </el-row>

    <el-card>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-card shadow="hover">
            <el-table
              :data="tableData"
              fit
              stripe
              border
              height="400px"
              >
              <el-table-column
                type="index"
                label="No."
                header-align="center"
                width="50">
              </el-table-column>
              <el-table-column
                property="section"
                label="Section"
                header-align="center"
                width="100">
              </el-table-column>
              <el-table-column
                property="team"
                label="Team"
                header-align="center"
                width="100">
              </el-table-column>
              <el-table-column
                property="name"
                label="Name"
                header-align="center"
                width="365">
              </el-table-column>
              <el-table-column
                property="progress"
                label="Progress"
                header-align="center"
                width="300">
              </el-table-column>
              <el-table-column
                property="attendence"
                label="Attendence"
                header-align="center"
                width="200">
              </el-table-column>
              <el-table-column
                property="results"
                label="Results"
                header-align="center"
                width="200">
              </el-table-column>
              <!-- To delete a student -->
              <el-table-column
                property="action"
                label="Action"
                header-align="center"
                width="200">
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12">
          <el-card shadow="hover">
            <div class="card-header" slot="header">
              <i class="el-icon-document"></i>
              <span>General Information</span>
            </div>

            <div class="card-body">
              <el-form :model="generalForm" ref="generalForm" class="card-form" label-position="top">
                <el-row :gutter="50">
                  <el-col :span="6">
                    <el-form-item label="Section">
                      <el-input v-model="generalForm.section"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="Team">
                      <el-input v-model="generalForm.team"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="Team Pax">
                      <el-input v-model="generalForm.teamPax"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="Status">
                      <el-input v-model="generalForm.status"/>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="50">
                  <el-col :span="8">
                    <el-form-item label="Course Code">
                      <el-input v-model="generalForm.courseCode"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="16">
                    <el-form-item label="Course Name">
                      <el-input v-model="generalForm.courseName"/>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="50">
                  <el-col :span="24">
                    <el-form-item label="Course Description">
                      <el-input v-model="generalForm.courseDesc" type="textarea"/>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="50">
                  <el-col :span="14">
                    <el-form-item style="padding-top: 8px;" label="Progess">
                      <el-progress :text-inside="true" :stroke-width="30" :percentage="50"></el-progress>
                    </el-form-item>
                  </el-col>

                  <el-col style="float: right;" :span="10">
                    <el-form-item class="card-button">
                      <el-button icon="el-icon-edit" type="primary" @click="editClassInformation" plain>Update</el-button>
                      <el-button icon="el-icon-refresh" type="warning" @click="resetClassInformation" plain>Reset</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card shadow="hover">
            <div class="card-header" slot="header">
              <i class="el-icon-tickets"></i>
              <span>Personal Information</span>
            </div>

            <div class="card-body">
              <el-form :model="personalForm" ref="personalForm" class="card-form" label-position="top">
                <el-row :gutter="50">
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
                      <el-input v-model="personalForm.firstName"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10">
                    <el-form-item label="Last Name">
                      <el-input v-model="personalForm.lastName"/>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="50">
                  <el-col :span="10">
                    <el-form-item label="Email">
                      <el-input v-model="personalForm.email"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="NRIC">
                      <el-input v-model="personalForm.nric"/>
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

                <el-row :gutter="50">
                  <el-col :span="24">
                    <el-form-item label="Address">
                      <el-input v-model="personalForm.address" type="textarea"/>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="50">
                  <el-col :span="4">
                    <el-form-item label="Code">
                      <el-input v-model="personalForm.countryCode"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10">
                    <el-form-item label="Mobile Number">
                      <el-input v-model="personalForm.mobileNumber"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10">
                    <el-form-item class="card-button">
                      <el-button icon="el-icon-edit" type="primary" @click="editStudentInformation" plain>Update</el-button>
                      <el-button icon="el-icon-refresh" type="warning" @click="resetStudentInformation" plain>Reset</el-button>
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
export default {
  name: 'Student_Management',
  data () {
    return {
      generalForm: {
        section: '',
        team: '',
        teamPax: '',
        courseCode: '',
        courseName: '',
        courseDesc: '',
        status: ''
      },
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
      tableData: []
    }
  },
  methods: {
    editClassInformation () {
      // TO-DO
    },
    resetClassInformation () {
      // TO-DO
    },
    editStudentInformation () {
      // TO-DO
    },
    resetStudentInformation () {
      // TO-DO
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
