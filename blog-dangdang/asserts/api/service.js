// 创建一个公共的数据调用服务
app.factory('commonService',['$http',function($http){
  var service={};
  service.getData =function(type,callback){
    $http({
      url:'/前端项目二当当网于博客/spider/data/book_'+type+'.json',
      method:'get'
    })
    .then(function(res){
       console.log('获取数据成功');
       callback(res);
    },function(err){
      console.log(err);
    });
  };
  return service;
}]);
