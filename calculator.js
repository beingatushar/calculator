let string = "";
const result = document.querySelector("#textbox");
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let operation = e.target.innerText;
        if (operation === "=") {
            string = (Math.round(eval(string) * 100) / 100) + "";
        } else if (operation === "AC") {
            string = "";
        } else if (operation === "x") {
            string = string.substring(0, string.length - 1);
        } else if (operation === "switch") {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.toggle("dark");
                buttons[i].classList.toggle("light");
            }
            document.getElementById("textbox").classList.toggle("light");
            document.getElementById("calculator").classList.toggle("light");
            document.getElementById("textbox").classList.toggle("dark");
            document.getElementById("calculator").classList.toggle("dark");
            document.querySelector("body").classList.toggle("dark");
            document.querySelector("body").classList.toggle("light");
        } else {
            string += operation;
        }
        result.innerText = string;
    })
})