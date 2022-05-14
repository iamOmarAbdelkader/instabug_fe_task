<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      [Place filter component here]
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component :chartData="data"/>
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import { mapGetters, mapActions } from "vuex";
import { TYPES } from '../store/modules/team-performane'

export default {
  name: "AboutPageComponent",
  methods:{
    ...mapActions({fetchData:TYPES.actions.FETCH_DATA}),
  },
  computed:{
    ...mapGetters({data:TYPES.getters.DATA}),
  },
  components: {
    PerformanceChartComponent,
  },
  created(){
    this.fetchData();
  },
};
</script>
