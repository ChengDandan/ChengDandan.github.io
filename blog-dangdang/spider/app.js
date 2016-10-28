var express = require('express');
var app = express();
var url =require('url');
var fs =require('fs');
var common = require('./common');
var bookType = common.bookType;


// 网络爬虫
var crawler = require('crawler');
var c = new crawler({
    maxConnections: 10,
    forceUTF8: true,
    incomingEncoding: 'gb2312'
});


bookType.forEach(function(item) {
    // console.log(item.id);
    // console.log(item.base_url);
    // console.log(item.page_count);
    // console.log(item.name);
    loadData(item.id, item.base_url, item.page_count);


});

function loadData(id, base_url, page_count) {
    var page = 1;
    var arr = [];
    getData(base_url,page);

    function getData(url, count) {

        c.queue([{
            uri: url + count,
            callback: function(error, result, $) {
                // console.log(result.uri);
                $('.bang_list li').each(function(index, li) {
                    var obj = {};
                    obj.img = $(li).find('.pic a img').attr('src').trim();
                    obj.title = $(li).find('.name').text();
                    obj.author = $(li).find('.publisher_info').eq(0).text();
                    obj.publister = $(li).find('.publisher_info').eq(1).find('a').text();
                    obj.publist_time = $(li).find('.publisher_info').eq(1).find('span').text();
                    obj.link = $(li).find('.pic a').attr('href');
                    obj.price = $(li).find('.price .price_n').text();
                    arr.push(obj);
                });
                if(count<=page_count){
                  getData(url,count+1);
                }else{
                  // console.log(arr);
                  fs.writeFileSync(`./data/book_${id}.json`,JSON.stringify(arr));
                  console.log('获取数据成功');
                }
            }

        }]);


    }
}

app.listen(3000, function() {
    console.log('服务器运行于3000端口.');
});
