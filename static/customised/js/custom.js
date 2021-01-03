//all JavaScript code


//jquery functions
$(document).ready(function() {

    $('.sticks').sticky({
        offset: 50,
        bottomOffset: 10,
        //pushing: true,
        context: '#MainContent'
    }); //end

    $('.dropper').dropdown( {

        transition: 'fade in'
        //action: 'hide'
    }
    ); //end

    $('[data-modal-triggerer]').on('click', function(event) {
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


    $('.ui.rating').rating();

    $('.hasDimmerItem .triggerDimmer').dimmer({
        on: 'hover'
    });





}); //end of ready function