document.addEventListener('DOMContentLoaded', function () {
    const userForm = document.getElementById('userForm');

    userForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita que el formulario se envíe de inmediato

        // Obtener los valores del formulario
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        const profilePicture = document.getElementById('profilePicture').value;

        // Aquí puedes enviar los datos al servidor para actualizar el usuario

        // Ejemplo de impresión en la consola
        console.log('Nuevo Nombre de Usuario:', username);
        console.log('Nueva Contraseña:', password);
        console.log('Nuevo Correo Electrónico:', email);
        console.log('Nueva Foto de Perfil:', profilePicture);
    });
});
