function sumar() 
{
    // Obtener los valores ingresados
    var num1 = parseFloat(document.querySelector('.num1').value);
    var num2 = parseFloat(document.querySelector('.num2').value);

    // Verificar si los valores son números
    if (!isNaN(num1) && !isNaN(num2)) // la funcion isNan sirve para detectar si es un string
    {
        // Realizar la operación de suma
        var resultado = num1 + num2;

        // Mostrar el resultado en el elemento HTML
        document.querySelector('.resul').innerText = resultado;
    } 
    else 
    {
        // Manejar el caso en que los valores no sean números
        document.querySelector('.resul').innerText = 'Ingrese números válidos SUBNORMAL XDDDD mocos';
    }
}
