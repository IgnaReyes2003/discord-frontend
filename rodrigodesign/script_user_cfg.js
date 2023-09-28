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
        previewImage.src = ''; // Limpiar la vista previa si no se selecciona ningún archivo
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const eliminarLink = document.querySelector(".signup-link");
    const modal = document.getElementById("modal");
    const confirmInput = document.getElementById("confirmInput");
    const closeModal = document.getElementById("closeModal");
    const cancelarModalButton = document.getElementById("cancelarModalButton"); // Nuevo botón "Cancelar"

    // ...

    cancelarModalButton.addEventListener("click", function () {
        modal.style.display = "none"; // Cierra la ventana modal
    });

    // ...
});
