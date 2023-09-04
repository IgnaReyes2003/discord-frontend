const wrapper = document.querySelector(".wrapper"),
    signupHeader = document.querySelector(".regist header"), 
    loginHeader = document.querySelector(".inic header");    

loginHeader.addEventListener("click", () => {
    wrapper.classList.add("active");
});

signupHeader.addEventListener("click", () => {
    wrapper.classList.remove("active");
});