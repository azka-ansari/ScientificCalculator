
const themeSwitch = document.querySelector(".theme-switch__checkbox");
themeSwitch.addEventListener("change", function () {
    document.body.classList.toggle("light-mode", !themeSwitch.checked);
});

const button = document.querySelectorAll(".btn");
const input = document.querySelector("#input");
const result = document.querySelector("#equals");

// console.log(button);
button.forEach((button) => {
    button.addEventListener("click", () => {
        // console.log();
        input.value += button.innerText

    });
});

result.addEventListener("click", () => {
    let outPut = eval(input.value);
    input.value = outPut;
});

const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
    input.value = ""
});

// --scientific-- //

const normalBtn = document.querySelector("#normalBtn");
const scientificBtn = document.querySelector("#scientificBtn");
const scientificPanel = document.querySelector("#scientificPanel");

scientificBtn.addEventListener("click", () => {
    scientificPanel.hidden = false;

    scientificBtn.classList.add("active");
    normalBtn.classList.remove("active");
});

normalBtn.addEventListener("click", () => {
    scientificPanel.hidden = true;

    normalBtn.classList.add("active");
    scientificBtn.classList.remove("active");
});

const scientificButtons = document.querySelectorAll("[data-scientific]");

scientificButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (input.value.trim() === "") return;

        const action = button.dataset.scientific;

        if (action === "power") {
            input.value += "**";
            return;
        }

        let value;

        try {
            value = Number(eval(input.value));
        } catch {
            input.value = "Error";
            return;
        }

        switch (action) {
            case "sin":
                input.value = Math.sin(value * Math.PI / 180);
                break;

            case "cos":
                input.value = Math.cos(value * Math.PI / 180);
                break;

            case "tan":
                input.value = Math.tan(value * Math.PI / 180);
                break;

            case "log":
                input.value = value > 0 ? Math.log10(value) : "Error";
                break;

            case "ln":
                input.value = value > 0 ? Math.log(value) : "Error";
                break;

            case "sqrt":
                input.value = value >= 0 ? Math.sqrt(value) : "Error";
                break;

            case "square":
                input.value = value ** 2;
                break;

            case "reciprocal":
                input.value = value !== 0 ? 1 / value : "Error";
                break;

            case "factorial": {
                if (value < 0 || !Number.isInteger(value) || value > 170) {
                    input.value = "Error";
                    break;
                }

                let answer = 1;

                for (let i = 2; i <= value; i++) {
                    answer *= i;
                }

                input.value = answer;
                break;
            }
        }
    });
});