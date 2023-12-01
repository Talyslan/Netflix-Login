const visiblePass = document.getElementById("visiblePass");
const labelPass = document.getElementById("labelPass");
const password = document.getElementById("password");
const email = document.getElementById("user");
const btn = document.querySelector("button");

// Appear option to Visibility
const appearOption = () => visiblePass.style.display = "inline-block";
const disappearOption = () => visiblePass.style.display = "none";

password.addEventListener("focus", appearOption);
// labelPass.addEventListener("mouseleave", disappearOption);

// Input Password Visible/Invisible
function changeVisibility() {
    if (password.type === "password") {
        password.type = "text";
        visiblePass.innerHTML = "Ocultar";
    }
    else {
        password.type = "password";
        visiblePass.innerHTML = "Mostrar";

    } 
}

visiblePass.addEventListener("click", changeVisibility);

// Quando apertar o botão
//classe : requiredInput
// const verificationInputs = () => {
//     const passwordValue = document.getElementById("password").value;
//     const emailValue = document.getElementById("user").value;

//     if(!emailValue.contains("@")) {
//         email.classList.add("requiredInput")
//     }
// };

// email.addEventListener("focus", verificationInputs);