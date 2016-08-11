/**
 * wangdongdong
 * @authors wangdongdong (469772256@qq.com)
 * @date    2016-08-11 10:39:24
 * @version $Id$
 */


angular.module('myApp').config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("home");
  $stateProvider.state("home", {
    url: '/home',
    views: {
      "lazyLoadView": {
        templateUrl: 'page/indexPage.html'
      },
      "aaa": {
        template: "<div>1111111</div>"
      }
    }
  }).state("page1", {
    url: '/page1',
    views: {
      "lazyLoadView": {
        controller: 'page1Ctrl',
        templateUrl: 'page/page1.html'
      }
    },
    resolve: {
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        return $ocLazyLoad.load('js/page1Ctrl.js');
      }]
    }
  }).state("page2", {
    url: '/page2',
    views: {
      "lazyLoadView": {
        controller: 'page2Ctrl',
        templateUrl: 'page/page2.html'
      }
    },
    resolve: {
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        return $ocLazyLoad.load('js/page2Ctrl.js');
      }]
    }
  }).state("page3", {
    url: '/page3',
    views: {
      "lazyLoadView": {
        templateUrl: 'page/page3.html'
      }
    }
  });
});