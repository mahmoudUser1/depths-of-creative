let icon = document.querySelector(".icon_menu_and_close");
function toggleMenu(menuid) {
    let menu = document.getElementById("menu_header");
    if (menu.style.top === "-400px") {
        icon.classList.add("close-icon");
        menu.style.top = "80px";
    } else {
        icon.classList.remove("close-icon");
        menu.style.top = "-400px";
    }
}
