<template>
  <div class="navbar-main">
    <el-menu
      :default-active="activeIndex"
      class="navbar"
      mode="horizontal"
      router=true>

      <el-menu-item class="item" index="/overview">
        <i class="el-icon-s-home"></i>
        <span>Home</span>
      </el-menu-item>

      <el-submenu index="/student">
        <template slot="title">
          <i class="el-icon-s-custom item"></i>
          <span class="item">Students</span>
        </template>
        <el-menu-item class="sub-item" index="/student/management">
          <i class="el-icon-s-order"></i>
          <span>Management</span>
        </el-menu-item>
        <el-menu-item class="sub-item" index="/student/analytics">
          <i class="el-icon-s-data"></i>
          <span>Analytics</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="/course">
        <template slot="title">
          <i class="el-icon-s-management item"></i>
          <span class="item">Courses</span>
        </template>
        <el-menu-item class="sub-item" index="/course/management">
          <i class="el-icon-s-order"></i>
          <span>Management</span>
        </el-menu-item>
        <el-menu-item class="sub-item" index="/course/analytics">
          <i class="el-icon-s-data"></i>
          <span>Analytics</span>
        </el-menu-item>
      </el-submenu>

      <el-menu-item class="item" index="/bootstrap">
        <i class="el-icon-circle-plus"></i>
        <span>Bootstrap</span>
      </el-menu-item>

      <el-submenu class="right">
        <template slot="title">
          <i class="el-icon-more"></i>
        </template>
        <el-menu-item class="sub-item" index="/profile">
          <i class="el-icon-user-solid"></i>
          <span>Profile</span>
        </el-menu-item>
        <el-menu-item class="sub-item" index="/">
          <i class="el-icon-warning"></i>
          <span>Sign Out</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      activeIndex: '/'
    }
  },
  created () {
    this.$router.push({
      path: this.activeIndex
    })
  },
  methods: {}
}
</script>>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  text-align: center;
}
.item {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 20px;
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
</style>
