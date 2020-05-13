<template>
  <div class="Introduction">
    <el-card class="middle">
      <el-row :gutter="20" style="padding-bottom: 20px;">
        <el-col :span="24">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class="el-icon-notebook-1"></i>
              <span>Background</span>
              <el-button v-if="showBackground === true" style="float: right; padding: 5px;" type="warning" plain round @click="accordian('background', 'close')">
                <i class="el-icon-arrow-down"></i>
              </el-button>
              <el-button v-if="showBackground === false" style="float: right; padding: 5px;" plain round @click="accordian('background', 'open')">
                <i class="el-icon-arrow-right"></i>
              </el-button>
            </div>

            <div v-show="showBackground" class="card-body">
              <el-row>
                <el-col :span="24">
                  <p>
                    This presentation demo is based off a previous work done during my Final Year Project.
                    It was initially created within a span of <strong>3 to 4 months</strong>, by a <strong>team of 5</strong> who called themselves <strong>Thunderhead Monkeys</strong>, paying homage to Netflix's Chaos Monkey
                    <em> (a program which randomly terminates instances during production to ensure that engineers implement their services to be resilient to instance failures)</em>.
                  </p>

                  <p>
                    The basis of the initial project work was to create a <strong>Cloud Learning Environment (CLE)</strong> which is broadly categorize to two protion; <strong>(1) Gamification</strong> and <strong>(2) Management</strong>.
                    The former being mainly for the students to conduct their lab exercises, and the latter is for the professors and instructors to view and manage the progress of their students, and this is what my FYP was mainly incharged of - CLE V1.0.
                    In addition, mainly for our client, the integration of external digital learning tools as well.
                  </p>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="padding-bottom: 20px;">
        <el-col :span="24">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class="el-icon-film"></i>
              <span>Introduction</span>
              <el-button v-if="showIntroduction === true" style="float: right; padding: 5px;" type="warning" plain round @click="accordian('introduction', 'close')">
                <i class="el-icon-arrow-down"></i>
              </el-button>
              <el-button v-if="showIntroduction === false" style="float: right; padding: 5px;" plain round @click="accordian('introduction', 'open')">
                <i class="el-icon-arrow-right"></i>
              </el-button>
            </div>

            <div v-show="showIntroduction" class="card-body">
              <el-row>
                <el-col :span="4" style="padding-top: 25px; padding-left: 18px">
                  <div class="image-cropper">
                    <el-image :src="imageRafael" class="image"/>
                  </div>
                </el-col>
                <el-col :span="20">
                  <p>
                    So, this was our real life client, <strong>Professor Rafael J. Barros</strong>, a senior lecturer at <strong>Singapore Management University (SMU)</strong>.
                    He introduced this particular project for the pupose of assisting him (initially) and his fellow instructors, to facilitate learning within his modules, specifically <strong>Enterprise Solution Management (ESM)</strong>.
                  </p>

                  <p>
                    ESM, is essentially a rebranded subject of a module I took during my batch called <strong>Architecture Analysis</strong> that teaches basic system architecture concepts such as layers/zones, firewalls, high availability and fault tolereance.
                    Hence he requires a robust system to assist him in educating his student whilst managing their work progress, which totals up to about 100 to 120 students, the very least.
                  </p>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="padding-bottom: 20px;">
        <el-col :span="24">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class="el-icon-magic-stick"></i>
              <span>Cloudtopus V1.0</span>
              <el-button v-if="showCloudtopus === true" style="float: right; padding: 5px;" type="warning" plain round @click="accordian('cloudtopus', 'close')">
                <i class="el-icon-arrow-down"></i>
              </el-button>
              <el-button v-if="showCloudtopus === false" style="float: right; padding: 5px;" plain round @click="accordian('cloudtopus', 'open')">
                <i class="el-icon-arrow-right"></i>
              </el-button>
            </div>

            <div v-show="showCloudtopus" class="card-body">
              <el-row>
                <el-col :span="24">
                  <p>
                    This is where the Cloud Learning Environment comes in, or as I like to call it, <strong>Cloudtopus</strong>.
                    Apart from the basic management function of students and courses, it's able to integrate and manage cloud servers such as those hosted on <strong>AWS</strong> and specific external digital learning tools such as <strong>Trailhead</strong> by Salesforce.
                    Just for context, our client uses Trailhead to reinforce the learning of the aforementioned concepts that were done in class.
                    Just like <strong>Udemy</strong> or <strong>DataCamp</strong>, users are greeted with quizzes after learning the content and upon completion will garner them points.
                    Upon completion of a series of quizzes, will garner them a badge, and upon collection of multiple badges, will garner them a trail, so on and so forth.
                  </p>

                  <p>
                    Just to reinterate, the client has multiple students and managing their progress via their native <strong>Trailhead Profile Page</strong> is extremely tedious, what more viewing and managing servers hosted on <strong>External AWS Accounts</strong>.
                  </p>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="padding-bottom: 20px;">
        <el-col :span="24">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class="el-icon-cpu"></i>
              <span>Technology</span>
              <el-button v-if="showApplication === true" style="float: right; padding: 5px;" type="warning" plain round @click="accordian('application', 'close')">
                <i class="el-icon-arrow-down"></i>
              </el-button>
              <el-button v-if="showApplication === false" style="float: right; padding: 5px;" plain round @click="accordian('application', 'open')">
                <i class="el-icon-arrow-right"></i>
              </el-button>
            </div>

            <div v-show="showApplication" class="card-body">
              <el-row>
                <el-col :span="24">
                  <p>
                    Just to briefly touch on some of the technologies used in Cloudtopus V1.0. It was initially done fully in <strong style="color: #67C23A;">Python, Django</strong> with both the frontend and backend lumped together into one system.
                    A relational databased was used, <strong style="color: #409EFF;">MySQL</strong>. <strong>Nginx</strong> paired with <strong>Gunicorn</strong> were used to server the static content to the client.
                    Additionally a <strong style="color: #E6A23C;">Webscraper</strong> was used to retrieve the information from the student's Trailhead Profile, and a custom built subsidary application name <strong style="color: #F56C6C;">Trojan</strong> was used to bridge the gap between servers hosted on external AWS accounts and the management system.
                  </p>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="24">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class="el-icon-mobile"></i>
              <span>Cloudtopus V1.5</span>
              <el-button v-if="showMotivation === true" style="float: right; padding: 5px;" type="warning" plain round @click="accordian('motivation', 'close')">
                <i class="el-icon-arrow-down"></i>
              </el-button>
              <el-button v-if="showMotivation === false" style="float: right; padding: 5px;" plain round @click="accordian('motivation', 'open')">
                <i class="el-icon-arrow-right"></i>
              </el-button>
            </div>

            <div v-show="showMotivation" class="card-body">
              <el-row>
                <el-col :span="24">
                  <p>
                    So, for today's presentation, due to the time constraint in rebuilding the entire system, I will mainly be focusing on the <strong>(2) Management</strong> portion and the integration of <strong>External Digital Learning Tools</strong>.
                    The system will also be rebranded to a <strong>Cloud Management System</strong> instead.
                    This time, the frontend system is built using <strong style="color: #67C23A;">Vue.js</strong>, paired with the backend system that is built using <strong style="color: #67C23A;">Python, Django</strong>.
                    A relational database, <strong style="color: #409EFF;">MySQL</strong> is still being used to store the details.
                    Additionally, a similar <strong style="color: #E6A23C;">Webscraper</strong> is used to gather the information from the Trailhead profiles and, obviously, the <strong style="color: #F56C6C;">Trojan</strong> application to gain access to the servers hosted on external AWS accounts.
                  </p>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="24">
                  <el-button type="primary" plain @click="route('login', null)">
                    <span>Go to Web Application</span>
                    <i class="el-icon-right"/>
                  </el-button>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>

  </div>
</template>

<script>
import image from '@/assets/New_Lands.jpg'
import avatar from '@/assets/Rafael.jpeg'
import vue from '@/assets/logo.png'
import python from '@/assets/python.png'

export default {
  name: 'Introduction',
  data () {
    return {
      showBackground: true,
      showIntroduction: false,
      showMotivation: false,
      showApplication: false,
      showCloudtopus: false,
      imageRafael: '',
      technologyImage: []
    }
  },
  created () {
    // Change background back to white
    document.body.style.background = '#FFFFFF'
    this.imageRafael = avatar
    this.technologyImage.push(vue)
    this.technologyImage.push(python)
  },
  methods: {
    accordian (cardName, status) {
      if (status === 'close') {
        this.showBackground = false
        this.showIntroduction = false
        this.showMotivation = false
        this.showApplication = false
        this.showCloudtopus = false
      } else if (status === 'open') {
        if (cardName === 'background') {
          this.showBackground = true
          this.showIntroduction = false
          this.showMotivation = false
          this.showApplication = false
          this.showCloudtopus = false
        }

        if (cardName === 'introduction') {
          this.showBackground = false
          this.showIntroduction = true
          this.showMotivation = false
          this.showApplication = false
          this.showCloudtopus = false
        }

        if (cardName === 'motivation') {
          this.showBackground = false
          this.showIntroduction = false
          this.showMotivation = true
          this.showApplication = false
          this.showCloudtopus = false
        }

        if (cardName === 'application') {
          this.showBackground = false
          this.showIntroduction = false
          this.showMotivation = false
          this.showApplication = true
          this.showCloudtopus = false
        }

        if (cardName === 'cloudtopus') {
          this.showBackground = false
          this.showIntroduction = false
          this.showMotivation = false
          this.showApplication = false
          this.showCloudtopus = true
        }
      }
    },
    route (location, params) {
      if (location === 'login') {
        // Change background back to image
        document.body.style.background = 'url(' + image + ')'
        document.body.style.backgroundSize = 'cover'
        this.$router.push(
          { path: '/login' }
        )
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .middle {
  height: 10px;
  width: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -5px -10px;
  border-radius: 25px;
}
.middle:hover {
  height: 850px;
  width: 1600px;
  margin: -425px -800px;
} */
p {
  font-size: 20px;
  line-height: 35px;
  /* display: flex;
  justify-content: space-between; */
}
.middle {
  height: 850px;
  width: 1600px;
  margin: -425px -800px;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 25px;
}
.image-cropper {
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}
.image {
  display: inline;
  margin: 0 auto;
}
</style>
