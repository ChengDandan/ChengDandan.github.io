var fs =require('fs');
app.controller('bookListController',['$scope','$routeParams',function($scope,$routeParams){
console.log($routeParams.id);

$scope.arr = JSON.parse(fs.readFileSync(`./spider/data/book_{$routeParams.id}.json`).toString()) ;

}]);
