var entrada1=0;
var nota1=0;

var entrada2=0;
var nota2=0;

var entrada3=0;
var nota3=0;

var sumaNotas=0;

var media=0;



entrada1=prompt("Introduce la primera nota: ");
// Parseo a float la primera nota. La coge como string.
nota1=parseFloat(entrada1);

// Compruebo que la nota sea el numero correcto.
while(nota1<0||nota1>10)
{
    console.error("Nota erronea")
    nota1=prompt("Introduce la primera nota entre 0 y 10: ");  
    console.log(nota1);
   
}
// Compruebo el valor de nota2.
// console.log("nota1 = " +nota1);

//---------------------------------------------
entrada2=prompt("Introduce la segunda nota: ");
// Parseo a float la segunda nota. La coge como string.
nota2=parseFloat(entrada2)

// Compruebo que la nota sea el numero correcto.
while(nota2<0||nota2>10)
    {
        console.error("Nota erronea")
        nota2=prompt("Introduce la segunda nota entre 0 y 10: ");
        
    }
    // Compruebo el valor de nota2.
    // console.log("nota2 = " +nota2);

// --------------------------------------------- 
entrada3=prompt("Introduce la tercera nota: ");
// Parseo a float la tercera nota. La coge como string.
nota3=parseFloat(entrada3);

// Compruebo que la nota sea el numero correcto.
while(nota3<0||nota3>10)
    {
        console.error("Nota erronea")
        nota3=prompt("Introduce la tercera nota entre 0 y 10: "); 
        
    }
     
    // Compruebo el valor de nota2.
    // console.log("nota3 = " +nota3);

// Calculos y muestro los valores

    sumaNotas=nota1 + nota2 + nota3;
    media=sumaNotas/3;
    // console.log(sumaNotas);
    console.log("La media de las tres notas es: "+ media);

    if(media>=5)
        {
            console.log("El alumno esta aprobado");
        }
        else
        {
            console.log("El alumno esta suspenso");
        }