/**
 * Created by lijie on 15/12/30.
 */




$(document).ready(function(){

    //首页选择目标城市
    $('#selectCity').dropdown();

    //公共菜单点击切换效果
    $('.menu-item').bind('click',function(){
        $(this).addClass('active').parent().siblings().find('a.menu-item').removeClass('active');
    });



});



//城市缓存
var city = $.cookie('selectCity') || 'tj';
console.log(city);

//顶级App
var App = new Vue({
    el: '#App',
    data: {
        selectCity:city
    }
});

App.$watch('selectCity',function(newVal){
    console.log(newVal);
    $.cookie('selectCity',newVal);
    App.$broadcast('changeCity',newVal);

});