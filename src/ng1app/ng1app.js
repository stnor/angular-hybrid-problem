import * as angular from 'angular';
import uiRouter from "@uirouter/angularjs";
import { upgradeModule } from "@uirouter/angular-hybrid";

import { HelloComponent } from "../app/hello/hello.component";
import { HiComponent } from "../app/hello/hi.component";


const nomp = angular.module('nomp', [
  uiRouter,
  upgradeModule.name
]);

nomp.config(($locationProvider) => {
  "ngInject";
  $locationProvider.html5Mode(true);
})
    .config(($urlMatcherFactoryProvider) => {
      "ngInject";
      $urlMatcherFactoryProvider.strictMode(false)
    })
    .config(($transitionsProvider, $injector) => {
      "ngInject";
      let criteria = {
        to: function (state) {
          return state.default != null;
        }
      };

      $transitionsProvider.onBefore(criteria, function (trans) {
        let substate = trans.to().default;
        if (angular.isString(substate)) {
          return trans.router.stateService.target(substate, trans.targetState().params());
        } else {
          return trans.router.stateService.target($injector.invoke(substate), trans.targetState().params());
        }
      })
    });

nomp.component('ng1App', {
  template: `
  <h1>ng1app ui view</h1>
  <ui-view></ui-view>
  `
});

nomp.component('ng1home', {
  template: `
  <h2>home</h1>
  <a ui-sref="ng1hello">ng1hello</a>
  <a ui-sref="ng2hello">ng2hello</a>
  <a ui-sref="ng1hi">ng1hi</a>
  <a ui-sref="ng2hi">ng2hi</a>
  `
});

nomp.config(($stateProvider) => {
  "ngInject";
  $stateProvider
      .state("home", {
        component: "ng1home",
        url: "/"
      })
});

nomp.config(($stateProvider) => {
  "ngInject";
  $stateProvider
      .state("ng1hello", {
        component: HelloComponent,
        url: "/ng1hello"
      })
});

nomp.config(($stateProvider) => {
  "ngInject";
  $stateProvider
      .state("ng1hi", {
        component: HiComponent,
        url: "/ng1hi"
      })
});



export default nomp;
