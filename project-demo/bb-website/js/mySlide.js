;
(function($) {
    $.fn.extend({
        mySlider: function(options) {
            var iset = {
                /*图片容器*/
                imgBox: $(this),
                /*按钮容器*/
                imgIco: $(this),
                /*自动播放*/
                autoPlay: true,
                /*延迟时间*/
                interval: 3000,
                /*速度*/
                speed: 500,
                /*滚动方向  true:左,false:右*/
                direction: true,
                /*当前圆点*/
                active: null
            };
            options = options || {};
            $.extend(iset, options);
            var imgUl = iset.imgBox.find('ul');
            var imgLi = iset.imgBox.find('li');
            var i = 0;
            /* 初始化样式*/
            appendIco = function() {
                /*拷贝图片 实现无缝滚动*/
                imgUl.append(imgLi.eq(0).clone());
                /*添加圆点*/
                for (var j = 0; j < imgLi.length; j++) {
                    var a = '<a href="javascript:;"></a>';
                    $(iset.imgIco).append(a);
                };
                iset.imgIco.find('a').eq(0).addClass(iset.active);
            };
            /*点击事件*/
            var icoClick = function(){
                iset.imgIco.find('a').click(function(){
                    $('.img').css({'-moz-opacity':'0.5','opacity':'0.5'})
                    var index=null;
                    if(!imgUl.is(':animated')){
                        $(this).addClass(iset.active).siblings().removeClass(iset.active);
                        index=$(this).index();
                        i=index;
                        imgUl.stop().animate({
                            left: -index*imgLi.eq(0).width()
                        },iset.speed,function(){
                            $('.img').css({'-moz-opacity':'1','opacity':'1'})
                        });
                    }
                    // $('#tab-parts li').siblings().css('display','none').children().css({'width':'0','height':'0','left':'50%','top':'50%'});
                    // if(index==0){
                    //      $('#tab-parts li').eq(0).stop().fadeIn('slow').children('.tab1-parts1').animate({
                    //         'width':'118px',
                    //         'height':'162px',
                    //         'bottom': '132px',
                    //         'left': '80px'
                    //     },500);
                    //     $('.tab1-parts2').animate({
                    //         'width':'135px',
                    //         'height':'126px',
                    //         'top': '193px',
                    //         'left': '2px'
                    //         },500)
                    //     $('.tab1-parts3').animate({
                    //         'width':'144px',
                    //         'height':'144px',
                    //         'top': '170px',
                    //         'left': '165px',
                    //         },'slow')


                    // }else if(index==1){
                    //     $('#tab-parts li').eq(1).fadeIn('slow').children('.tab2-parts1').animate({
                    //         'width':'311px',
                    //         'height':'188px',
                    //         'top': '262px',
                    //         'left': '-58px'
                    //     },500);
                    //     $('.tab2-parts2').animate({
                    //         'width':'150px',
                    //         'height':'162px',
                    //         'top': '147px',
                    //         'right': '107px',
                    //     },500);
                    // }else if(index==2){
                    //     $('#tab-parts li').eq(2).stop().fadeIn('slow').children('.tab3-parts1').animate({
                    //         'width':'334px',
                    //         'height':'222px',
                    //         'top': '233px',
                    //         'left': '-56px',
                    //     },500);
                    //     $('.tab3-parts2').animate({
                    //         'width':'144px',
                    //         'height':'215px',
                    //         'top': '153px',
                    //         'right': '82px',
                    //     },500);
                    // }else if(index==3){

                    //     $('#tab-parts li').eq(3).stop().fadeIn('slow').children('.tab4-parts1').animate({
                    //         'width':'369px',
                    //         'height':'112px',
                    //         'top': '247px',
                    //         'left': '-78px'
                    //     },'500','swing',function(){
                    //         $('.tab4-parts2').animate({
                    //         'width':'363px',
                    //         'height':'57px',
                    //         'top': '375px',
                    //         'left': '-73px'
                    //     },'500','swing');
                    //     });
                    // }
                });
            }
            /*滚动函数*/
            var autoScroll = function() {
                $('.img').css({'-moz-opacity':'0.5','opacity':'0.5'})
                $('#tab-parts li').siblings().css('display','none').children().css({'width':'0','height':'0','left':'50%','top':'50%'});
                if (iset.direction) {

                    i++;
                    if (i >= imgLi.length) {
                        iset.imgIco.find('a').eq(0).addClass(iset.active).siblings().removeClass(iset.active);
                    };
                    if (i > imgLi.length) {
                        imgUl.css({
                            left: 0
                        });
                        i = 1;
                    };
                    imgUl.stop().animate({
                        left: -i * imgLi.eq(0).width()
                    }, iset.speed,function(){
                        $('.img').css({'-moz-opacity':'1','opacity':'1'})
                    });
                    iset.imgIco.find('a').eq(i).addClass(iset.active).siblings().removeClass(iset.active);
                } else {
                    i--;
                    if (i == -1) {
                        imgUl.css({
                            left: -(imgLi.size() * imgLi.eq(0).width())
                        });
                        i = imgLi.length - 1;
                    };
                    imgUl.stop().animate({
                        left: -i * imgLi.eq(0).width()
                    }, iset.speed,function(){
                        $('.img').css({'-moz-opacity':'1','opacity':'1'})
                    });
                    iset.imgIco.find('a').eq(i).addClass(iset.active).siblings().removeClass(iset.active);
                };

            //     if(i==5){

            //      $('#tab-parts li').eq(0).stop().fadeIn('slow').children('.tab1-parts1').animate({
            //             'width':'118px',
            //             'height':'162px',
            //             'bottom': '132px',
            //             'left': '80px'
            //         },500);
            //         $('.tab1-parts2').animate({
            //             'width':'135px',
            //             'height':'126px',
            //             'top': '193px',
            //             'left': '2px'
            //             },500)
            //         $('.tab1-parts3').animate({
            //             'width':'144px',
            //             'height':'144px',
            //             'top': '170px',
            //             'left': '165px',
            //             },'slow')

            // }else if(i==1){
            //     $('#tab-parts li').eq(1).fadeIn('slow').children('.tab2-parts1').animate({
            //         'width':'311px',
            //         'height':'188px',
            //         'top': '262px',
            //         'left': '-58px'
            //     },500);
            //     $('.tab2-parts2').animate({
            //         'width':'150px',
            //         'height':'162px',
            //         'top': '147px',
            //         'right': '107px',
            //     },500);
            // }else if(i==2){
            //     $('#tab-parts li').eq(2).stop().fadeIn('slow').children('.tab3-parts1').animate({
            //         'width':'334px',
            //         'height':'222px',
            //         'top': '233px',
            //         'left': '-56px',
            //     },500);
            //     $('.tab3-parts2').animate({
            //         'width':'144px',
            //         'height':'215px',
            //         'top': '153px',
            //         'right': '82px',
            //     },500);
            // }else if(i==3){
            //     $('#tab-parts li').eq(3).stop().fadeIn('slow').children('.tab4-parts1').animate({
            //         'width':'369px',
            //         'height':'112px',
            //         'top': '247px',
            //         'left': '-78px'
            //     },'500','swing',function(){
            //         $('.tab4-parts2').animate({
            //         'width':'363px',
            //         'height':'57px',
            //         'top': '375px',
            //         'left': '-73px'
            //     },'500','swing');
            //     });
            // }else if(i==4){
            //       $('#tab-parts li').eq(0).stop().fadeIn('slow').children('.tab1-parts1').animate({
            //             'width':'118px',
            //             'height':'162px',
            //             'bottom': '132px',
            //             'left': '80px'
            //         },500);
            //         $('.tab1-parts2').animate({
            //             'width':'135px',
            //             'height':'126px',
            //             'top': '193px',
            //             'left': '2px'
            //             },500)
            //         $('.tab1-parts3').animate({
            //             'width':'144px',
            //             'height':'144px',
            //             'top': '170px',
            //             'left': '165px',
            //             },'slow')
            //     }

            };
            /*自动播放*/
            var autoPlay = function() {
                if (iset.autoPlay) {
                    timer = setInterval(autoScroll, iset.interval,function(){

                    });

                };
            };
            /*鼠标移上去暂停滚动*/
            var MouseStop = function() {
                clearInterval(timer)
            };
            /*鼠标事件*/
            iset.imgBox.parent().hover(function() {
                MouseStop();
            }, function() {
                autoPlay();
            });
             // $('#tab-parts li').eq(0).stop().fadeIn('slow').children('.tab1-parts1').animate({
             //        'width':'118px',
             //        'height':'162px',
             //        'bottom': '132px',
             //        'left': '80px'
             //    },500);
             //    $('.tab1-parts2').animate({
             //        'width':'135px',
             //        'height':'126px',
             //        'top': '193px',
             //        'left': '2px'
             //        },500)
             //    $('.tab1-parts3').animate({
             //        'width':'144px',
             //        'height':'144px',
             //        'top': '170px',
             //        'left': '165px',
             //        },'slow')
            appendIco();
            autoPlay();
            icoClick();
        }
    });
})(jQuery);