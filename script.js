window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("Siden er loadet");
}


$(document).ready(function () {
    $("button").click(function () {
        $("ul").toggle(500);
    });
});
