// Agrega este script al final del archivo HTML antes del cierre de </body>
document.addEventListener("DOMContentLoaded", function() {
    const barras = document.querySelectorAll(".barra");

    barras.forEach(barra => {
        const contBarra = barra.closest(".cont-barra");
        const porcentaje = parseInt(contBarra.querySelector("span").textContent);
        const barraColoreada = barra;
        barraColoreada.style.width = porcentaje + "%";
    });
});
