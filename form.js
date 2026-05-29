function handlePhone(el) {
    el.value = el.value.replace(/\D/g, '');
    let error = document.getElementById("error");

    if (el.value.length === 10) {
        error.textContent = "";
    } else {
        error.textContent = "Enter 10-digit number";
    }
}


function submitForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value;

    if (!name || !email || phone.length !== 10) {
        alert("Invalid details");
    } else {
        showPopup();
    }
}

let timer;

function showPopup() {
    let popup = document.getElementById("popup");
    let content = document.getElementById("popupContent");

    popup.style.display = "flex";
    content.style.animation = "fadeIn 0.3s forwards";

    timer = setTimeout(closePopup, 4000);
}

function closePopup() {
    let popup = document.getElementById("popup");
    let content = document.getElementById("popupContent");

    clearTimeout(timer);

    content.style.animation = "fadeOut 0.25s forwards";

    setTimeout(() => {
        popup.style.display = "none";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("error").textContent = "";
    }, 250);
}