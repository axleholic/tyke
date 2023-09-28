window.onscroll = changePos;

function changePos() {
    var header = document.getElementById("navigation");
    if (window.pageYOffset > 70) {
        header.style.position = "absolute";
        header.style.top = pageYOffset + "px";
        header.style.transition ="position 0.5s"
    } else {
        header.style.position = "";
        header.style.top = "";
    }
}