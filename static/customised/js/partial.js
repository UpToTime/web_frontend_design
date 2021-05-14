//all JavaScript code


//jquery functions
$(document).ready(function() {
    //"use strict";

    $('.fixation').visibility({
        type: 'fixed',
        offset: 10, // give some space from top of screen
        bottomOffset: 5
    });

    $('[data-sticks-to]').sticky({
        offset: 100,
        bottomOffset: 20,
        pushing: true,
        //observeChanges: true,
        context: $("[data-sticks-to]").data('sticks-to')
    }); //end

    $('.ui.menu .ui.dropdown:not(.simple)').dropdown( {
        on: 'click',
        transition: 'slide'
        // action: 'combo'
    }
    );

    $('.ui.menu .dropdown.noAction').dropdown( {

        transition: 'fade in'
        //action: 'hide'
    }
    ); //end

    //close alerting message
    $('.message .close').on('click', function(event) {
        event.preventDefault();
        $(this).closest('.message').transition('fade');
    });



    //animation on some elements

    //some element animation
    /*
    $('header .hasAnimation').visibility({
        //once: false,
        onOnScreen: function() {
            $(this).transition({

                animation: "tada",
                duration: "2s"
            });

        }//end of onOnScreenfunc

    });

    $('main .hasAnimation').visibility({
        //once: false,
        onOnScreen: function() {
            $(this).transition({

                animation: "bounce",
                duration: "3s"
            });

        }//end of onOnScreenfunc

    });
*/

    /* activate tab*/
    $('.tabbed [data-tab]')
    .tab();

    /* $('[data-tabbed]').on('click', function(event) {
        event.preventDefault();
        var tabsName = $(this).data("tabbed");
        // programmatically activating tab
        // $.tab('change tab', '[data-tab="'+tabsName+'"]');
        var tb = $(".ui.tab").tab(
            'change tab', tabsName
        );
        console.log(tb);
    });
*/
    $('[data-modal-triggerer]').on('click', function(event) {
        event.preventDefault();
        //get the data attr value
        var triggeredModal = $(this).data("modal-triggerer");
        //show the modal
        $('[data-modal-triggered="'+triggeredModal+'"]').modal(
            {
                blurring: true,
                closable: false,
                transition: 'fade in'
            }
        ).modal('show');
    }); //end of func

    $('.ui.form.stateful').api({
        url: $(this).attr('action'),
        loadingDuration: 3000
    });

    $('.ui.button.stateful').api({
        url: "#0",
        loadingDuration: 3000
    });


    $('.lazy_loaded').visibility({
        type: 'image',
        transition: 'fade in',
        duration: 100
    });

    // accordion initialised
    $(".accordion").accordion();

    // Wont re-appear unless cleared
    $('.cookie.nag').nag({
        key: 'accepts-cookies',
        value: true,
        silent: true
    }).nag('show');

    $('.selection.dropdown').dropdown({
        on: 'click',
        // you can use any ui transition
        transition: 'slide'
        //action: 'combo'
    });


    $('.rating.activated').rating("disable");

    $('.ui.dimmable .dimmer').dimmer({
        on: 'hover'
    });

    $('.hasDimmerItem .triggerDimmer').dimmer({
        on: 'hover'
    });


    $('[data-side-changed]').on('click',
        function(event) {
            event.preventDefault();
            var shapeSide = $(this).data("side-changed");
            //var buttonIcon = $(this).children();
            var buttonIcon = $(this);
            var buttonIcons = buttonIcon.siblings();
            var parentShape = buttonIcon.parent().siblings('.ui.shape');
            //$('.ui.shape')
            parentShape.shape(
                'set default side', '[data-side="'+shapeSide+'"]'
            ).shape('flip up');
            if (buttonIcons.hasClass("green")) {
                buttonIcons.removeClass("green");
            }//end of if statement
            //add green icon  to pressed button
            buttonIcon.addClass("green");


        }
    );

    var ChangeShapeSide = function() {

        $('.ui.people.shape').shape(
            {
                duration: 1000,
                beforeChange: function() {},
                onChange: function () {
                    //
                    var activeSide = $(this).data('side');
                    var buttonHasIcon = $('[data-side-changed="'+activeSide+'"]');
                    //console.log(buttonHasIcon);

                    /*  buttonHasIcon.children().addClass("green");
                    buttonHasIcon.siblings().children().removeClass("green");
                    */
                    buttonHasIcon.siblings().removeClass("green");
                    buttonHasIcon.addClass("green");

                    //
                }//end of func
            }
        ).shape('flip down');



    }; //end of func



    setInterval(ChangeShapeSide,
        5000);




    //insert year in footer
    var yearInsert = $('#insertedDate');
    var curYear = new Date().getFullYear();

    yearInsert.text(curYear);



    //shape initialised with button click



}); //end of ready function

//scroll by JavaScript
/*
var anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(function(anchor) {
    anchor.addEventListener('click',
        function(event) {
            event.preventDefault();

            document.querySelector(
                this.getAttribute('href')
            ).scrollIntoView({
                    behavior: 'smooth'
                });

        });
}); //the end
*/