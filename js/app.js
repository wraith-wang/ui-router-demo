/**
 * mian controller
 * @authors wangdongdong (469772256@qq.com)
 * @date    2016-08-11 10:39:24
 * @version $Id$
 */

/**
*  Module
*
* Description
*/
var app = angular.module('myApp', ['ui.router', 'oc.lazyLoad']);

app.controller('mainCtrl', function($scope, $state) {
  $scope.aaa = function(state) {
    $state.go(state);
  };

  $scope.bbb = "indexPage";
});