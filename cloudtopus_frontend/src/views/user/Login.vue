<template>
  <div class="login-main">
    <el-card class="card-login inner-card">
      <div class="card-login-header" slot="header">
        <el-row>
          <span class="title">Cloudtopus</span>
          <i class="extra">V1.5</i>
        </el-row>
        <el-row>
          <span class="subtitle">Cloud Management System</span>
        </el-row>
      </div>
      <div class="card-login-body">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="card-form">
          <el-row>
            <el-col :span="24">
              <el-form-item label="Username:" prop="username">
                <el-input v-model="loginForm.username"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24">
              <el-form-item label="Password:" prop="password">
                <el-input v-model="loginForm.password" type="password"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24">
              <el-form-item label="">
                <el-button class="card-login-button" icon="el-icon-success" type="primary" @click="login" plain>Login</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      rules: {
        password: [
          { required: true, message: 'Please input username', trigger: 'change' }
        ],
        username: [
          { required: true, message: 'Please input password', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
            text: 'Loading Records...',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })
          if (this.loginForm.username === 'admin' && this.loginForm.password === 'admin') {
            setTimeout(() => {
              loading.close()
            }, 1500)
            this.$showNavBar = true
            this.$activeNavBarIndex = '/overview'

            // Change background back to white
            document.body.style.background = '#FFFFFF'

            this.$router.push({
              path: '/overview'
            })
          } else {
            this.$notify({
              title: 'Warning',
              dangerouslyUseHTMLString: true,
              message: 'This is a prototype, use username: <b>admin</b> and password: <b>admin</b> to access the system.',
              type: 'warning'
            })
          }
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-login {
  height: 450px;
  width: 550px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -250px -275px;
  border-radius: 25px;
  opacity: 0.85;
}
.card-login:hover {
  opacity: 1;
}
.card-login-header {
  text-align: center;
}
.card-login-body {
  font-size: 20px;
}
.card-login-button {
  position: relative;
  left: 50%;
  top: 50%;
  margin: -10%;
}
.title {
  font-size: 30px;
  font-weight: bolder;
}
.subtitle {
  font-size: 20px;
  font-weight: bolder;
  color: #606266;
}
.el-row {
  margin: 10px;
}
.extra {
  padding-left: 2.5px;
}
</style>
