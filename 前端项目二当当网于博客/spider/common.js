/**
 * 书记分类数据
 * 数据说明
 * id:   分类
 * name: 分类名字
 * base_url:根地址
 * page_count: 获取数据的页数
 * @type {Array}
 */
const bookType =[{
  id:"ertong",
  name:"儿童",
  base_url:"http://bang.dangdang.com/books/newhotsales/01.41.00.00.00.00-24hours-0-0-1-",
  page_count:3,
},{
  id:"dongman",
  name:"动漫",
  base_url:"http://bang.dangdang.com/books/newhotsales/01.09.00.00.00.00-24hours-0-0-1-",
  page_count:3,
},{
  id:"lishi",
  name:"历史",
  base_url:"http://bang.dangdang.com/books/newhotsales/01.36.00.00.00.00-24hours-0-0-1-",
  page_count:3,
},{
  id:"qingchunwenxue",
  name:"青春文学",
  base_url:"http://bang.dangdang.com/books/newhotsales/01.01.00.00.00.00-24hours-0-0-1-",
  page_count:3,
}
];
module.exports={
  bookType:bookType
};
