function maquina(){
    var vezes = parseInt(prompt("Informe a quantidade de compras que você realizou: ", ""))
    if(vezes>0){
    for(let a=0;a<vezes; a++){
    var valor = parseFloat(prompt("Informe o valor da compra: ", ""))
    if(valor){
    var pagamento = parseFloat(prompt("Informe o valor em reais que você pagará: ", ""))
    if(pagamento){
        if(pagamento>valor){
            var troco = parseFloat(pagamento-valor)
            var nota50=0, nota20=0, nota10=0, nota5=0, nota2=0, nota1=0
            var trocofinal= parseFloat(troco)
            for(let i=0; i<100; i++){
                if(troco<50){
                    i=100
                }else{
                    troco=troco-50
                    nota50++
                }
            }
            for(let j=0; j<100; j++){
                if(troco<20){
                    j=100
                }else{
                    troco=troco-20
                    nota20++
                }
            }
            for(let h=0; h<100; h++){
                if(troco<10){
                    h=100
                }else{
                    troco=troco-10
                    nota10++
                }
            }
            for(let k=0; k<100; k++){
                if(troco<5){
                    k=100
                }else{
                    troco=troco-5
                    nota5++
                }
            } 
            for(let l=0; l<100; l++){
                if(troco<2){
                    l=100
                }else{
                    troco=troco-2
                    nota2++
                }
            }
            for(let m=0; m<100; m++){
                if(troco==0){
                    m=100
                }else{
                    troco=troco-1
                    nota1++
                }
            }
            alert("Valor pago na "+(a+1)+"° Compra: R$ "+pagamento+"\nValor da "+(a+1)+"° Compra: R$ "+valor+"\nTroco: R$ "+trocofinal+"\nNotas de R$ 50,00: "+nota50+"\nNotas de R$ 20,00: "+nota20+"\nNotas de R$ 10,00: "+nota10+"\nNotas de R$ 5,00: "+nota5+"\nNotas de R$ 2,00: "+nota2+"\nMoedas de R$ 1,00: "+nota1)
        }else if(pagamento==valor){
         alert("Compra efetuada com sucesso!")   
            }else{
            alert("A quantia paga é insuficiente para realizar a compra!")
        }
            }else{
        alert("É necessário informar um valor para efetuar o pagamento.\nCompra cancelada!")
        }
            }else{
        alert("Até outro dia!")
        }
    }    
}else{
    alert("Até outro dia!")
}
}
function media(){
    var a = parseInt(a=0);
    var numero = parseFloat(numero=0)
    var contador = parseInt(contador=0)
    while(a<10){
        var num= parseFloat(prompt("Informe um número: ", ""))
        if(!Number.isNaN(num)){
            numero=numero+num;
            contador++;
            console.log(numero)
        }else if(!Number.isNaN(numero)){
           var numerofinal=(numero/(contador));
           console.log(contador)
            a=11;
            alert("A média dos números informados é: "+numerofinal)
        }else{
            alert("Até outro dia")
            a=11;
        }
    }
}