function cambiar() {
    const meses = ["...", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const indice = document.getElementById("lista").selectedIndex;
    const invierno = [12, 1, 2];
    const primavera = [3, 4, 5];
    const verano = [6, 7, 8];
    const otoño = [9, 10, 11];
    if (indice >= 0 && indice < meses.length) {
        document.getElementById("res").innerText = meses[indice];
    } else {
        alert("Seleccione una opción");
    }
    if (invierno.includes(indice)) {
        document.getElementById("esta").innerText = "En ese mes hay invierno";
    }
    else if (primavera.includes(indice)) {
        document.getElementById("esta").innerText = "En ese mes hay primavera";
    }
    else if (verano.includes(indice)) {
        document.getElementById("esta").innerText = "En ese mes hay verano";
    }
    else if (otoño.includes(indice)) {
        document.getElementById("esta").innerText = "En ese mes hay otoño";
    }
    else
    {
        document.getElementById("esta").innerText = "...";
    }
}