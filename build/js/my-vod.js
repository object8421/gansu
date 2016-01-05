/**
 * Created by lijie on 15/12/31.
 */



$(document).ready(function(){

    //我的广电页面,商品大分类交互效果
    $('.tab-item').unbind('click.my-vod').bind('click.my-vod',function(){

        $(this).siblings('.tab-item').removeClass('active').find('span').css('display','block');

        $(this).addClass('active').find('span').css('display','none');

        $(this).prev().find('span').css('display','none');

    });

    //我的广电页面,产品小分类排序交互
    $('.sort-type .sort-item').unbind('click.sort').bind('click.sort',function(){

        $(this).addClass('active').siblings().removeClass('active');

    });

    //我的广电页面,产品图片交互效果
    $('.vod-product-item').bind({
        mouseenter:function(){
            $(this).find('img').css('opacity',0.6).transition('set looping').transition('bounce', '2000ms');
        },
        mouseleave:function(){
            $(this).find('img').css('opacity',1.0).transition('remove looping');
        }
    });

});

//我的广电页面
var myVod = new Vue({
    el: '#my-vod',
    data:{
        productsCondition:{
            'type':'hd',
            'sort':'default'
        },
        items:[
            {cover:'./img/av1.jpg',title:'直播88高清版',info:'直播88加33套高清'},
            {cover:'./img/av2.jpg',title:'直播88高清版',info:'直播88加33套高清'},
            {cover:'./img/av3.jpg',title:'直播88高清版',info:'直播88加33套高清'},
            {cover:'./img/av4.jpg',title:'直播88高清版',info:'直播88加33套高清'},
            {cover:'./img/av5.jpg',title:'直播88高清版',info:'直播88加33套高清'},
            {cover:'./img/av6.jpg',title:'直播88高清版',info:'直播88加33套高清'},
            {cover:'./img/av7.jpg',title:'直播88高清版',info:'直播88加33套高清'},
            {cover:'./img/av9.jpg',title:'直播88高清版',info:'直播88加33套高清'}
        ]
    },
    methods:{
        changeType: function(typeStr){
            this.productsCondition['type'] = typeStr;
            console.log(this.productsCondition);
        },
        changeSort: function (sortStr) {
            this.productsCondition['sort'] = sortStr;
        }
    }
});
