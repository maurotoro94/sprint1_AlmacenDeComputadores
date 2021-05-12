var cantidad = 0;
var valor = 0;
var descuento = 0;
var valorcompra= 0;
var totalpagar= 0;


function Calcular(){
    
    cantidad = document.getElementById('cantidad').value;
    console.log(cantidad);

   valorcompra= cantidad* 820000;
   console.log(valorcompra);

   if (valorcompra == 820000 || valorcompra > 9840000){
    totalpagar = valorcompra;
    
        document.getElementById("valordelacompra").value = valorcompra;
        document.getElementById("valordedescuento").value = 0;
        document.getElementById("totalaPagar").value = totalpagar;
        console.log(totalpagar);
    }

 else if(valorcompra >=1640000 && valorcompra <=3280000){
        totalpagar = valorcompra - (valorcompra * 0.15);
        document.getElementById("valordelacompra").value = valorcompra;
            document.getElementById("valordedescuento").value = (valorcompra * 0.15);
            document.getElementById("totalaPagar").value = totalpagar;
            console.log(totalpagar);
        }

 else if(valorcompra >3280000 && valorcompra <=6560000){
            totalpagar = valorcompra - (valorcompra * 0.25);
            document.getElementById("valordelacompra").value = valorcompra;
            document.getElementById("valordedescuento").value = (valorcompra * 0.25);
            document.getElementById("totalaPagar").value = totalpagar;
            console.log(totalpagar);
           }

 else if (valorcompra >6560000 && valorcompra <=9840000){
            totalpagar = valorcompra - (valorcompra * 0.35);
            document.getElementById("valordelacompra").value = valorcompra;
            document.getElementById("valordedescuento").value = (valorcompra * 0.35);
            document.getElementById("totalaPagar").value = totalpagar;
            console.log(totalpagar);
           }
 else{

 }

}