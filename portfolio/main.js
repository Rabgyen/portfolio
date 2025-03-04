const resetBtn = document.getElementById("submit");
const inputFields = document.getElementsByClassName("form-input");

resetBtn.addEventListener('click', () => {
    setTimeout(() => {
        for (let i = 0; i < inputFields.length; i++) {
            inputFields[i].value = '';
        }
    }, 2000);
});