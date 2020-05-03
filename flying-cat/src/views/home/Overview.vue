<template>
  <div class="overview-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Overview</h1>
      <el-divider content-position="left"><h2>View Information About Students and Courses</h2></el-divider>
    </el-row>

    <el-card>
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="24">
          <el-card shadow="hover" class="inner-card">
            TO-DO: Progress Bar
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="12">
          <el-card shadow="hover" class="inner-card">
            <span>TO-DO: Students</span>
          </el-card>
        </el-col>

        <el-col :span="12" style="margin-bottom: 20px;">
          <el-card shadow="hover" class="inner-card">
            <span>TO-DO: Courses</span>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12">
          <el-card shadow="hover" class="inner-card">
            <span>TO-DO: Servers</span>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card shadow="hover" class="inner-card">
            <span>TO-DO: Trailheads</span>
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
