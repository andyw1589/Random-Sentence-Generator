import { sentence } from "./generators.js";

window.onload = () => {
    const button = document.getElementById("generate");
    const sentenceDiv = document.getElementById("sentence");

    button.addEventListener("click", () => sentenceDiv.innerHTML = sentence());
};