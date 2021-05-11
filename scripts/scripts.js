var cantidad = 0;
var valor = 0;
var descuento = 0;
var valorcompra= 0;
var totalpagar= 0;


function Calcular(){
    cantidad = document.getElementById('idCantidad').value;
    console.log(cantidad);

   valorcompra= cantidad*valor ;

   if (valorcompra = 820000){
    totalpagar = valorcompra ;
        document.getElementById('salario').value = salario;
        document.getElementById('descuento') .value = 0;
        document.getElementById('salarioapagar').value = salario;
        console.log(salario);
    }

 else if(valorcompra >=1640000 && valorcompra <=3280000){
        totalpagar = valorcompra - (valorcompra * 0.15);
            document.getElementById('salario').value = salario;
            document.getElementById('descuento').value = (valorcompra * 0.15);
            document.getElementById('salarioapagar').value = salario;
            console.log(salario);
        }

 else if(valorcompra >3280000 && valorcompra <=6560000){
            totalpagar = valorcompra - (valorcompra * 0.25);
            document.getElementById('salario').value = salario;
            document.getElementById('salarioextra').value = 0;
            document.getElementById('salarioapagar').value = salario;
            //console.log(salario);
           }

 else if(valorcompra >6560000 && valorcompra <=9840000){
            totalpagar = valorcompra - (valorcompra * 0.25);
            document.getElementById('salario').value = salario;
            document.getElementById('salarioextra').value = 0;
            document.getElementById('salarioapagar').value = salario;
            //console.log(salario);
           }

else(valorcompra > 9840000){
    totalpagar = valorcompra;
    document.getElementById('salario').value = salario;
    document.getElementById('salarioextra').value = 0;
    document.getElementById('salarioapagar').value = salario;
    //console.log(salario);
   }
 