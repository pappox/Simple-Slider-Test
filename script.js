$(document).ready(function () {
    var totlalSlides = $("li").length;
    var theImage = $("ul li img");

    // var imageWidth = theImage.width();
    var imageHeight = theImage.height();

    var totalWidth = totlalSlides * imageWidth;

    //assign full slider width to ul
    $("ul").css({
        width: function () {
            return totalWidth;
        }
    });
    var sliderWidth = $('ul').width();
    // assign contaoner height & width
    $(".simple_slider").css({
    	width: function(){
    		return imageWidth;
    	},
    	height: function(){
    		return imageHeight;
    	}
    });

    ////////////////////////////////
    ///////animation margin way////
    ///////////////////////////////
    //if you activted animate way please coment out this section first//

    var mrgn = 0;
    var timer = setInterval(function () {
        slide();
    }, 3000);

    function slide() {
        $("ul").css({
            'margin-left': mrgn,
                'transition-duration': '1s'
        });
        mrgn -= 500;
        if (mrgn == -2000) {
            mrgn = 0;
        }
    }

    
    // $(theImage).each(function{
    // 	$(this).
    // });

    ///////////////////////////////////
    ////////animate way////////////////
    ///////////////////////////////////
    
    //remove comment from below code section to activate this//
    /*
    var interval = 3000;
    var easing = 'swing';
    var mrgn = 0;
    
    sliderx();
    
    function sliderx() {
        mrgn -= 500;
        $("ul").animate({
            marginLeft: mrgn
        }, interval, easing, sliderx);
    
        //reset margin
        if (mrgn == -2000) {
            mrgn = 0;
        }
    }
    */

    /////////////////////////////
    ///////nav///////////////////
    /////////////////////////////

    var mrgnx = 0;
    $("#prev").click(function () {
        $("ul").animate({
            marginLeft: "+=500px"
        });
    });
    $("#next").click(function () {
        $("ul").animate({
            marginLeft: "-=500px"
        });
    });


});