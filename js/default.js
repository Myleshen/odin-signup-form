let button = document.querySelector("#form-submit")


button.addEventListener('click', (event) => {
    let pass = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirmPassword");
    console.log(pass.value, confirmPassword.value);
    if(pass.value != confirmPassword.value) {
        pass.classList.add("error");
        confirmPassword.classList.add("error");
    } else {
        pass.classList.remove("error");
        confirmPassword.classList.remove("error");
    }
    event.preventDefault();
})
