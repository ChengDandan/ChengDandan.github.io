var txt = document.querySelector("#txt");
var list = document.querySelector(".list");

var data = [{
    name: '红米Note 4',
    img: 'http://i8.mifile.cn/v1/a1/65981365-72b0-d254-c4fb-e20225f10e4f.jpg',
    img2: 'http://c1.mifile.cn/f/i/f/mishop/iic/xp.png',
    brief: 'Helio X20 十核旗舰处理器 / 全金属一体化机身 / 4100mAh 大电量',
    price: '899元 起',
    englishName: 'hongminote4'
}, {
    name: '红米Pro',
    img: 'http://i8.mifile.cn/v1/a1/18234d8c-0026-9b84-d9df-fe483de6079e.jpg',
    brief: '硬件级实时背景虚化 / Helio X20 十核旗舰处理 / 5.5” OLED 超鲜艳屏幕 / 拉丝全金属机身',
    price: '1499元 起',
    englishName: 'hongmipro'
}, {
    name: '红米手机3S',
    img: 'http://i8.mifile.cn/v1/a1/517db742-917d-d2ef-5953-066c2c2f6625.jpg',
    brief: '指纹识别 / 全网通双卡双待 / 金属机身 / 4100mAh大电池',
    price: '699元 起',
    englishName: 'hongmishouji3s'
}, {
    name: '红米Note 3',
    img: 'http://i1.mifile.cn/v1/a1/T1VNJjBsdT1RXrhCrK.jpg',
    img2: 'http://c1.mifile.cn/f/i/f/mishop/iic/d100.png',
    brief: '【9.22早10点开售！】金属机身 / 指纹识别 / 4050mAh大电池 / 5.5英寸全高清屏',
    price: '799元 起',
    englishName: 'hongminote3'
}, {
    name: '小米Max全网通',
    img: 'http://i8.mifile.cn/v1/a1/T1XSE_B5x_1RXrhCrK.jpg',
    img2: 'http://c1.mifile.cn/f/i/f/mishop/iic/st.png',
    brief: '6.44"大屏黄金尺寸 / 4850mAh 大电量 / 指纹识别 / 2.5D玻璃',
    price: '1299元 起',
    englishName: 'xiaomimaxquanwangtong'
}, {
    name: '小米平板2',
    img: 'http://i1.mifile.cn/v1/a1/T1RXWgBsCT1RXrhCrK.jpg',
    brief: '全金属机身 / 7.9英寸视网膜屏幕 / 800万像素相机 / 6190mAh大电池 / 支持5V/2A快充',
    price: '999元 起',
    englishName: 'xiaomipingban2'
}, {
    name: '分体电视',
    img: 'http://i1.mifile.cn/v1/a1/T1H0K_ByKv1RXrhCrK.jpg',
    brief: '全金属轻薄机身 / 次世代分体电视',
    price: '3999元 起',
    englishName: 'fentidianshi'
}, {
    name: '小米电视3S 65英寸 曲面',
    img: 'http://i8.mifile.cn/v1/a1/T18cEjBsVT1RXrhCrK.jpg',
    brief: '原装进口三星超薄真4K曲面屏 / 金属机身薄至5.9mm / 最美的小米电视',
    price: '8999元',
    englishName: 'xiaomidianshi3s'
}, {
    name: '小米盒子3',
    img: 'http://i1.mifile.cn/v1/a1/T1YKC_BC_v1RXrhCrK.jpg',
    brief: '全新升级64位 4K网络机顶盒 / 标配小米蓝牙语音体感遥控器',
    price: '249元',
    englishName: 'xiaomihezi'
}];

// 初始化list控件
function initCtrl(data) {
    var strHtml = '';
    data.forEach(function(item) {
        if (item.hasOwnProperty('img2')) {
            strHtml += '<div class="section"><div class="J_linksign-customize"><div class="item"><div class="img"><img class="ico lazy" data-src="' + item.img + '"src="' + item.img + '"style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"><img class="tag lazy" src="' + item.img2 + '"></div><div class="info"><div class="name"><p>' + item.name + '</p></div><div class="brief"><p>' + item.brief + '</p></div><div class="price"><p>' + item.price + '</p></div></div></div></div></div>';
        } else {
            strHtml += '<div class="section"><div class="J_linksign-customize"><div class="item"><div class="img"><img class="ico lazy" data-src="' + item.img + '"src="' + item.img + '"style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"></div><div class="info"><div class="name"><p>' + item.name + '</p></div><div class="brief"><p>' + item.brief + '</p></div><div class="price"><p>' + item.price + '</p></div></div></div></div></div>';
        }
    });
    list.innerHTML = strHtml;
}
initCtrl(data);

txt.onkeyup = function(e) {
    var str = txt.value;
    var requst = data.filter(function(item) {
        if (item.name.toLowerCase().indexOf(str.toLowerCase())>-1 ||
            item.englishName.toLowerCase().indexOf(str.toLowerCase())>-1) {
            return item;
        }
    });
    initCtrl(requst);
};
