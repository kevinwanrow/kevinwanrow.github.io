$(document).ready(function(){

    var doc = $('html, body');
    var nav = $(".nav");
    var menu = $(".menu");
    var menuLink = $(".menu-link");
    var menuContainer = $(".menu-container");
    var menuBline = $(".menu-bottom-line");
    var navUpdate = $(".nav-update");

    var Start = $("#Start");
    
    var One = $("#One");
    var oneContainer = $(".one-container");
    var oneContainerP = $(".one-container p");
    var oneContainerIMG = $(".one-img-container");

    var twoContainerP = $(".two-container p");
    var twoContainerIMG = $(".two-img-container");

    
    setTimeout(ScrollNow, 3000);

    function ScrollNow(){
        $("small").addClass('small-text-display');
    }

    menuLink.click(function(){
        menuContainer.toggleClass('menu-container-status');
        // nav.toggleClass('transparent');
        doc.toggleClass('no-scroll');
        menuBline.toggleClass('disappear');
        menu.toggleClass('menu-line-animation');
        navUpdate.toggleClass('disappear');
    });

    $(".dismiss").click(function(){
        $(".nav-update").css({'top':'-60px'});
    });



    var ratio = 100; //=100
    var upperLimit = 300;
    var lowerLimit = 1;
    var commonDenominator;
    
    var dividends = upperLimit / ratio;

    var temp = 1;

    function animateImage(s, c){
        
        var scrollReset = s - c;

        if(scrollReset > 0 || scrollReset > lowerLimit){

            for(var i = 1; i <= dividends ; i++){

                // console.log("-------------------------- MEGA THREAD --------------------------")
                // console.log("Scroll", scrollReset);
                // console.log("Lower Limit", lowerLimit);
                // console.log("Upper Limit", upperLimit);
                // console.log("Dividends", dividends);
                // console.log("Temp", temp);
                // console.log("i*ratio", i*ratio);
                // console.log("Loop iterations", i);
            

                if(scrollReset < ratio && scrollReset > lowerLimit){
                    backgroundSwapper(lowerLimit);
                    temp = lowerLimit;
                    break;

                }else if(scrollReset >= temp && scrollReset < i*ratio){
                    backgroundSwapper(i);
                    i*ratio > temp ? temp = i*ratio : temp;
                    break;

                }else if(scrollReset >= upperLimit){
                    backgroundSwapper(upperLimit/ratio);
                    break;
                }

            }

        }else{
            backgroundSwapper(1);
        }
    }

    function backgroundSwapper(x){
        $(".three-img-container").css({'background':'url(assets/imgs/Snapshots/SnapshotsLogo-0'+ x +'.svg) no-repeat center center', 'background-size':'contain'});
    }


    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
       
        commonDenominator = $("#Three").offset().top - 200;
        containerHeight = $("#Three").height();

        // if(scroll > commonDenominator){
        //     animateImage(scroll, commonDenominator);
        // }else if(scroll > containerHeight){
        //     backgroundSwapper(3);
        // }else{
        //     backgroundSwapper(1);
        // }
        
        if(scroll >=  $("#Three").offset().top - 150){
            $(".sticky-logo-top").addClass("meet-center-from-top");
            $(".sticky-logo-bottom").addClass("meet-center-from-bottom");
        }

        if(scroll > 50){
            $("small").removeClass('small-text-display');
        }


        if(scroll > One.offset().top - (Start.height() / 2)){
            oneContainerP.addClass('display-delayed');
            oneContainerIMG.addClass('display');
        }

        if(scroll > One.offset().top + (One.height() / 2) ){
            twoContainerP.addClass('display');
            twoContainerIMG.addClass('display-delayed');
        }

        if(scroll > $("#Three").offset().top - 150){
            $(".three-container p").addClass('display-delayed');
        }

        // console.log(scroll);
    });

});
