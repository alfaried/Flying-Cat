<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
import { skillsList } from '../trailhead/trailheadInfo.js'
require('echarts/theme/macarons')

export default {
  props: {
    profile: {
      type: String
    },
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data () {
    return {
      chart: null
    }
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
    initChart () {
      var dataset = skillsList[this.profile]
      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.setOption({
        title: {
          text: skillsList[this.profile].length + ' Skills',
          textStyle: {
            color: '#606266',
            fontWeight: 'bold',
            fontSize: 25
          },
          left: 'center',
          top: 'middle'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // legend: {
        //   orient: 'vertical',
        //   x: 'left',
        //   data: ['Failed', 'Passed', 'Pending']
        // },
        calculable: true,
        series: [
          {
            name: 'Skills',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '50%'],
            animationEasing: 'cubicInOut',
            animationDuration: 1000,
            data: dataset
          }
        ]
      })
    }
  }
}
</script>
