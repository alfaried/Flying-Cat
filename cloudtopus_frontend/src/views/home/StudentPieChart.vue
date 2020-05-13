<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
import { studentList } from '../student/studentInfo.js'
require('echarts/theme/macarons')

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '455%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data () {
    return {
      chart: null,
      totalCount: 0,
      dataset: []
    }
  },
  created () {
    this.fetchData()
  },
  mounted () {
    window.addEventListener('resize', this.__resizeHandler)
    this.initChart({})
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHandler)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    fetchData () {
      this.totalCount = studentList.length

      var onlineCount = 0
      var offlineCount = 0
      studentList.forEach(studentInfo => {
        if (studentInfo.status === 'Online') {
          onlineCount += 1
        }
        if (studentInfo.status === 'Offline') {
          offlineCount += 1
        }
      })
      this.dataset = [
        {
          name: 'Online',
          value: onlineCount,
          itemStyle: { color: '#409EFF' }
        },
        {
          name: 'Offline',
          value: offlineCount,
          itemStyle: { color: '#E6A23C' }
        }
      ]
    },
    initChart () {
      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.setOption({
        title: {
          text: this.totalCount,
          textStyle: {
            color: '#606266',
            fontWeight: 'bold',
            fontSize: 40
          },
          left: 'center',
          top: 'middle'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['Online', 'Offline']
        },
        calculable: true,
        series: [
          {
            name: 'Student Count',
            type: 'pie',
            radius: ['50%', '80%'],
            center: ['50%', '50%'],
            animationEasing: 'cubicInOut',
            animationDuration: 500,
            data: this.dataset,
            label: {
              formatter: '{c} students'
            }
          }
        ]
      })
    }
  }
}
</script>
