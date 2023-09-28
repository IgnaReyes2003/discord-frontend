const login = document.querySelector(".login-section"),
    signupLink = document.querySelector(".signup-link"), 
    loginLink = document.querySelector(".signin-link");    

signupLink.addEventListener("click", () => {
    login.classList.add("active");
    login.style.height = "600px"; // Cambia la altura a 600px
});

loginLink.addEventListener("click", () => {
    login.classList.remove("active");
    login.style.height = "490px"; // Cambia la altura a 490px
});

/* Fecha de nacimiento*/
document.addEventListener("DOMContentLoaded", function () {
    const birthdateInput = document.getElementById("birthdate");

    // Función para mostrar el date picker al hacer clic en el campo de fecha de nacimiento
    birthdateInput.addEventListener("click", function () {
        if (this.value === "") {
            this.type = "date";
        }
    });

    // Función para restablecer el campo si el usuario no selecciona una fecha y hace clic fuera de él
    birthdateInput.addEventListener("blur", function () {
        if (this.value === "") {
            this.type = "text";
            this.value = ""; // Restablece el valor del campo
        }
    });

    // Función para mantener el campo como tipo "text" si se selecciona una fecha
    birthdateInput.addEventListener("change", function () {
        if (this.value !== "") {
            this.type = "text";
        }
    });
});

// Validación de datos
document.querySelector('.formbox.register form').addEventListener('submit', function(event) {
    event.preventDefault();

    var password = event.target.querySelector('input[type="password"]').value;
    var birthdate = new Date(event.target.querySelector('input[id="birthdate"]').value);
    var today = new Date();

    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
    if (!password.match(passwordRegex)) {
        alert('La contraseña debe tener entre 8 y 15 caracteres, incluyendo al menos una minúscula, una mayúscula y un número.');
        return false;
    }

    var age = today.getFullYear() - birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    if (age < 16) {
        alert('Debes tener al menos 16 años para registrarte.');
        return false;
    }

    // Aquí puedes agregar el código para enviar el formulario
});