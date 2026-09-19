

function sendMessage() {

    const name = document.getElementById("contactName");
    const email = document.getElementById("contactEmail");
    const subject = document.getElementById("contactSubject");
    const message = document.getElementById("contactMessage");

  
    if (!name || !email || !subject || !message) {
        return;
    }

    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();


    if (!nameValue || !emailValue || !subjectValue || !messageValue) {

        alert("Please complete all fields before sending your message.");

        return;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(emailValue)) {

        alert("Please enter a valid email address.");

        return;
    }


    alert(
        "Thank you, " +
        nameValue +
        "! Your message has been received."
    );


    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
}





function updateCartCount() {

    let cart =
        JSON.parse(localStorage.getItem("eliteCart")) || [];

    const cartCount =
        document.getElementById("cartCount");


    if (cartCount) {

        cartCount.textContent = cart.length;

    }

}


document.addEventListener("DOMContentLoaded", function () {

    updateCartCount();

});