//your JS code here. If required.
// button ko select karo
let button = document.querySelector("input[type='button']");

// click event lagao
button.addEventListener("click", function () {

    let select = document.getElementById("colorSelect");

    // selected option remove karo
    if (select.selectedIndex !== -1) {
        select.remove(select.selectedIndex);
    }

});
