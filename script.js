const button = document.getElementById("meinButton");
const ausgabe = document.getElementById("ausgabe");

button.addEventListener("click", function () {
    ausgabe.textContent = "Es funktioniert!";
});
