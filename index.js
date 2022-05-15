import 'angular';
import '@uirouter/angularjs';

import './app/styles/main.scss';
import './app/app.module.js';
import './app/services/employees.service';
import './app/components/employees-list/employees-list.component';

import './app/pages/home-page/home-page.controller';
import './app/app.routes.js';

import Vue from 'vue';
Vue.config.productionTip = false;

import { worker } from './app/mocks/browser';

if (process.env.IS_TEST_ENV === 'true') {
  worker.start();
}
