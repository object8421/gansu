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

    //登录记住密码复选框
    $('.ui.checkbox').checkbox();

});

//城市缓存
var city = $.cookie('selectCity') || 'tj';

//更换城市
var App = new Vue({
    el: '#App',
    data: {
        selectCity:city
    },
    watch:{
        selectCity:function(newVal){
            console.log('--------------city has changed to '+newVal+'--------------------');
            this.selectCity = newVal;
            $.cookie('selectCity',newVal);//缓存城市数据
        }
    }
});

