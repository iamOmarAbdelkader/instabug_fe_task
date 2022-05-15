import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
import PerformancePageComponent from './pages/performance-page.vue';
import NotFoundPage from './pages/not-found-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import FilterEmployeesComponent from './components/vue-components/filter-employees.vue';
import store from './store';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
]).config(['$ngVueProvider', ($ngVueProvider) => {
  $ngVueProvider.setRootVueInstanceProps({
    store: store,
  });
}]);

angular.module('appModule').directive('vPerformancePage', ['createVueComponent', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
}]);

angular.module('appModule').directive('vPerformanceChart', ['createVueComponent', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
}]);

angular.module('appModule').directive('vFilterEmployees', ['createVueComponent', (createVueComponent) => {
  return createVueComponent(Vue.component('filterEmployeesComponent', FilterEmployeesComponent));
}]);

angular.module('appModule').directive('vNotFoundPage', ['createVueComponent', (createVueComponent) => {
  return createVueComponent(Vue.component('notFoundPageComponent', NotFoundPage));
}]);
