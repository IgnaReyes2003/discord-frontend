document.addEventListener("DOMContentLoaded", function () {
    const eliminarLink = document.querySelector(".signup-link");
    const modal = document.getElementById("modal");
    const confirmInput = document.getElementById("confirmInput");
    const closeModal = document.getElementById("closeModal");

    eliminarLink.addEventListener("click", function () {

        modal.style.display = "block";
        confirmInput.value = "";

        closeModal.addEventListener("click", function () {
            // Cerrar el modal
            modal.style.display = "none";
        });
        
        const eliminarButton = document.getElementById("eliminarButton");
        eliminarButton.addEventListener("click", function () {
            const inputText = confirmInput.value.trim().toUpperCase();
            if (inputText === "ELIMINAR") {
                // Añadir conexión al servidor
                modal.style.display = "none";
            } else {
                // Mostrar un mensaje de error si el input no coincide
                alert("Por favor, escribe 'ELIMINAR' para confirmar.");
            }
        });
    });
});

/* Selección de elementos de la barra lateral (sidebar) */
const sidebarLinks = document.querySelectorAll('.sidebar a');
const sections = document.querySelectorAll('.section');

sidebarLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        // Comprobamos si el usuario clickeo "inicio" o "cerrar sesión"
        if (this.getAttribute('data-section') !== 'inicioSection' && this.getAttribute('data-section') !== 'cerrarSesionSection') {
            event.preventDefault();
        
        sidebarLinks.forEach(item => item.classList.remove('active'));
        // Agregamos la clase "active"
        this.classList.add('active');

        // Esto oculta lo demás
        sections.forEach(section => section.style.display = 'none');

        const targetSectionId = this.getAttribute('data-section');
        const targetSection = document.getElementById(targetSectionId);

        // Muestra la sección seleccionada
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }});
});

// Visualización de la foto de perfil ded usuario y controla los eventos

document.getElementById('profilePicture').addEventListener('change', function(e) {
    const previewImage = document.getElementById('previewImage');
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        previewImage.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        previewImage.src = '/img/default_profile.png'; // pondrá una imagen por defecto
    }
});

// Cerrar sesión