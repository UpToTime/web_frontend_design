/*
information about me displayed while in debug mode
i.e web page console page
*/


var styles = "font-size:1.25rem;font-weight:bolder;font-style:italic;";
var styles2 = "font-size:0.8rem;font-weight:bold;";
var combo = "background-color: #ffffff80;color:whitesmoke; border-radius:10px;border:1px solid #ffffff2e;"
var heading = `content developed by\n
UpToTime enterprise`;


console.log(`%c${heading}`, styles+combo);
console.log(`%cgithub link - https://github.com`, styles2+combo);
console.log(`%cemail link - uptotimeservices@gmail.com`, styles2+combo);

/*console.group(`%c`);
console.groupEnd();*/

/* start of theme switcher button functionality */
var ThemingBtn = document.getElementById("ThemeSwither");
var icon = document.getElementById("ThemeSwitherIcon");

ThemingBtn.onclick = function(event) {
    event.preventDefault();
    document.body.classList.toggle("darken");

    // change the icon displayed
    if (document.body.classList.contains("darken")) {
        ThemingBtn.src = "./icon/file/path";
    } else {
        ThemingBtn.src = "./icon/file/path";
    }
    // end of if functionality
};

/* end of theme switcher button functionality */