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

/* Script para que el usuario seleccione su foto de perfil*/
var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
};

/* Selección de elementos de la barra lateral (sidebar) */
const sidebarLinks = document.querySelectorAll('.sidebar a');
const sections = document.querySelectorAll('.section');

sidebarLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        
        sidebarLinks.forEach(item => item.classList.remove('active'));
        // Agregar la clase "active"
        this.classList.add('active');

        // Ocultar todo
        sections.forEach(section => section.style.display = 'none');

        const targetSectionId = this.getAttribute('data-section');
        const targetSection = document.getElementById(targetSectionId);

        // Mostrar la sección seleccionada
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    });
});