// 配置路由信息
var app=angular.module('app',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'./asserts/tpl/shouYe.html',
    controller:''
  })
  .when('/dangdang',{
    templateUrl:'./asserts/tpl/dangdang.html',
    controller:'bookController'
  })
  .when('/boke',{
    templateUrl:'./asserts/tpl/boke.html',
    controller:''
    // controller:'bookController'
  })
  .when('/tianqi',{
    templateUrl:'./asserts/tpl/tianqi.html',
    controller:''
  })
  .when('/book_list/:id',{
    templateUrl:'./asserts/tpl/bookList.html',
    controller:'bookListController'
  });
}]);
