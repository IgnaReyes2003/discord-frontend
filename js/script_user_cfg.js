document.addEventListener("DOMContentLoaded", function () {
    const changeProfileButton = document.getElementById("changeProfileButton");
    const profileOptions = document.getElementById("profileOptions");
    const cancelOption = document.getElementById("cancelOption");

    changeProfileButton.addEventListener("click", function (event) {
        event.stopPropagation();
        profileOptions.style.display = "block";
    });

    cancelOption.addEventListener("click", function () {
        profileOptions.style.display = "none";
    });

    document.addEventListener("click", function (event) {
        if (!profileOptions.contains(event.target) && event.target !== changeProfileButton) {
            profileOptions.style.display = "none";
        }
    });
});

