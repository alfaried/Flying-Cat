<template>
  <div class="courses-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Bootstrap</h1>
      <el-divider content-position="left"><h2>{{ "Add New Students or Courses" }}</h2></el-divider>
    </el-row>

    <el-card>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card class="add-student-card inner-card" shadow="hover">
            <div class="card-header" slot="header">
              <i class="el-icon-circle-plus-outline"></i>
              <span>Add Students</span>
            </div>

            <div class="card-body">
              <el-row :gutter="20">
                <el-collapse v-model="activeNameStudent" accordion>
                  <el-collapse-item name="student_manual">
                    <template slot="title">
                      <span class="collapse-header highlight">Manual Entry</span>
                      <i class="collapse-header el-icon-edit-outline header-icon highlight"/>
                    </template>

                    <div class="collapse-body">
                      <el-form :model="studentForm" ref="studentForm" class="card-form" label-position="top">
                        <el-row :gutter="30">
                          <el-col :span="12">
                            <el-form-item label="First Name">
                              <el-input v-model="studentForm.firstName"/>
                            </el-form-item>
                          </el-col>
                          <el-col :span="12">
                            <el-form-item label="Last Name">
                              <el-input v-model="studentForm.lastName"/>
                            </el-form-item>
                          </el-col>
                        </el-row>

                        <el-row :gutter="30">
                          <el-col :span="12">
                            <el-form-item label="Email">
                              <el-input v-model="studentForm.email"/>
                            </el-form-item>
                          </el-col>
                          <el-col :span="6">
                            <el-form-item label="NRIC">
                              <el-input v-model="studentForm.nric"/>
                            </el-form-item>
                          </el-col>
                          <el-col :span="6">
                            <el-form-item label="Metric Number">
                              <el-input v-model="studentForm.metricNumber"/>
                            </el-form-item>
                          </el-col>
                        </el-row>

                        <el-row :gutter="30">
                          <el-col :span="8">
                            <el-form-item label="Course Code">
                              <el-input v-model="studentForm.courseCode"/>
                            </el-form-item>
                          </el-col>
                          <el-col :span="8">
                            <el-form-item label="Section">
                              <el-input v-model="studentForm.section"/>
                            </el-form-item>
                          </el-col>
                          <el-col :span="8">
                            <el-form-item label="Team">
                              <el-input v-model="studentForm.team" placeholder="Optional"/>
                            </el-form-item>
                          </el-col>
                        </el-row>

                        <el-row>
                          <el-form-item class="card-button">
                            <el-button icon="el-icon-circle-check" type="primary" @click="addStudent" plain>Add</el-button>
                            <el-button icon="el-icon-refresh" type="warning" @click="resetStudent" plain>Clear</el-button>
                          </el-form-item>
                        </el-row>
                      </el-form>
                    </div>
                  </el-collapse-item>

                  <el-collapse-item name="student_upload">
                    <template slot="title">
                      <span class="collapse-header highlight">Upload CSV</span>
                      <i class="collapse-header el-icon-upload2 header-icon highlight"/>
                    </template>

                    <div class="collapse-body">
                      <el-upload
                        class="collapse-upload"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="collapse-upload-text">Drop file here or <em>click to upload</em></div>
                        <div class="collapse-upload-tip" slot="tip">
                          <i>* Please ensure that headers are in proper format</i>
                        </div>
                      </el-upload>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </el-row>
            </div>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card class="add-course-card inner-card" shadow="hover">
            <div class="card-header" slot="header">
              <i class="el-icon-circle-plus-outline"></i>
              <span>Add Courses</span>
            </div>

            <div class="card-body">
              <el-row :gutter="20">
                <el-collapse v-model="activeNameCourse" accordion>
                  <el-collapse-item name="course_manual">
                    <template slot="title">
                      <span class="collapse-header highlight">Manual Entry</span>
                      <i class="collapse-header el-icon-edit-outline header-icon highlight"/>
                    </template>

                    <div class="collapse-body">
                      <el-form :model="courseForm" ref="courseForm" class="card-form" label-position="top">
                        <el-row :gutter="30">
                          <el-col :span="6">
                            <el-form-item label="Course Name">
                              <el-input v-model="courseForm.courseCode"/>
                            </el-form-item>
                          </el-col>
                          <el-col :span="18">
                            <el-form-item label="Course Code">
                              <el-input v-model="courseForm.courseName"/>
                            </el-form-item>
                          </el-col>
                        </el-row>

                        <el-row :gutter="30">
                          <el-col :span="24">
                            <el-form-item label="Course Description">
                              <el-input v-model="courseForm.courseDesc" type="textarea"/>
                            </el-form-item>
                          </el-col>
                        </el-row>

                        <el-row :gutter="30">
                          <el-col :span="8">
                            <el-form-item label="Number of Sections">
                              <el-input-number v-model="courseForm.nummOfSections" :min="1" :max="5"/>
                            </el-form-item>
                          </el-col>
                          <div class="wrapper">
                            <el-form-item class="card-button">
                              <el-button icon="el-icon-circle-check" type="primary" @click="addCourse" plain>Add</el-button>
                              <el-button icon="el-icon-refresh" type="warning" @click="resetCourse" plain>Clear</el-button>
                            </el-form-item>
                          </div>
                        </el-row>
                      </el-form>
                    </div>
                    <br><br><br>
                  </el-collapse-item>

                  <el-collapse-item name="course_upload">
                    <template slot="title">
                      <span class="collapse-header highlight">Upload CSV</span>
                      <i class="collapse-header el-icon-upload2 header-icon highlight"/>
                    </template>

                    <div class="collapse-body">
                      <el-upload
                        class="collapse-upload"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="collapse-upload-text">Drop file here or <em>click to upload</em></div>
                        <div class="collapse-upload-tip" slot="tip">
                          <i>* Please ensure that headers are in proper format</i>
                        </div>
                      </el-upload>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Students',
  data () {
    return {
      activeNameStudent: '',
      activeNameCourse: '',
      studentForm: {
        firstName: '',
        lastName: '',
        email: '',
        nric: '',
        courseCode: '',
        section: '',
        team: '',
        metricNumber: ''
      },
      courseForm: {
        courseCode: '',
        courseName: '',
        description: '',
        nummOfSections: 1
      },
      fileList: []
    }
  },
  created () {
    if (this.$route.params.action === 'newCourse') {
      this.activeNameCourse = 'course_manual'
    }
  },
  methods: {
    handlePreview () {
      console.log('upload preview')
    },
    handleRemove () {
      console.log('upload remove')
    },
    addStudent () {
      console.log('add student')
      this.$notify({
        title: 'Warning',
        message: 'This is a prototype, button function "addStudent" is not mapped yet.',
        type: 'warning'
      })
    },
    resetStudent () {
      console.log('reset student')
      this.studentForm = {
        firstName: '',
        lastName: '',
        email: '',
        nric: '',
        courseCode: '',
        section: '',
        team: '',
        metricNumber: ''
      }
      this.$notify.info({
        title: 'Info',
        message: 'Add Student form has be cleared.',
      })
    },
    addCourse () {
      console.log('add course')
      this.$notify({
        title: 'Warning',
        message: 'This is a prototype, function "addCourse" is not mapped yet.',
        type: 'warning'
      })
    },
    resetCourse () {
      console.log('reset course')
      this.courseForm = {
        courseCode: '',
        courseName: '',
        description: '',
        nummOfSections: 1
      }
      this.$notify.info({
        title: 'Info',
        message: 'Add Course form has be cleared.',
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-form {
  padding: 15px;
}
.card-button {
  float: right;
  padding-top: 20px;
}
.collapse-header {
  color: #606266;
  font-size: 20px;
  font-weight: bolder;
  /* padding-top: 10px;
  padding-bottom: 10px; */
}
.highlight:hover {
  color: #409EFF;
}
.collapse-body {
  font-size: 18px;
}
.header-icon {
  color: #303133;
  padding-left: 10px;
}
.inner-card-button {
  height: 200px;
}
/* .el-row {
  margin-bottom: 0px;
} */
.wrapper {
  padding-top: 30px;
}
.collapse-upload {
  padding-top: 5px;
}
.collapse-upload-text {
  font-size: 18px;
}
.collapse-upload-tip {
  padding-top: 10px;
  font-size: 15px;
}
em {
  color: #409EFF;
}

</style>
