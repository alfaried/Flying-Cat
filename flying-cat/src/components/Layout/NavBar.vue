<template>
  <div class="navbar-main">
    <el-menu
      v-show="showNavBar"
      :default-active="activeIndex"
      class="navbar"
      mode="horizontal"
      :router="true"
      background-color="#303133"
      text-color="#FFFFFF"
      active-text-color="#ffd04b"
      @select="handleSelect">

      <el-menu-item class="item" index="/overview">
        <i class="el-icon-s-home white"></i>
        <span>Home</span>
      </el-menu-item>

      <el-submenu index="/student">
        <template slot="title">
          <i class="el-icon-s-custom item white"></i>
          <span class="item">Students</span>
        </template>
        <el-menu-item class="sub-item" index="/student/management">
          <i class="el-icon-s-order white sub-item"></i>
          <span class="sub-item">Management</span>
        </el-menu-item>
        <el-menu-item class="sub-item" index="/student/analytics">
          <i class="el-icon-s-data white"></i>
          <span>Analytics</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="/course">
        <template slot="title">
          <i class="el-icon-s-management item white"></i>
          <span class="item">Courses</span>
        </template>
        <el-menu-item class="sub-item" index="/course/management">
          <i class="el-icon-s-order white"></i>
          <span>Management</span>
        </el-menu-item>
        <el-menu-item class="sub-item" index="/course/analytics">
          <i class="el-icon-s-data white"></i>
          <span>Analytics</span>
        </el-menu-item>
      </el-submenu>

      <el-menu-item class="item" index="/server/management">
        <i class="el-icon-s-platform white"></i>
        <span>Servers</span>
      </el-menu-item>

      <el-menu-item class="item" index="/trailhead/management" disabled>
        <i class="el-icon-s-opportunity white"></i>
        <span>Trailheads</span>
      </el-menu-item>

      <el-menu-item class="item" index="/bootstrap/new">
        <i class="el-icon-circle-plus white"></i>
        <span>Bootstrap</span>
      </el-menu-item>

      <el-submenu class="right" index="/">
        <template slot="title">
          <i class="el-icon-more white"></i>
        </template>
        <el-menu-item class="sub-item" index="/profile">
          <i class="el-icon-user-solid white"></i>
          <span>Profile</span>
        </el-menu-item>
        <el-menu-item class="sub-item" index="">
          <i class="el-icon-warning sign-out"></i>
          <span class="sign-out">Sign Out</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>>

<script>
import image from '@/assets/New_Lands.jpg'

export default {
  name: 'NavBar',
  data () {
    return {
      activeIndex: '/',
      showNavBar: false
    }
  },
  created () {
    this.$router.push({
      path: this.activeIndex
    })
  },
  methods: {
    handleSelect (key, keyPath) {
      if (key === '') {
        this.$showNavBar = false

        // Change background back to image
        document.body.style.background = 'url(' + image + ')'
        document.body.style.backgroundSize = 'cover'

        this.$router.push({
          path: '/'
        })
      }
    }
  },
  watch: {
    $showNavBar () {
      this.showNavBar = this.$showNavBar
    },
    $activeNavBarIndex () {
      console.log(this.$activeNavBarIndex)
      this.activeIndex = this.$activeNavBarIndex
    }
  }
}
</script>>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  text-align: center;
  width: 100%;
  /* background: rgb(204, 204, 204); */
}
.item {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 18px;
}
.sub-item {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 15px;
}
.left {
  float: left;
}
.right {
  float: right;
}
.button {
  margin: 10px;
}
.sign-out {
  color: #F56C6C;
}
.white {
  color: #FFFFFF;
}
</style>
