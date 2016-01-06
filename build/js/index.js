/**
 * Created by lijie on 16/1/6.
 */

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