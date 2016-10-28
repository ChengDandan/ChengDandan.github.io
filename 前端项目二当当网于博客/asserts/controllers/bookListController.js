
app.controller('bookListController',['$scope','commonService','$routeParams',function($scope,c_service,$routeParams){
console.log($routeParams.id);
console.log($routeParams.name);
c_service.getData($routeParams.id,function(res){
  $scope.data=res.data;
  console.log($scope.data);
});

}]);
