const checkbox = document.getElementById("hb-menu_check");

checkbox.addEventListener("change", (e) => {
    console.log(e.target.checked)
    if (e.target.checked) {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "auto";
    }
})