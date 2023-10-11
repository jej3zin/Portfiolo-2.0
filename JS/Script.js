/* Dark Mode */
document.addEventListener("DOMContentLoaded", () => {
    const darkModeStorage = localStorage.getItem("dark-mode");
    const html = document.querySelector("html");
    const inputDarkMode = document.getElementById("input-dark-mode");

    if (darkModeStorage) {
        html.setAttribute("dark", "true");
    }

    inputDarkMode.addEventListener("change", () => {
        if (inputDarkMode.checked) {
            html.setAttribute("dark", "true");
            localStorage.setItem("dark-mode", true);
        } else {
            html.removeAttribute("dark");
            localStorage.removeItem("dark-mode");
        }
    });
});

const $html = document.querySelector("html");
const $checkbox = document.querySelector("#switch");
const themeSystem = localStorage.getItem("themeSystem") || "dark";

$checkbox.addEventListener("change", function () {
    $html.classList.toggle("dark-mode");
});
