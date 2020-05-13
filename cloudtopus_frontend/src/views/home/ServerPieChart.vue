<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
import { serverList } from '../server/serverInfo.js'
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
      var healthyCount = 0
      var downCount = 0
      serverList.forEach(serverCourseInfo => {
        this.totalCount += serverCourseInfo.data.length

        serverCourseInfo.data.forEach(serverInfo => {
          if (serverInfo.applicationStatus === 'Healthy') {
            healthyCount += 1
          }
          if (serverInfo.applicationStatus === 'Down') {
            downCount += 1
          }
        })
      })
      this.dataset = [
        {
          name: 'Healthy',
          value: healthyCount,
          itemStyle: { color: '#67C23A' }
        },
        {
          name: 'Down',
          value: downCount,
          itemStyle: { color: '#F56C6C' }
        }
      ]
    },
    initChart () {
      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.setOption({
        title: {
          text: this.totalCount + ' Deployed',
          textStyle: {
            color: '#606266',
            fontWeight: 'bold',
            fontSize: 20
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
          data: ['Healthy', 'Down']
        },
        calculable: true,
        series: [
          {
            name: 'Server Count',
            type: 'pie',
            radius: ['50%', '80%'],
            center: ['50%', '50%'],
            animationEasing: 'cubicInOut',
            animationDuration: 500,
            data: this.dataset,
            label: {
              formatter: '{c} servers'
            }
          }
        ]
      })
    }
  }
}
</script>
