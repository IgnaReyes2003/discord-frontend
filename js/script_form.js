const login = document.querySelector(".login-section"),
    signupLink = document.querySelector(".signup-link"), 
    loginLink = document.querySelector(".signin-link");    

signupLink.addEventListener("click", () => {
    login.classList.add("active");
});

loginLink.addEventListener("click", () => {
    login.classList.remove("active");
});