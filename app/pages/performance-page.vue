<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
     <filter-chart-data />
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import FilterChartData from "../components/vue-components/filter-chart-data.vue";
import { mapGetters, mapActions } from "vuex";
import { TYPES } from '../store/modules/team-performane'

export default {
  name: "AboutPageComponent",
  methods:{
    ...mapActions({fetchData:TYPES.actions.FETCH_DATA}),
  },
  components: {
    PerformanceChartComponent,
    FilterChartData,
  },
  created(){
    this.fetchData();
  },
};
</script>
