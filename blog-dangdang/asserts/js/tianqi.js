getCityCode("合阳");

function doSearch() {
    if (document.querySelector('input').value == '') {
        return;
    }
    getCityCode(document.querySelector('input').value);
}

function getCityCode(aName) {

    $.ajax({
        url: 'http://apis.baidu.com/apistore/weatherservice/cityinfo',
        method: 'get',
        data: {
            cityname: aName
        },
        headers: {
            apikey: 'dcf73b6701aa5c1977781c258abb186c'
        },
        dataType: 'json',
        success: function(res) {
          if (res.errNum==0) {
            cityCode = res.retData["cityCode"];
            getWeather(cityCode, aName);
          }else {
            alert(res.errMsg);
          }

        },
        error: function(error) {
            alert(error);
        }
    });
}

function getWeather(cityCode, cityName) {
  var arr = [];
    $.ajax({
        url: 'http://apis.baidu.com/apistore/weatherservice/recentweathers',
        method: 'get',
        data: {
            cityname: cityName,
            cityid: cityCode
        },
        headers: {
            apikey: 'dcf73b6701aa5c1977781c258abb186c'
        },
        dataType: 'json',
        success: function(res) {
          console.log(res.errMsg);
          if (res.Num==-1) {
            alert(res.errMsg);
          }else {
            document.querySelector('h1').innerText = cityName + "天气状况";
            // var keys = Object.keys(res.retData);
            var forecast = res.retData['forecast'];

            for (var i = forecast.length - 1; i > -1; i--) {
                var wea = {};
                wea.date = "未来第" + (i + 1) + "天";
                wea.day = forecast[i].date;
                wea.fengxiang = forecast[i].fengxiang;
                wea.fengli = forecast[i].fengli;
                wea.hightemp = forecast[i].hightemp;
                wea.lowtemp = forecast[i].lowtemp;
                wea.type = forecast[i].type;
                wea.week = forecast[i].week;
                arr.push(wea);
            }
            todaywea(res.retData['today']);

            function todaywea(today) {
                var wea = {};
                wea.date = "今天";
                wea.day = today.date;
                wea.fengxiang = today.fengxiang;
                wea.fengli = today.fengli;
                wea.hightemp = today.hightemp;
                wea.lowtemp = today.lowtemp;
                wea.type = today.type;
                wea.week = today.week;
                arr.push(wea);
            }
            var history = res.retData['history'];
            var m = 1;
            for (var i = history.length - 1; i > -1; i--) {
                var wea = {};
                wea.date = "过去第" + m + "天";
                m++;
                wea.day = history[i].date;
                wea.fengxiang = history[i].fengxiang;
                wea.fengli = history[i].fengli;
                wea.hightemp = history[i].hightemp;
                wea.lowtemp = history[i].lowtemp;
                wea.type = history[i].type;
                wea.week = history[i].week;
                arr.push(wea);
            }
            var html = template('table', {
                list: arr
            });
            document.querySelector('.container').innerHTML = html;
          }
        },
        error: function(error) {
            alert(error);
        }
    });
}
