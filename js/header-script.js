let icon = document.querySelector(".icon_menu_and_close");
function toggleMenu(menuid) {
    let menu = document.getElementById("menu_header");
    if (menu.style.top === "-400px") {
        icon.style.backgroundImage = "url(../svg/icon_close.svg)";
        menu.style.top = "80px";
    } else {
        icon.style.backgroundImage = "url(../svg/icon_menu.svg)";
        menu.style.top = "-400px";
    }
}