// counting effect on elements
$(document).ready(function() {
    //counter animation

    function startCounts (dom_element) {
        $(dom_element).each(
            function() {
                //get the counter attr
                var counterItem = $(this);
                var countedTo = counterItem.attr("data-counted");
                //console.log(countedTo);
                $({
                    counterNum: counterItem.text()
                }).animate(
                    {
                        counterNum: countedTo
                    },
                    //
                    {
                        duration: 10000,

                        step: function() {
                            //increase the txt value
                            counterItem.text(Math.floor(this.counterNum));
                            //console.log(counterItem)
                        },
                        //end of step function
                        complete: function () {
                            //change the text value
                            counterItem.text(this.counterNum + "+"); //end
                        }//end of complete function

                    } //end of animate logic

                ); //end of animate function

            }); //end of each
    } // end of func

    $('.countables_wrapper').visibility({

        //once: false,

        onOnScreen: function() {
            /* $(this).addClass("activated");*/
            startCounts(".countables");
        }//end of onOnScreenfunc
    });





}); //end of ready function