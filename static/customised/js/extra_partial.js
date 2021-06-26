var txinput = document.querySelector(".limited_text_content");

function ValidateTextLimit(event) {
    var LimitedElement = event.target; //textarea element
    var MaxLengthSet = LimitedElement.maxLength;
    var CurrentLength = LimitedElement.value.length;
    //length of typed text
    var ParentWrapper = LimitedElement.parentElement;
    var ParentWrapperText = MaxLengthSet - CurrentLength;
    ParentWrapper.setAttribute("data-limit-value", ParentWrapperText);

    if (CurrentLength > MaxLengthSet) {
        // change text color on pseudo element
        console.log("too much");
    }
}

txinput.oninput = ValidateTextLimit;