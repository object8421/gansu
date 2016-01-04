/**
 * Created by lijie on 15/12/30.
 */



$(document).ready(function(){

    //选择目标城市
    $('#selectCity').dropdown();


    //菜单点击切换
    $('.menu-item').bind('click',function(){
        $(this).addClass('active').parent().siblings().find('a.menu-item').removeClass('active');
    });

    //登录复选框
    $('.ui.checkbox').checkbox();



    //产品页鼠标移动加动画

    $('.product-item').bind('mouseenter',function(){
        $(this).find('img')
            .transition('jiggle')
        ;
    });


});


