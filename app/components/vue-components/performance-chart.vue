<template>
  <div class="c-chart__container">
    <v-chart ref="chart" :option="chartOptions" />
  </div>
</template>

<script>
import moment from "moment";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import { mapGetters } from "vuex";
import { TYPES } from '../../store/modules/team-performane'


use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
]);

export default {
  name: "PerformanceChartComponent",

  components: {
    VChart,
  },
  data() {
    return {
    };
  },
  computed: {
    initOptions() {
      return {
        width: "auto",
        height: "300px",
      };
    },
    ...mapGetters({chartData:TYPES.getters.DATA}),
    chartOptions() {
      return {
        title: {
          text: "Team Performance Index",
          left: "center",
        },
        tooltip: {
          trigger: 'axis',
          transitionDuration: 0,
          confine: false,
          hideDelay: 0,
          padding: 0,
        },
        grid: {
          left: "30px",
          right: "12px",
          bottom: "2px",
          top: "6px",
          containLabel: true,
        },
         visualMap: {
          show: true,
          dimension: 1,
          top: 10,
          right: 10,
          pieces: [
            {
              lte: 50,
              gte:0,
              color: 'red',
              label:"0-50"
            },
            {
              gt: 50,
              lte: 80,
              color: 'orange',
              label:"50-80",
            },
            {
              gt: 80,
              lte:100,
              color: 'green',
              label:"80-100"
            },
          ]
        },
        xAxis: {
          type: "category",
          showGrid: false,
          data: this.xAxisData,
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 11,
          },
        },
        yAxis: {
          axisLabel: { show: true },
          axisTick: { show: true },
          splitLine: { show: true },
        },
        series: [
          {
            data: this.yAxisData,
            type: "line",
            symbol: "circle",
            symbolSize: 2,
            cursor: "default",
            lineStyle: {
              width: 2,
            },
          },
        ],
      };
    },

    xAxisData() {
      console.log("x",this.chartData.map((item) => this.formatDate(item.date_ms)))
      return this.chartData.map((item) => this.formatDate(item.date_ms));
    },

    yAxisData() {
      console.log("y",this.chartData.map((item) => +item.performance * 100))
      return this.chartData.map((item) => +item.performance * 100);
    },
  },

  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },
  },
};
</script>
