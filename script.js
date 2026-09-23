const codes = document.querySelectorAll(".code");

for (let i = 0; i < codes.length; i++) {

    codes[i].addEventListener("input", function () {

        if (codes[i].value !== "" && i < codes.length - 1) {
            codes[i + 1].focus();
        }

    });

    codes[i].addEventListener("keydown", function (event) {

        if (event.key === "Backspace" && codes[i].value === "" && i > 0) {
            codes[i - 1].value = "";
            codes[i - 1].focus();
        }

    });

}