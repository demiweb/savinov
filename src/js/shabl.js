


$( document ).ready(function() {


    $('.preloader').css({"visibility":"hidden","opacity":"0"});


    if((document.documentElement.clientWidth)>=780){


        var startime = function(){




            $( ".menu-dot").on( "click", function() {
                $(".global-menu__item").addClass("is-opened");
                TweenMax.to($(".svgpath-mobile"),0.4,{autoAlpha:1, ease:Power2.easeInOut});
                TweenMax.to($(".closemenumob"),0.2,{autoAlpha:1, ease:Power2.easeInOut});

            });

            $( ".closemenumob").on( "click", function() {
                $(".global-menu__item").removeClass("is-opened");
                TweenMax.to($(".svgpath-mobile"),0.5,{autoAlpha:0, ease:Power2.easeInOut});
                TweenMax.to($(".closemenumob"),0.5,{autoAlpha:0, ease:Power2.easeInOut});
            });




            var linetp = (".line-top");
            var linerg = (".line-right");
            var linelf = (".line-left");
            var linebt = (".line-bottom");
            var ss = (".ss");

            var menu = (".absblock-menu");
            var social = (".blackmenu>.social");
            var nmvork = (".namework");
            var nmvorkaft = (".namework>span");
            var blkmenu = (".blackmenu")

            var blkmenudot = (".blackmenu .menu-dot");
            var blkmenulang = (".blackmenu .menu-lang");
            var blkmenusocial = (".blackmenu .social");


            var archi = (".archi");
            var dotted = (".slide-dotted");


            trhidden = new TimelineMax();



            trhidden
                .add('linetp')
                // .fromTo(linetp, 0.5, {y:"0px"},{y:"-30px", ease:Power2.easeInOut})
                // .fromTo(linerg, 0.5, {x:"0px"},{x:"30px", ease:Power2.easeInOut},'linetp')
                // .fromTo(linelf, 0.5, {x:"0px"},{x:"40px", ease:Power2.easeInOut},'linetp')
                // .fromTo(linebt, 0.5, {y:"0px"},{y:"30px", ease:Power2.easeInOut},'linetp')
                .fromTo(blkmenu, 0.5, {x:"0px"},{x:"80px", ease:Power2.easeInOut},'linetp')

                .fromTo(blkmenudot, 0.5, {x:"-80px"},{x:"0px", ease:Power2.easeOut}, '=-0.4')
                .fromTo(blkmenulang, 0.5, {x:"-80px"},{x:"0px", ease:Power2.easeOut}, '=-0.4')
                .fromTo(blkmenusocial, 0.5, {x:"-80px"},{x:"0px", ease:Power2.easeOut}, '=-0.4');





//HOVER BLOCK APPEND BLOCK CHILDREN
            $('.hoverblock').each(function(){
                $(this).append("<div class='hoverfuncblack'></div>");
            });





//MENU HOVER BLOCK LANG

            $(".menu-lang-item").hover(function(){

                TweenMax.to($(this).children(),0.2,{scale: 2,autoAlpha:0, ease: Power2.easeInOut});
                TweenMax.to($('.menu-dot'),0.2,{autoAlpha:0.4});
                TweenMax.to($('.social'),0.2,{autoAlpha:0.4});

            }, function(){

                TweenMax.to($(this).children(),0.2,{scale:1,autoAlpha:1, ease: Power2.easeInOut});
                TweenMax.to($('.menu-dot'),0.2,{autoAlpha:1});
                TweenMax.to($('.social'),0.2,{autoAlpha:1});

            });




//MENU HOVER BLOCK SOCIAL

            $(".absblock-social").hover(function(){


                TweenMax.to($(this),0.2,{scale: 1.2, ease: Power2.easeInOut});
                TweenMax.to($('.menu-dot'),0.2,{autoAlpha:0.4});
                TweenMax.to($('.menu-lang'),0.2,{autoAlpha:0.4});

            }, function(){

                TweenMax.to($(this),0.2,{scale: 1, ease: Power2.easeInOut});
                TweenMax.to($('.menu-dot'),0.2,{autoAlpha:1});
                TweenMax.to($('.menu-lang'),0.2,{autoAlpha:1});

            });





//MENU HOVER BLOCK OPEN MENU

            $(".menu-dot").hover(function(){

                TweenMax.to($('.social'),0.2,{autoAlpha:0.4});
                TweenMax.to($('.menu-lang'),0.2,{autoAlpha:0.4});

            }, function(){

                TweenMax.to($('.social'),0.2,{autoAlpha:1});
                TweenMax.to($('.menu-lang'),0.2,{autoAlpha:1});

            });



//HOVER FUNCTION HOVERBLOCK

            $(".hoverblock").hover(function(){

                TweenMax.fromTo($(this).children(".hoverfuncblack"),1.4,{x:'-150%',autoAlpha:1},{x:'100%',ease: Power2.easeInOut});
            }, function(){

            });





//HOVER MENU FUNC


            $(".global-menu__item").hover(function(){

                TweenMax.fromTo($(this).children(".decorationtext").children(".linebltext"),0.8,{x:'-100%',autoAlpha:1},{x:'0%',ease: Power3.easeInOut});
                TweenMax.fromTo($(this).children(".deco-desc").children(".linebltext-desc"),0.8,{x:'0%'},{x:'-105%',ease: Power3.easeInOut});
                TweenMax.fromTo($(this).children(".deco-desc"),0.8,{autoAlpha:0},{autoAlpha:1,ease: Power3.easeInOut});

            }, function(){
                TweenMax.to($(this).children(".decorationtext").children(".linebltext"),0.8,{x:'105%',ease: Power3.easeInOut});
                TweenMax.fromTo($(this).children(".deco-desc").children(".linebltext-desc"),0.8,{x:'100%'},{x:'0%',ease: Power3.easeInOut});
                TweenMax.fromTo($(this).children(".deco-desc"),0.8,{autoAlpha:1},{autoAlpha:0,ease: Power3.easeInOut});

            });




// SCROLLMAGIC


            var controller = new ScrollMagic.Controller();


            var OurMagictop = new ScrollMagic.Scene({
                triggerElement: ('.triggerblock'),
                triggerHook: 0
            })
                .setTween(trhidden)
                .addTo(controller);




            $('.activateblock').each(function(){

                var OurScene = new ScrollMagic.Scene({
                    triggerElement: this,
                    triggerHook: 0.9
                })
                    .setTween(TweenMax.fromTo(this,0.7,{y:'40px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone}))
                    .addTo(controller)
            });


            $('.projectblock figure').each(function(){

                var OurScene = new ScrollMagic.Scene({
                    triggerElement: this,
                    triggerHook: 0.9
                })
                    .setTween(TweenMax.fromTo(this,0.7,{y:'40px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone}))
                    .addTo(controller)
            });




        }


//MAIN PAGE ------------------------------------------------- MAIN PAGE ------------------------------------------------------------------------





// particlesJS("particles-js", {"particles":{"number":{"value":10,"density":{"enable":false,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"edge","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":8.017060304327615,"random":false,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":4,"direction":"top","random":false,"straight":true,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
// var count_particles, stats, update;
// stats = new Stats; stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//  count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); };
//  requestAnimationFrame(update);

        startime();


        var slider = new TimelineMax();



        function menuIn(){
            var OurScenemenu = new ScrollMagic.Scene({
                triggerElement: ('.triggerblock'),
                triggerHook: 0
            })
                .setClassToggle(('.maintp .absblock-menu, .maintp .social'), 'fade-out')
                .addTo(controller)
        }




        var tl = new TimelineMax();
        tl
            .add('linetp')
            .fromTo($('.line-top'), 2.5, {top:"0px"},{top:"-700px", ease:Power2.easeInOut})
            .fromTo($('.line-right'), 2.5, {right:"0px"},{right:"-1000px", ease:Power2.easeInOut},'linetp')
            .fromTo($('.line-left'), 2.5, {left:"0px"},{left:"-1000px", ease:Power2.easeInOut},'linetp')
            .fromTo($('.line-bottom'), 2.5, {bottom:"0px"},{bottom:"-700px", ease:Power2.easeInOut},'linetp')
            .fromTo($('.ss'), 1.5, {autoAlpha:0,y:"70px"},{autoAlpha:1, y:0, ease:Power2.easeInOut})
            .fromTo($('.slide-dotted'), 1, {autoAlpha:0},{autoAlpha:1, ease:Power2.easeInOut},'=-1');


//Р”РѕР±Р°РІР»СЏРµРј С„СѓРЅРєС†РёСЋ РїРѕСЃР»Рµ Р·Р°РІРµСЂС€РµРЅРёСЏ Р·Р°РіСЂСѓР·РєРё РІРµСЂС…РЅРµРіРѕ СЌРєСЂР°РЅР° - CallBack
        tl.eventCallback("onComplete", menuIn);










//Image Project Logo Position

        $('.imagepr').each(function(){

            var logoProject = $(this).children().children(".logoblock");
            var heightLogo = (logoProject.height()/2);
            var newHeight = logoProject.css("margin-top",-heightLogo)

        });




//HOVER MENU FUNC


        $(".global-menu__item").hover(function(){

            TweenMax.fromTo($(this).children(".decorationtext").children(".linebltext"),0.8,{x:'-100%',autoAlpha:1},{x:'0%',ease: Power3.easeInOut});
            TweenMax.fromTo($(this).children(".deco-desc").children(".linebltext-desc"),0.8,{x:'0%'},{x:'-105%',ease: Power3.easeInOut});
        }, function(){
            TweenMax.to($(this).children(".decorationtext").children(".linebltext"),0.8,{x:'105%',ease: Power3.easeInOut});
            TweenMax.fromTo($(this).children(".deco-desc").children(".linebltext-desc"),0.8,{x:'100%'},{x:'0%',ease: Power3.easeInOut});

        });


//HOVER FUNCTION

        $(".projectitem").hover(function(){

            $(this).addClass('fadeinclass');
        }, function(){
            $(this).removeClass('fadeinclass');
        });


//HOVER Project

        $(".projectitem").hover(function(){

            TweenMax.fromTo($(this).children().children('.titletext').children('.textlinePr'),0.5,{x:'-100%',autoAlpha:1},{x:'0%', ease: Power2.easeInOut});

        }, function(){

            TweenMax.fromTo($(this).children().children('.titletext').children('.textlinePr'),0.5,{x:'0%',autoAlpha:1},{x:'100%', ease: Power2.easeInOut});

        });




// SCROLLMAGIC


        var controller = new ScrollMagic.Controller();



        var OurMagictop = new ScrollMagic.Scene({
            triggerElement: ('.triggerblock'),
            triggerHook: 0
        })
            .setTween(trhidden)
            .addTo(controller);




//Video Open Black Mask
        var OurMagicVideoOpen = new ScrollMagic.Scene({
            triggerElement: ('.videoblock'),
            triggerHook: 1,
            duration: '100%'
        })
            .setTween(TweenMax.to('.video-js-abs-black-ani',1,{autoAlpha:0,ease:Power2.easeInOut}))
            .addTo(controller);




// $('.history-item').each(function(){
// var OurScenehistory = new ScrollMagic.Scene({
// triggerElement: ('.absblock-history'),
// triggerHook: 0.9,
// duration: '170%'
// })
// .setTween(TweenMax.fromTo(this,1,{y:'80px'},{y:'-280px',autoAlpha:1}))
// .addTo(controller)
// });


        var tle = new TimelineMax();
        tle.staggerFromTo('.item-clients',1,{y:'80px', autoAlpha:0},{y:0, autoAlpha:1, ease:Back.easeNone}, 0.12);


//Partners Stagger
        var OurScenaStagger = new ScrollMagic.Scene({
            triggerElement: '.padding-items-clients',
            triggerHook: 0.7
        })
            .setTween(tle)
            .addTo(controller);



// $('.imageprabs').each(function(){

// var OurSceneparallax = new ScrollMagic.Scene({
// triggerElement: this,
// triggerHook: 0.3,
// duration: '200%'
// })
// .setTween(TweenMax.to(this,1,{y:'14%', ease:Power2.easeNone}))
// .addTo(controller)
// });





//Parallax Scene
        var OurScena = new ScrollMagic.Scene({
            triggerElement: '.archi',
            triggerHook: 0.2,
            duration: '200%'
        })
            // .setClassToggle('.videoblock', 'fade-in')
            .setTween(TweenMax.to('.slide-image',1,{y:'20%', ease:Power2.easeNone}))
            .addTo(controller);





//END MAIN PAGE ------------------------------------------------- END MAIN PAGE ------------------------------------------------------------------------


//PROJECT PAGE ------------------------------------------------- PROJECT PAGE ------------------------------------------------------------------------



        var ProjectSingle = Barba.BaseView.extend({
            namespace: 'projectsingl',
            onEnterCompleted: function() {

                startime();


// SCROLLMAGIC


                var controller = new ScrollMagic.Controller();


                var pojavSingProjMain = new TimelineMax();
                pojavSingProjMain
                    .fromTo($('.head-imageblock'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone})
                    .fromTo($('.logoss-white-top'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},'=-0.5')
                    .fromTo($('.nameproject'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},'=-0.5')
                    .fromTo($('.category-name'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},'=-0.5')
                    .staggerFromTo($('.projecth2'),0.7,{y:'50px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},0.2,'=-0.7')
                    .staggerFromTo($('.text-about'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},0.2,'=-0.5')
                    .staggerFromTo($('.about-item'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},0.2,'=-0.5')
                    .staggerFromTo($('.galleryprojects>a>.pr_photo'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},0.2,'=-1')
                    .fromTo($('.get-response'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},'=-0.5')
                    .staggerFromTo($('.category-project-item'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},0.2,'=-0.5');


                var OurScenaPojavProjects = new ScrollMagic.Scene({
                    triggerElement: ('.logoss-white-top'),
                    triggerHook: 1
                })
                    .setTween(pojavSingProjMain)
                    .addTo(controller);



//PARALLAX TOP IMAGE

                $('.background-project-single').each(function(){

                    var OurSceneparallax = new ScrollMagic.Scene({
                        triggerElement: ('.category-name'),
                        triggerHook: 0.4,
                        duration: '200%'
                    })
                        .setTween(TweenMax.to(this,1,{y:'24%', ease:Power2.easeNone}))
                        .addTo(controller)
                });





//HOVER IMAGES PROJECT
                $(".projectitem").hover(function(){

                    TweenMax.to($(this).children().children(".imagepr"),1,{scale:1.05, ease:Back.easeOut});
                }, function(){
                    TweenMax.to($(this).children().children(".imagepr"),1,{scale: 1, ease:Back.easeOut});
                });


            }
        });

//END PROJECT PAGE ------------------------------------------------- END PROJECT PAGE ------------------------------------------------------------------------





//START ABOUT PAGE ------------------------------------------------- START ABOUT PAGE ------------------------------------------------------------------------





        var About = Barba.BaseView.extend({
            namespace: 'about',
            onEnterCompleted: function() {

                startime();


// particlesJS("particles-js",
//   {"particles":
//   {"number":
//   {"value":52,"density":
//   {"enable":true,"value_area":1104.8066982851817}},
// "color":{"value":"#ffffff"},
// "shape":{"type":"circle",
// "stroke":{"width":0,"color":"#000000"},
// "polygon":{"nb_sides":5},
// "image":{"src":"img/github.svg","width":100,"height":100}},
// "opacity":{"value":0.5,"random":false,
// "anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
// "size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
// "line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
// "move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,
// "attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
// "interactivity":{"detect_on":"canvas",
// "events":{"onhover":{"enable":false,"mode":"repulse"},
// "onclick":{"enable":false,"mode":"push"},"resize":true},
// "modes":{"grab":{"distance":400,
// "line_linked":{"opacity":1}},
// "bubble":{"distance":400,
// "size":40,"duration":2,
// "opacity":8,"speed":3},
// "repulse":{"distance":200,"duration":0.4},
// "push":{"particles_nb":4},
// "remove":{"particles_nb":2}}},
// "retina_detect":true});

                var topabout = new TimelineMax();



                topabout
                    .fromTo($('.main-about-block'), 1, {autoAlpha:0},{autoAlpha:1, ease:Power2.easeInOut})
                    .fromTo($('.lineabt'), 0.2, {width:'0px'},{width:'30px', ease:Power2.easeInOut},'=-0.4')
                    .fromTo($('.logos-about>.blacktemp'), 1, {x:'0%'},{x:'100%', ease:Power2.easeInOut},'=-0.6')
                    .fromTo($('.desc-about>.blacktemp'), 1, {x:'0%'},{x:'100%', ease:Power2.easeInOut},'=-0.6')
                    .staggerFromTo($('.about-link-anchor>.blacktemp'),0.8,{x:'0%'},{x:'100%', ease:Power2.easeOut},0.2,'=-0.6')
                    .fromTo($('.abs-about-background>.blacktemp'), 1, {x:'0%'},{x:'100%', ease:Power2.easeInOut},'=-1.2')
                    .fromTo($('#particles-js'), 4, {autoAlpha:0},{autoAlpha:0.5, ease:Power2.easeInOut},'=-2');




//РЇРљРћР РќР«Р• РЎРЎР«Р›РљР


                $(".tr-about").on("click","a", function (event) {
                    event.preventDefault();
                    var id  = $(this).attr('href'),
                        top = $(id).offset().top;
                    $('body,html').animate({scrollTop: top}, 1500);
                });




//HOVER WHAT WE DO

                $(".itemclass-wthl").hover(function(){


                    TweenMax.to($(this),0.3,{autoAlpha:0.3, ease: Power2.easeInOut});
                }, function(){
                    TweenMax.to($(this),0.3,{autoAlpha:0.8, ease: Power2.easeInOut});
                });



//РџСЂРѕСЃС‡РёС‚С‹РІР°РµРј Р°Р±СЃРѕР»СЋС‚РЅС‹Рµ РґР°РЅРЅС‹Рµ HUMAN

                nhuman = $('.human').length;
                humanWidth = 100/nhuman;
                $('.human').css("width",humanWidth + "%")


                for (var hu = 0; hu < nhuman; hu++) {
                    humanleft = hu*humanWidth
                    console.log(humanleft)
                    $('.human').eq(hu).css("left",humanleft + "%")
                }




// SCROLLMAGIC


                var controller = new ScrollMagic.Controller();


//TOP ABOUT PARALLAX BLOCK
                var OurMagicParBlock = new ScrollMagic.Scene({
                    triggerElement: ('.triggrblabout '),
                    triggerHook: 1,
                    duration: '100%'
                })
                    .setTween(TweenMax.to('.marg-about',2,{y:'-20%',ease:Power2.easeInOut}))
                    .addTo(controller);




                var pojav = new TimelineMax();
                pojav.staggerFromTo('.history-item.abtstyle',1,{y:'80px', autoAlpha:0},{y:0, autoAlpha:0.8, ease:Power2.easeNone}, 0.12);

                var OurScenaStaggerpojav = new ScrollMagic.Scene({
                    triggerElement: '.absblock-history',
                    triggerHook: 0.9
                })
                    .setTween(pojav)
                    .addTo(controller);



                var pojavhuman = new TimelineMax();
                pojavhuman  .staggerFromTo($('.human'),1,{y:'60px', autoAlpha:0},{y:0, autoAlpha:0.8, ease:Power2.easeNone},0.18)


                var OurScenaStaggerpojav = new ScrollMagic.Scene({
                    triggerElement: ('.human'),
                    triggerHook: 1
                })
                    .setTween(pojavhuman)
                    .addTo(controller);


//Р”РѕР±Р°РІР»СЏРµРј С„СѓРЅРєС†РёСЋ РїРѕСЃР»Рµ Р·Р°РІРµСЂС€РµРЅРёСЏ Р·Р°РіСЂСѓР·РєРё Р›СЋРґРµР№ - CallBack
                pojavhuman.eventCallback("onComplete", hoverIn);


                function hoverIn(){

                    $(".human,.history-item").hover(function(){

                        SameBlIndex = $(this).attr("value");


                        SameBlTextAllBl = $('.absblock-history').children('.history-item');
                        SameBlHumanAllBl = $('.human')
                        SameBlText = $('.absblock-history').children('[value='+SameBlIndex+']');
                        SameBlTextDesc = $('.absblock-history').children('[value='+SameBlIndex+']').children('.history-desc');
                        SameBlTextLine = $('.absblock-history').children('[value='+SameBlIndex+']').children('.linebtmani');
                        SameBlHuman = $('.human[value='+SameBlIndex+']');
// console.log(SameBl);



                        TweenMax.to(SameBlHumanAllBl,0.7,{scale:1,y:0,autoAlpha:0.4,ease: Power3.easeOut});
                        TweenMax.to(SameBlTextAllBl,0.7,{autoAlpha:0.3,ease: Power3.easeOut});
                        TweenMax.to(SameBlText,0.7,{y:-10,autoAlpha:1,ease: Power3.easeOut});
                        TweenMax.to(SameBlTextDesc,0.7,{autoAlpha:1,ease: Power3.easeOut});
                        TweenMax.fromTo(SameBlTextLine,0.7,{x:'-100%',autoAlpha:1},{x:'0%',autoAlpha:1,ease: Power3.easeInOut});
                        TweenMax.to(SameBlHuman,0.7,{scale:2, y:-120,autoAlpha:1,ease: Power3.easeOut});
                        TweenMax.to($(this).next('.human'),0.7,{scale:1.2, y:-30,autoAlpha:0.8,ease: Power3.easeOut});
                        TweenMax.to($(this).prev('.human'),0.7,{scale:1.2, y:-30,autoAlpha:0.8,ease: Power3.easeOut});




                    }, function(){

                        TweenMax.to(SameBlTextAllBl,0.4,{autoAlpha:0.8});
                        TweenMax.to(SameBlHumanAllBl,0.4,{autoAlpha:0.8});
                        TweenMax.to(SameBlText,0.3,{y:0})
                        TweenMax.to(SameBlHuman,0.3,{scale:1, y:0});
                        TweenMax.to(SameBlTextLine,0.4,{x:'100%',ease: Power3.easeInOut});
                        TweenMax.to(SameBlTextDesc,0.4,{autoAlpha:0});

                    });


                }




                var pojavWhatWeDo = new TimelineMax();
                pojavWhatWeDo .fromTo($('.whth2'),0.7,{y:'30px', autoAlpha:0},{y:0, autoAlpha:0.8, ease:Power2.easeNone})
                    .staggerFromTo($('.itemclass-wthl'),1,{y:'30px', autoAlpha:0},{y:0, autoAlpha:0.8, ease:Power2.easeNone}, 0.2,'=-0.4');

                var OurScenaStaggerWhat = new ScrollMagic.Scene({
                    triggerElement: ('.whth2'),
                    triggerHook: 0.8
                })
                    .setTween(pojavWhatWeDo)
                    .addTo(controller);





                var tle2 = new TimelineMax();
                tle2.staggerFromTo('.item-clients',1,{y:'80px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone}, 0.12);


//Partners Stagger
                var OurScenaStagger = new ScrollMagic.Scene({
                    triggerElement: '.padding-items-clients',
                    triggerHook: 0.7
                })
                    .setTween(tle2)
                    .addTo(controller);


            }
        });


//END ABOUT PAGE ------------------------------------------------- END ABOUT PAGE ------------------------------------------------------------------------





//START PROJECTS ARCHIVE PAGE ------------------------------------------------- START PROJECTS ARCHIVE PAGE ------------------------------------------------------------------------



        var ProjectsArch = Barba.BaseView.extend({
            namespace: 'projects',
            onEnterCompleted: function() {

                startime();


// SCROLLMAGIC


                var controller = new ScrollMagic.Controller();




                var pojavhprojectMain = new TimelineMax();
                pojavhprojectMain
                    .fromTo($('.logoss-black-top'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone})
                    .fromTo($('h1.text-project.noafter'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},'=-0.5')
                    .staggerFromTo($('.class-item-category'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},0.2,'=-0.5')
                    .fromTo($('.rightselect-btn'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},'=-0.5')
                    .staggerFromTo($('.firstblock>.projectitem:nth-child(1)'),0.7,{y:'50px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},0.2,'=-0.7');


                var OurScenaStaggerpojav = new ScrollMagic.Scene({
                    triggerElement: ('.logoss-black-top'),
                    triggerHook: 1
                })
                    .setTween(pojavhprojectMain)
                    .addTo(controller);



                var pojavText = new TimelineMax();
                pojavText
                    .fromTo($('.h2block-text'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone})
                    .staggerFromTo($('.column-ttx>p'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},0.2,'=-0.4');


                var OurScenaText = new ScrollMagic.Scene({
                    triggerElement: ('.h2block-text'),
                    triggerHook: 0.8
                })
                    .setTween(pojavText)
                    .addTo(controller);




//SERVICES POJAVLENIE

                var pojavServ = new TimelineMax();
                pojavServ
                    .staggerFromTo($('.items-services'),1,{y:'40px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power1.easeNone},0.3)
                    .staggerFromTo($('.textblock-serv'),1,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power1.easeNone},0.3,'=-1')
                    .staggerFromTo($('.number-items'),1,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power1.easeNone},0.3,'=-1.2');



                var OurScenaText = new ScrollMagic.Scene({
                    triggerElement: ('.services-select-block'),
                    triggerHook: 0.8
                })
                    .setTween(pojavServ)
                    .addTo(controller);





//HOVER CATEGORY PROJECTS
                $(".class-item-category").hover(function(){

                    TweenMax.to($(this),0.5,{color:"#ffffff", backgroundColor:"#000000", ease:Power1.easeOut});
                }, function(){
                    TweenMax.to($(this),0.5,{color:"#000000", backgroundColor:"#ffffff", ease:Power1.easeOut});
                });


//HOVER SERVICES PROJECTS
                $(".items-services").hover(function(){

                    TweenMax.to($(this).children('.blackmaskServ'),0.5,{autoAlpha:0.4, ease:Power1.easeOut});
                    TweenMax.to($(this).children('.textblock-serv'),0.5,{y:-20, ease:Back.easeOut});
                    TweenMax.to($(this).children('.number-items'),0.5,{y:-8, ease:Back.easeOut});
                }, function(){
                    TweenMax.to($(this).children('.blackmaskServ'),0.5,{autoAlpha:0, ease:Power1.easeOut});
                    TweenMax.to($(this).children('.textblock-serv'),0.5,{y:0, ease:Back.easeOut});
                    TweenMax.to($(this).children('.number-items'),0.5,{y:0, ease:Back.easeOut});
                });



//Image Project Logo Position

                $('.imagepr').each(function(){

                    var logoProject = $(this).children().children(".logoblock");
                    var heightLogo = (logoProject.height()/2);
                    var newHeight = logoProject.css("margin-top",-heightLogo)

                });


//HOVER FUNCTION

                $(".projectitem").hover(function(){

                    $(this).addClass('fadeinclass');
                }, function(){
                    $(this).removeClass('fadeinclass');
                });




                var tle = new TimelineMax();
                tle.staggerFromTo('.item-clients',1,{y:'80px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone}, 0.12);


//Partners Stagger
                var OurScenaStagger = new ScrollMagic.Scene({
                    triggerElement: '.padding-items-clients',
                    triggerHook: 0.7
                })
                    .setTween(tle)
                    .addTo(controller);



            }
        });

//END PROJECTS ARCHIVE PAGE ------------------------------------------------- END PROJECTS ARCHIVE PAGE ------------------------------------------------------------------------


//START SERVICES ARCHIVE PAGE ------------------------------------------------- START SERVICES ARCHIVE PAGE ------------------------------------------------------------------------

        var Services = Barba.BaseView.extend({
            namespace: 'services',
            onEnterCompleted: function() {

                startime();




// SCROLLMAGIC


                var controller = new ScrollMagic.Controller();




                var pojavServtMain = new TimelineMax();
                pojavServtMain
                    .fromTo($('.logoss-black-top'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone})
                    .fromTo($('h1.text-project.noafter'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},'=-0.5')
                    .staggerFromTo($('.title-srv'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},0.2,'=-0.8')
                    .staggerFromTo($('.desc-srv'),0.7,{y:'50px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},0.2,'=-0.9')
                    .staggerFromTo($('.image-srv'),0.7,{y:'50px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},0.2,'=-0.9')
                    .staggerFromTo($('.desctwo-srv'),0.7,{y:'50px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},0.2,'=-0.9')
                    .staggerFromTo($('.btnlink-srv'),0.7,{y:'50px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},0.2,'=-0.9');


                var OurScenaServ = new ScrollMagic.Scene({
                    triggerElement: ('.logoss-black-top'),
                    triggerHook: 1
                })
                    .setTween(pojavServtMain)
                    .addTo(controller);



                var pojavText = new TimelineMax();
                pojavText
                    .fromTo($('.h2block-text'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone})
                    .staggerFromTo($('.column-ttx>p'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},0.2,'=-0.4');


                var OurScenaText = new ScrollMagic.Scene({
                    triggerElement: ('.h2block-text'),
                    triggerHook: 0.8
                })
                    .setTween(pojavText)
                    .addTo(controller);




//SERVICES POJAVLENIE

                var pojavServ = new TimelineMax();
                pojavServ
                    .staggerFromTo($('.items-services'),1,{y:'40px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power1.easeNone},0.3)
                    .staggerFromTo($('.textblock-serv'),1,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power1.easeNone},0.3,'=-1')
                    .staggerFromTo($('.number-items'),1,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power1.easeNone},0.3,'=-1.2');



                var OurScenaText = new ScrollMagic.Scene({
                    triggerElement: ('.services-select-block'),
                    triggerHook: 0.8
                })
                    .setTween(pojavServ)
                    .addTo(controller);





//HOVER CATEGORY PROJECTS
                $(".class-item-category").hover(function(){

                    TweenMax.to($(this),0.5,{color:"#ffffff", backgroundColor:"#000000", ease:Power1.easeOut});
                }, function(){
                    TweenMax.to($(this),0.5,{color:"#000000", backgroundColor:"#ffffff", ease:Power1.easeOut});
                });


//HOVER SERVICES PROJECTS
                $(".items-services").hover(function(){

                    TweenMax.to($(this).children('.blackmaskServ'),0.5,{autoAlpha:0.4, ease:Power1.easeOut});
                    TweenMax.to($(this).children('.textblock-serv'),0.5,{y:-20, ease:Back.easeOut});
                    TweenMax.to($(this).children('.number-items'),0.5,{y:-8, ease:Back.easeOut});
                }, function(){
                    TweenMax.to($(this).children('.blackmaskServ'),0.5,{autoAlpha:0, ease:Power1.easeOut});
                    TweenMax.to($(this).children('.textblock-serv'),0.5,{y:0, ease:Back.easeOut});
                    TweenMax.to($(this).children('.number-items'),0.5,{y:0, ease:Back.easeOut});
                });



//Image Project Logo Position

                $('.imagepr').each(function(){

                    var logoProject = $(this).children().children(".logoblock");
                    var heightLogo = (logoProject.height()/2);
                    var newHeight = logoProject.css("margin-top",-heightLogo)

                });


//HOVER FUNCTION

                $(".projectitem").hover(function(){

                    $(this).addClass('fadeinclass');
                }, function(){
                    $(this).removeClass('fadeinclass');
                });




                var tle = new TimelineMax();
                tle.staggerFromTo('.item-clients',1,{y:'80px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone}, 0.12);


//Partners Stagger
                var OurScenaStagger = new ScrollMagic.Scene({
                    triggerElement: '.padding-items-clients',
                    triggerHook: 0.7
                })
                    .setTween(tle)
                    .addTo(controller);



            }
        });


//END SERVICES ARCHIVE PAGE ------------------------------------------------- END SERVICES ARCHIVE PAGE ------------------------------------------------------------------------






//START CONTACTS PAGE ------------------------------------------------- START CONTACTS PAGE ------------------------------------------------------------------------


        var Contacts = Barba.BaseView.extend({
            namespace: 'contacts',
            onEnterCompleted: function() {

                startime();



// SCROLLMAGIC


                var controller = new ScrollMagic.Controller();




                var pojavContacts = new TimelineMax();
                pojavContacts
                    .fromTo($('.text-project'),0.7,{y:'40px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},"0.5")
                    .staggerFromTo($('.toptext-form'),0.7,{y:'50px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},0.2,'=-0.3')
                    .staggerFromTo($('input'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},0.2,'=-1')
                    .fromTo($('textarea'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},'=-0.6')
                    .fromTo($('.logoss-contact'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},'=-0.6')
                    .fromTo($('.adress-contact'),0.7,{y:'20px', autoAlpha:0},{y:0, autoAlpha:1, ease:Power2.easeNone},'=-0.6');



                var OurScenaPojavContacts = new ScrollMagic.Scene({
                    triggerElement: ('.text-project'),
                    triggerHook: 1
                })
                    .setTween(pojavContacts)
                    .addTo(controller);

//HOVER CATEGORY PROJECTS
                $("input[type='submit']").hover(function(){

                    TweenMax.to($(this),0.3,{color:"#000000", backgroundColor:"#fbfbfb", ease:Power1.easeOut});
                }, function(){
                    TweenMax.to($(this),0.3,{color:"#fbfbfb", backgroundColor:"#000000", ease:Power1.easeOut});
                });


// particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#000000"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":78.91476416322726,"color":"#000000","opacity":0.4,"width":1.1048066982851816},"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});




            }
        });


//END CONTACTS PAGE ------------------------------------------------- END CONTACTS PAGE ------------------------------------------------------------------------


        class ShapeOverlays1 {
            constructor(elm) {
                this.elm = elm;
                this.path = elm.querySelectorAll('path');
                this.numPoints = 4;
                this.duration = 800;
                this.delayPointsArray = [];
                this.delayPointsMax = 180;
                this.delayPerPath = 70;
                this.timeStart = Date.now();
                this.isOpened = false;
                this.isAnimating = false;
            }

            open() {
                this.isAnimating = true;
                const range = Math.random() * Math.PI * 2;
                for (var i = 0; i < this.numPoints; i++) {
                    const radian = (i / (this.numPoints - 1)) * Math.PI * 2;
                    this.delayPointsArray[i] = (Math.sin(radian + range) + 1) / 2 * this.delayPointsMax;
                }
                this.isOpened = true;
                this.timeStart = Date.now();
                this.renderLoop();
            }
            close() {
                this.isAnimating = true;
                const range = Math.random() * Math.PI * 2;
                for (var i = 0; i < this.numPoints; i++) {
                    const radian = (i / (this.numPoints - 1)) * Math.PI * 2;
                    this.delayPointsArray[i] = (Math.sin(radian + range) + 1) / 2 * this.delayPointsMax;
                }
                this.isOpened = false;
                this.timeStart = Date.now();
                this.renderLoop();
            }
            updatePath(time) {
                const points = [];
                for (var i = 0; i < this.numPoints; i++) {
                    points[i] = ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100
                }

                let str = '';
                str += (this.isOpened) ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
                for (var i = 0; i < this.numPoints - 1; i++) {
                    const p = (i + 1) / (this.numPoints - 1) * 100;
                    const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
                    str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
                }
                str += (this.isOpened) ? `V 0 H 0` : `V 100 H 0`;
                return str;
            }
            render() {
                if (this.isOpened) {
                    for (var i = 0; i < this.path.length; i++) {
                        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
                    }
                } else {
                    for (var i = 0; i < this.path.length; i++) {
                        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
                    }
                }
            }
            renderLoop() {
                this.render();
                if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
                    requestAnimationFrame(() => {
                        this.renderLoop();
                    });
                }
                else {
                    this.isAnimating = false;
                }
            }
        }





//FADEIN

        var FadeTransition = Barba.BaseTransition.extend({
            start: function() {

                Promise
                    .all([this.newContainerLoading, this.fadeOut()])
                    .then(this.fadeIn.bind(this));
            },

            fadeOut: function() {

                (function() {
                    //  const elmOverlay = document.querySelector('.shape-overlays-fadein');
                    //  const overlay = new ShapeOverlays1(elmOverlay);
                    // overlay.open();

                    $('.preloader').css({"visibility":"visible","opacity":"1"});



                }());

                return $(this.oldContainer).animate({ opacity: 1 }).delay( 1300 ).promise();
            },

            fadeIn: function() {


                var _this = this;
                var $el = $(this.newContainer);

                $(this.oldContainer).hide();

                $el.css({
                    visibility : 'visible',
                    opacity : 0
                });




                $el.animate({ opacity: 1 }, 1300, function() {


                    (function() {
                        //  const elmOverlay = document.querySelector('.shape-overlays-fadein');
                        //  const overlay = new ShapeOverlays1(elmOverlay);

                        // overlay.close();
                        $('body,html').animate({scrollTop: top}, 100);
                        $('.preloader').css({"visibility":"hidden","opacity":"0"});

                    }());


                    _this.done();
                });
            }
        });



        Barba.Pjax.getTransition = function() {
            return FadeTransition;
        };




        Homepage1.init();
        ProjectSingle.init();
        About.init();
        ProjectsArch.init();
        Services.init();
        Contacts.init();




        Barba.Pjax.start();

    }//End Client Width


// if((document.documentElement.clientWidth)<=1130){

// $('.imagepr').each(function(){
// var heightNew1130 = $(this).height()*0.8;

// $(this).css("height",heightNew1130)
// });

// }


// if((document.documentElement.clientWidth)<=964){

// $('.imagepr').each(function(){
// var heightNew964 = $(this).height()*0.7;

// $(this).css("height",heightNew964)
// });

// }


// if((document.documentElement.clientWidth)<=730){

// $('.imagepr').each(function(){
// var heightNew964 = $(this).height()*1.8;

// $(this).css("height",heightNew964)
// });

// }


});


if((document.documentElement.clientWidth)<=780){

    $( document ).ready(function() {

        $('.ss').css('opacity','1');





        $(".menu-lang").on("click","a", function (event) {
            $('.menu-lang-item:eq(1)').toggleClass("highlight");
        });




        var controller = new ScrollMagic.Controller();

        $('.imageprabs').each(function(){

            var OurSceneparallax = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.5,
                duration: '230%'
            })
                .setTween(TweenMax.fromTo(this,1,{y:'-10%'},{y:'14%', ease:Power2.easeNone}))
                .addTo(controller)
        });





//Parallax Scene
        var OurScena = new ScrollMagic.Scene({
            triggerElement: '.archi',
            triggerHook: 0.2,
            duration: '100%'
        })
            // .setClassToggle('.videoblock', 'fade-in')
            .setTween(TweenMax.to('.slide-image',1,{y:'20%', ease:Power2.easeNone}))
            .addTo(controller);



// $('.imagepr').each(function(){
// $(this).css("height",270)
// });


        $( ".menu-dot").on( "click", function() {
            $(".global-menu__item").addClass("is-opened");
            TweenMax.to($(".svgpath-mobile"),0.4,{autoAlpha:1, ease:Power2.easeInOut});
            TweenMax.to($(".closemenumob"),0.2,{autoAlpha:1, ease:Power2.easeInOut});

        });

        $( ".closemenumob").on( "click", function() {
            $(".global-menu__item").removeClass("is-opened");
            TweenMax.to($(".svgpath-mobile"),0.5,{autoAlpha:0, ease:Power2.easeInOut});
            TweenMax.to($(".closemenumob"),0.5,{autoAlpha:0, ease:Power2.easeInOut});
        });


        $( ".blackmenu .social").on( "click", function() {
            $('.blackmenu .absblock-social').toggleClass("highlight");
        });

    });

}


