<template>
  <div class="overview-main">
    <el-row>
      <h1>Overview</h1>
      <el-divider content-position="left"><h2>View Information About Students and Courses</h2></el-divider>
    </el-row>

    <el-card>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card shadow="hover">
            <span>Calendar</span>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card shadow="hover">
            <span>test</span>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12">
          <el-card shadow="hover">
            <p>test</p>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card shadow="hover">
            <p>test</p>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'overview',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
