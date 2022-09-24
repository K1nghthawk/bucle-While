let cantidad;

cantidad = prompt("Ingresa la cantidad de veces a repetir el mensaje:");

if (cantidad>0) {

            while (cantidad>0) {
            document.write ("Hola Mundo!"+"<br>");
            cantidad --;
            }
            }
    else if (cantidad <= 0) {
            alert ("Ingresa un número mayor a 0");
            }
            else {
                alert ("Ingresa un valor númerico.")
            }