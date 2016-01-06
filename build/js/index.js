/**
 * Created by lijie on 16/1/6.
 */

//增加动画指令
Vue.directive('my-transition',{
    bind: function() {

        var expression = this.expression ||'jiggle';

        $(this.el).bind({
            mouseenter:function () {
                $(this).addClass(expression + '-enter');
            },
            mouseout:function () {
                $(this).removeClass(expression + '-enter');
            }

        });
    }
});


//轮播图
var homeBanner = new Vue({
    el:'#HomeBanner',
    data: {
        banners:[]
    }
});

//热卖产品
var hotSaleProduct = new Vue({
    el: '#hotSaleProduct',
    data: {
        hotProducts:''
    }
});

hotSaleProduct.$http.get('/gansu/build/data/hotProduct.json', function(data) {
    this.hotProducts=data;
}).error(function(data, status, request) {
    console.log('fail' + status + "," + request);
});



//超值促销
var promotionProduct = new Vue({
    el: '#promotionProduct',
    data: {
        promotionProducts:''
    }
});

promotionProduct.$http.get('/gansu/build/data/promotionProducts.json', function(data) {
    this.promotionProducts=data;
}).error(function(data, status, request) {
    console.log('fail' + status + "," + request);
});







