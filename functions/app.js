// $(window).on('beforeunload', function() {
//     $(window).scrollTop(0);
// });

$(document).ready(function(){


    var doc = $('html, body');
    var nav = $(".nav");
    var menu = $(".menu");
    var menuLink = $(".menu-link");
    var menuContainer = $(".menu-container");
    var menuBline = $(".menu-bottom-line");
    var navUpdate = $(".nav-update");

    var Start = $("#Start");
    
    var array_sections_names = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
    var array_sections_length = array_sections_names.length;
    var array_sections_id = [];
    var array_containers = [];
    var array_containers_p = [];
    var array_containers_img = [];
    var array_top = [];

    function Create_Sections_Arrays(){

        for(var i = 0; i < array_sections_length; i++){

            array_sections_id[i] = "#" + array_sections_names[i];
            array_containers[i] = "." + array_sections_names[i].toLowerCase() + "-container";
            array_containers_p[i] = "." + array_sections_names[i].toLowerCase() + "-container p";
            array_containers_img[i] = "." + array_sections_names[i].toLowerCase() + "-img-container";

        }

    }

    function Array_Offset_Top(){
        for(var i = 0; i < array_sections_length; i++){
            if(i != 0){
                array_top[i] = $( "#" + array_sections_names[i] ).offset().top;
            }else{
                array_top[0] = 0;
            }
        }
    }

    $(window).scroll(function(){

        var scroll = $(window).scrollTop();

        if(scroll > 1 && scroll <= 100){
            if (typeof array_sections_id == 'undefined' || array_sections_id.length < array_sections_length) {
                Create_Sections_Arrays();
            }else if(array_sections_id.length === array_sections_length && array_top.length < array_sections_length){
                Array_Offset_Top();
            }else if(array_sections_id.length === array_sections_length && array_top.length === array_sections_length){

            }
        }else{


            Array_Offset_Top();

            if (scroll >= array_top[3] - 150) {
                let arr_sticky = [{
                    el: ".sticky-logo-top",
                    cl: "meet-center-from-top"
                }];
                Toggle_Class(arr_sticky, true);
            }

            if (scroll > 50) {
                let arr_small = [{
                    el: "small",
                    cl: "small-text-display"
                }];
                Toggle_Class(arr_small, false);
            }


            if (scroll > array_top[5] - 400) {
                let arr_five_add = [{
                        el: array_containers_p[5] + " focus",
                        cl: "special"
                    },
                    {
                        el: array_containers_img[5],
                        cl: 'logo-uncolored'
                    }
                ];

                let arr_five_remove = [{
                    el: array_containers_img[5],
                    cl: 'logo-colored'
                }
            
            ];
                Toggle_Class(arr_five_add, true);
                Toggle_Class(arr_five_remove, false);

            }

            if (scroll >= array_top[5] - 200) {
                Toggle_Class([{
                    el: array_sections_id[5],
                    cl: 'sticky'
                }], true);
            }

            if (scroll > array_top[6]) {
                let arr_six = [
                    {
                        el: array_containers_img[5],
                        cl: 'logo-uncolored'
                    }
                ];

                let arr_six_add = [{
                    el: array_containers_img[5],
                    cl: 'logo-colored'
                },
                {
                    el: array_containers_p[5],
                    cl: 'disappear'
                }];

                Toggle_Class(arr_six, false);
                Toggle_Class(arr_six_add, true);

            }

            if (scroll >= array_top[7]) {
                Toggle_Class(
                    [{
                        el: array_containers_img[7],
                        cl: 'display-static'
                    }],
                    true
                );

                Toggle_Class(
                    [{
                        el: array_sections_id[5],
                        cl: 'sticky'
                    }],
                    false
                );


            } else if (scroll <= array_top[7] - 1) {
                Toggle_Class(
                    [
                        {
                            el: array_containers_img[7],
                            cl: 'display-static'
                        }
                
                    ],
                    false
                )

            }

            if(scroll < array_top[6] + 1 ){
                Toggle_Class(
                    [
                        {

                            el: array_containers_p[5],
                            cl: 'disappear' 

                        }
                    ]
                    ,
                    false
                )
            }

            for(var j = 0; j < array_sections_length; j++){
                if(scroll > array_top[j] - 300){
                    let temp_arr = [ {el: array_containers_p[j] + ' focus', cl: 'special'},
                     {el: array_containers[j] + ' h1 focus', cl: 'special'} ];
                    Toggle_Class (temp_arr, true);
                }
            }


            var mockups_offset = $("#Mockups").offset().top;
            var mockups_height = $("#Mockups").height();
            if(scroll >= array_top[7] + ( $(array_sections_id[7]).height() / 2 ) && scroll < mockups_offset + ( mockups_height / 2 ) + ( mockups_height / 4 ) ){
                $("html, body").addClass('light');
            }else{
                $("html, body").removeClass('light');
            }



        }


            
    });





    
    setTimeout(ScrollNow, 1000);

    function ScrollNow(){
        $("small").addClass('small-text-display');
    }

    menuLink.click(function(){
        menuContainer.toggleClass('menu-container-status');
        doc.toggleClass('no-scroll');
        menuBline.toggleClass('disappear');
        menu.toggleClass('menu-line-animation');
        navUpdate.toggleClass('disappear');
    });

    $(".dismiss").click(function(){
        $(".nav-update").css({'top':'-60px'});
    });








    function Toggle_Class(Arr, condition){

        Arr.forEach(e => {
            try{
                if(typeof e.el === 'string' && condition === true){
                    Add_Class( $(e.el), e.cl );
                }else if(typeof e.el === 'string' && condition === false){
                    Remove_Class( $(e.el), e.cl );
                }else if(typeof e.el !== 'string' && condition === true){
                    Add_Class( e.el, e.cl );
                }else if(typeof e.el !== 'string' && condition === false){
                    Remove_Class( e.el, e.cl );
                }else{
                    console.log("");
                }
            }catch(error){
                console.log(error.message);
            }
        
        });

    }

    function Add_Class(one, two){
        one.addClass(two);
    }

    function Remove_Class(one, two){
        one.removeClass(two);
    }



  




});





// Deprecated


    // while(array_sections_id.length === 0){
    //     console.log(array_sections_id);
    // }
    
    // $.when( Create_Sections_Arrays() ).done(function(){
    // })

    // $(window).load(function() {
    //     console.log(array_top);
    // });


    // var One = $("#One");
    // var OneContainer = $(".one-container");
    // var OneContainer_p = $(".one-container p");
    // var OneContainer_img = $(".one-img-container");

    // var Two = $("#Two");
    // var TwoContainer = $(".two-container");
    // var TwoContainer_p = $(".two-container p");
    // var TwoContainer_img = $(".two-img-container");

    // var Three = $("#Three");
    // var ThreeContainer = $(".three-container");
    // var ThreeContainer_p = $(".three-container p");
    // var ThreeContainer_img = $(".three-img-container");
  
    // var Four = $("#Four");
    // var FourContainer = $(".four-container");
    // var FourContainer_p = $(".four-container p");
    // var FourContainer_img = $(".four-img-container");
  
    // var Five = $("#Five");
    // var FiveContainer = $(".five-container");
    // var FiveContainer_p = $(".five-container p");
    // var FiveContainer_img = $(".five-img-container");

    // var Six = $("#Six");
    // var SixContainer = $(".six-container");
    // var SixContainer_p = $(".six-container p");
    // var SixContainer_img = $(".six-img-container");

    // var Seven = $("#Seven");
    // var SevenContainer = $(".seven-container");
    // var SevenContainer_p = $(".seven-container p");
    // var SevenContainer_img = $(".seven-img-container");


    // var ThreeTop = $(array_sections_names[3]).offset().top;
    // var FourTop = $(array_sections_names[4]).offset().top;
    // var FiveTop = $(array_sections_names[5]).offset().top;
    // var SixTop = $(array_sections_names[6]).offset().top;
    // var SevenTop = $(array_sections_names[7]).offset().top;




    // var ratio = 100;
    // var upperLimit = 300;
    // var lowerLimit = 1;
    // var commonDenominator;
    
    // var dividends = upperLimit / ratio;

    // var temp = 1;

    // function animateImage(s, c){
        
    //     var scrollReset = s - c;

    //     if(scrollReset > 0 || scrollReset > lowerLimit){

    //         for(var i = 1; i <= dividends ; i++){
            
    //             if(scrollReset < ratio && scrollReset > lowerLimit){
    //                 backgroundSwapper(lowerLimit);
    //                 temp = lowerLimit;
    //                 break;

    //             }else if(scrollReset >= temp && scrollReset < i*ratio){
    //                 backgroundSwapper(i);
    //                 i*ratio > temp ? temp = i*ratio : temp;
    //                 break;

    //             }else if(scrollReset >= upperLimit){
    //                 backgroundSwapper(upperLimit/ratio);
    //                 break;
    //             }

    //         }

    //     }else{
    //         backgroundSwapper(1);
    //     }
    // }

    // function backgroundSwapper(x){
    //     $(".three-img-container").css({'background':'url(assets/imgs/Snapshots/SnapshotsLogo-0'+ x +'.svg) no-repeat center center', 'background-size':'contain'});
    // }





    // $(window).scroll(function(){
    //     var scroll = $(window).scrollTop();
       
    //     // commonDenominator = $("#Three").offset().top - 200;
    //     // containerHeight = $("#Three").height();

    //     // if(scroll > commonDenominator){
    //     //     animateImage(scroll, commonDenominator);
    //     // }else if(scroll > containerHeight){
    //     //     backgroundSwapper(3);
    //     // }else{
    //     //     backgroundSwapper(1);
    //     // }
        


    //     if(scroll >=  ThreeTop - 150){
    //         let arr_sticky = [ {el:".sticky-logo-top", cl:"meet-center-from-top"} ];
    //         Toggle_Class(arr_sticky, true);
    //     }

    //     if(scroll > 50){
    //         let arr_small = [ {el:"small" , cl:"small-text-display"} ];
    //         Toggle_Class(arr_small, false);
    //     }


    //     if(scroll > One.offset().top - (Start.height() / 2)){
    //         let arr = [{el:"focus",cl:"special"}];
    //         Toggle_Class(arr, true);
    //     }

    //     if(scroll > One.offset().top + (One.height() / 2) ){
    //         let arr = [{el:"focus",cl:"special"}];
    //         Toggle_Class(arr, true);
    //     }

    //     if(scroll > ThreeTop - 300){
    //         let arr_one = [{ el:".three-container p focus", cl:'display-delayed'}];
    //         let arr_two = [{el:"focus",cl:"special"}];
    //         Toggle_Class( arr_one, true);
    //         Toggle_Class(arr_two, true);
    //     }

    //     if(scroll > FourTop - 400){
    //         let arr = [{el:"focus",cl:"special"}];
    //         Toggle_Class(arr, true);
    //     }

    //     if(scroll > FiveTop - 400){
    //         let arr_five_add = [ 
    //             {
    //                 el:"focus",cl:"special"
    //             } ,
    //             {
    //                 el: FiveContainer_img,
    //                 cl: 'logo-uncolored'
    //             }
    //         ];

    //         let arr_five_remove = [ {el: FiveContainer_img, cl: 'logo-colored'} ];
    //         Toggle_Class(arr_five_add, true);
    //         Toggle_Class(arr_five_remove, false);

    //     }

    //     if(scroll >= FiveTop - 200 ){
    //         Toggle_Class( [{el: Five, cl:'sticky'}], true);
    //     }

    //     if(scroll > SixTop){
    //         let arr_six = [
    //             {
    //                 el: FiveContainer_p,
    //                 cl: 'display-delayed'
    //             },
    //             {
    //                 el: FiveContainer_img,
    //                 cl: 'logo-uncolored'
    //             }
    //         ];

    //         let arr_six_add = [ {el: FiveContainer_img, cl: 'logo-colored'} ];

    //         Toggle_Class(arr_six, false);
    //         Toggle_Class(arr_six_add, true);

    //     }

    //     if(scroll >= SevenTop){
    //         Toggle_Class(
    //             [ {el:SevenContainer_img, cl:'display-static'} ]   
    //             ,
    //             true
    //         );

    //         Toggle_Class (
    //             [ {el:Five, cl:'sticky'} ]
    //             ,
    //             false
    //         );


    //     }else if(scroll <= SevenTop - 1 ){
    //         Toggle_Class(
    //             [ {el:SevenContainer_img, cl:'display-static'} ]
    //             ,
    //             false
    //         )

    //     }


    // });