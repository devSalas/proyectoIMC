window.onload = iniciar;

function iniciar(){
    
    const btn_boton= document.getElementById("btn-boton")
    btn_boton.addEventListener("click",evento)
}

function evento(){
    const textPeso= document.getElementById("text_peso")
    let peso = textPeso.value;
    
    const textAltura= document.getElementById("text_altura")
    let altura = textAltura.value;
    let operar = peso/(altura*altura)

    const textResultado =document.getElementById("text_resultado")
    textResultado.value =operar.toFixed(2) 
    
    
    
}

