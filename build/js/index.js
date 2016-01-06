/**
 * Created by lijie on 16/1/6.
 */


//轮播图和登录
var homeBanner = new Vue({

    el:'#HomeBanner',
    data: {
        banners:[

        ]
    }
});


//热卖产品
var hotSaleProduct = new Vue({
    el: '#hotSaleProduct',
    data: {
        cityCode:'',
        items:[
        ]
    },
    events: {
        changeCity:function(data){
            console.log(data);
        }

    }
});

//超值促销




$(document).ready(function(){
    //登录复选框
    $('.ui.checkbox').checkbox();

    //首页 促销产品鼠标移动加动画
    $('.product-item').bind('mouseenter',function(){
        $(this).find('img')
            .transition('jiggle')
        ;
    });
});




