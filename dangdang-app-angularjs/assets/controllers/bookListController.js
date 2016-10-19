app.controller('bookListController',['$scope','commonService','$routeParams',function($scope,b_service,$routeParams){
  console.log($routeParams.id);
b_service.getData('$routeParams.id',function(res){
  // console.dir(res);
});
}]);
// app.controller('mainController',['$scope','commonService',function($scope,c_service){
//   c_service.getData('ertong',function(res){
//     // console.dir(res);
//   });
//
//   $scope.selectedIndex=0;
//   $scope.linkTo =function(index){
//     $scope.selectedIndex=index;
//   };
//
// }])
