/* =====================
   OPEN MENU
===================== */

function openMenu(){

    document.getElementById("sidebar").style.right = "0";
    document.getElementById("overlay").style.display = "block";

}

/* =====================
   CLOSE MENU
===================== */

function closeMenu(){

    const sidebar = document.getElementById("sidebar");

    if(window.innerWidth <= 768){

        sidebar.style.right = "-75%";

    }else{

        sidebar.style.right = "-50%";

    }

    document.getElementById("overlay").style.display = "none";

}

/* =====================
   SHOW COMING SOON
===================== */

function showComing(element){

    let next = element.nextElementSibling;

    if(next && next.classList.contains("coming")){

        next.remove();
        return;

    }

    let text = document.createElement("div");

    text.className = "coming";

    text.innerText = "سيظهر قريباً";

    element.insertAdjacentElement("afterend", text);

}

/* =====================
   INITIAL STATE
===================== */

window.onload = function(){

    closeMenu();

}