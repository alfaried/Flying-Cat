<template>
  <div class="course-management-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Course Management</h1>
      <el-divider content-position="left"><h2>{{ "View & Edit Course Information" }}</h2></el-divider>
    </el-row>

    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card shadow="hover" class="inner-card">
            <el-calendar>
              <template
                slot="dateCell"
                slot-scope="{date, data}">
                <p :class="data.isSelected ? 'is-selected' : ''">
                  {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
                </p>
              </template>
            </el-calendar>
          </el-card>
        </el-col>

        <el-col :span="16">
          <el-card shadow="hover" class="inner-card">
            <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
              <el-tab-pane v-for="course in courseList" :key="course.label" :label="course.label">
                <el-card shadow="hover">
                  <div class="card-header" slot="header">
                    <span>{{ course.title }}</span>
                  </div>
                  <div class="card-body">
                    <el-form :v-model="courseForm" ref="courseForm" class="card-form" label-position="top">
                      <el-row :gutter="20">
                        <el-col :span="6">
                          <el-form-item label="Course Code">
                            <el-input v-model="course.courseCode"/>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="Course Name">
                            <el-input v-model="course.courseName"/>
                          </el-form-item>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item label="Venue">
                            <el-input v-model="course.venue"/>
                          </el-form-item>
                        </el-col>
                      </el-row>

                      <el-row :gutter="20">
                        <el-col :span="6">
                          <el-form-item label="Number of Teams">
                            <el-input v-model="courseForm.teamPax" placeholder="Select section"/>
                          </el-form-item>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item label="Number of Students">
                            <el-input v-model="courseForm.studentPax" placeholder="Select section"/>
                          </el-form-item>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item label="Section">
                            <el-select v-model="courseForm.section" @change="handleSelect(courseForm.section)">
                              <el-option
                                v-for="section in course.classes"
                                :key="section.section"
                                :label="section.section"
                                :value="section.teamPax + '-' + section.studentPax">
                              </el-option>
                            </el-select>
                          </el-form-item>
                        </el-col>
                      </el-row>

                      <el-row :gutter="20">
                        <el-col :span="24">
                          <el-form-item label="Course Description">
                            <el-input v-model="course.courseDesc" type="textarea"/>
                          </el-form-item>
                        </el-col>
                      </el-row>

                      <el-row :gutter="20">
                        <el-col :span="24">
                          <el-form-item class="card-button">
                            <el-button icon="el-icon-edit" type="primary" @click="update" plain>Update</el-button>
                            <el-button icon="el-icon-refresh" type="warning" @click="reset" plain>Reset</el-button>
                          </el-form-item>
                        </el-col>
                      </el-row>
                    </el-form>
                  </div>
                </el-card>
              </el-tab-pane>
              <el-tab-pane label="">
                <template slot="label">
                  <i class="el-icon-circle-plus-outline tab-add"/>
                </template>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { courseList } from './courseInfo.js'

export default {
  name: 'Course_Management',
  data () {
    return {
      activeTab: '',
      courseList: [],
      courseForm: {
        teamPax: '',
        studentPax: '',
        section: ''
      }
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.courseList = courseList
    },
    handleSelect (val) {
      this.courseForm.teamPax = val.split('-')[0]
      this.courseForm.studentPax = val.split('-')[1]
    },
    handleClick (tab, event) {
      if (this.courseList.length === parseInt(tab.index)) {
        this.$confirm('Add new course?', 'Confirm', {
          confirmButtonText: 'Yes',
          cancelButtonText: 'Cancel'
        }).then(() => {
          this.$activeNavBarIndex = '/bootstrap/new'
          this.$router.push({
            name: 'Bootstrap',
            params: { action: 'newCourse' }
          })
        }).catch(() => {
          this.activeTab = '0'
        })
      }
    },
    update () {
      console.log('Update Course Info')
      this.$notify({
        title: 'Warning',
        message: 'This is a prototype, button function "updateCourseInfo" is not mapped yet.',
        type: 'warning'
      })
    },
    reset () {
      this.fetchData()
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
  float: left;
  padding-top: 20px;
  padding-bottom: 32px;
}
.tab-add {
  margin-top: 10px;
  color: #67C23A;
  font-size: 20px;
}
</style>
