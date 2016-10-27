// 配置路由信息
var app=angular.module('app',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'./asserts/tpl/shouYe.html',
    controller:''
  })
  .when('/dangdang',{
    templateUrl:'./tpl/dangdang.html',
    controller:''
  })
  .when('/boke',{
    templateUrl:'./tpl/boke.html',
    controller:''
    // controller:'bookController'
  })
  .when('/tianqi',{
    templateUrl:'./tpl/tianqi.html',
    controller:''
  })
  // .when('/book_list/:id',{
  //   templateUrl:'./assets/tpl/book_list.html',
  //   controller:'bookListController'
  // })
  .otherwise({
    redirectTo:'/'
  });
}]);
