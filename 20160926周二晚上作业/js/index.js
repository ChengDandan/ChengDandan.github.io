function doSearch(){

  var cityname =document.querySelector('#cityname').value;
  getWeatherInfo(cityname);
}
// 获取cityCode
function getWeatherInfo(cityName){
  $.ajax({
    url:"http://apis.baidu.com/apistore/weatherservice/cityinfo",
    data:{cityname:cityName},
    method:"get",
    headers:{
      apikey:"64a2f41e141acc3822cc08e05a7853ae",

    },
    dataType:'json',
    success:function(cityInfo){
      // console.log(cityInfo.retData['cityCode']);
    // return(cityInfo.retData['cityCode']);

    getCityCodeAndCityName((cityInfo.retData['cityCode']),(cityInfo.retData['cityName']));


    },
    error:function(err){
      console.log(err);

    }
  });

}

// 获取未来四天 ，历史七天 以及今天的天气信息
function getCityCodeAndCityName(cityCode,cityName){
$.ajax({
  url:"http://apis.baidu.com/apistore/weatherservice/recentweathers",
  method:"get",
  data:{cityname:cityName,cityid:cityCode},
  headers:{
    apikey:"64a2f41e141acc3822cc08e05a7853ae",
  },
  dataType:'json',
  success:function(data){
      // console.log(data.retData);
      // 未来天气
      var forecastCityArr =data.retData['forecast'];
    var arr=[];
    forecastCityArr.forEach(function(item){
      // console.log(item);
      var obj ={};

      obj.date=item.date;
      // console.log(obj.date);
      obj.week=item.week;
      obj.hightemp=item.hightemp;
      obj.lowtemp =item.lowtemp;
      obj.fengli=item.fengli;
      obj.fengxiang=item.fengxiang;
      obj.type=item.type;
      arr.push(obj);

    });
    var arr1 =[];
    for(var obj=arr.length-1;obj>=0;obj--){
      arr1.push(arr[obj]);

    }
    console.log(arr1);



// 今天天气查询
    var todayCityArr =data.retData['today'];
  // console.log(todayCityArr);
    var obj ={};

    obj.date=todayCityArr.date;
    console.log(obj.date);
    obj.week=todayCityArr.week;
    obj.hightemp=todayCityArr.hightemp;
    obj.lowtemp =todayCityArr.lowtemp;
    obj.fengli=todayCityArr.fengli;
    obj.fengxiang=todayCityArr.fengxiang;
    obj.type=todayCityArr.type;
    arr1.push(obj);


    // 历史天气查询
    var historyCityArr =data.retData['history'];


  historyCityArr.forEach(function(item){
    // console.log(item);
    var obj ={};

    obj.date=item.date;
    // console.log(obj.date);
    obj.week=item.week;
    obj.hightemp=item.hightemp;
    obj.lowtemp =item.lowtemp;
    obj.fengli=item.fengli;
    obj.fengxiang=item.fengxiang;
    obj.type=item.type;
    arr1.push(obj);

  });

    console.log(arr1);
    var html =template('text',{list:arr1});
    document.querySelector('#content').innerHTML=html;


  },
  error:function(err){
    console.log(err);
  },

});
}
