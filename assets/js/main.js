function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('questionNum3').onkeyup = function(){
		mascara( this, mtel );
	}
}



var question1 = document.getElementById("question1")
var question2 = document.getElementById("question2")
var question3 = document.getElementById("question3")
var question4 = document.getElementById("question4")
var question5 = document.getElementById("question5")
var question6 = document.getElementById("question6")
var question7 = document.getElementById("question7")
var question8 = document.getElementById("question8")
var question9 = document.getElementById("question9")
var question10 = document.getElementById("question10")
var question11 = document.getElementById("question11")
var question12 = document.getElementById("question12")
var question13 = document.getElementById("question13")
var question14 = document.getElementById("question14")
var question15 = document.getElementById("question15")
var finalA = document.getElementById("final")

var checkbox = document.getElementById("sim");




function changeOption() {

    var inputName = document.getElementById("questionNum1").value
    var inputClass = document.getElementById("questionNum1")
    var warningName = document.getElementById("warningName")
    warningName.style.padding = "10px"
    warningName.style.borderRadius = "5px"
    warningName.style.background = "crimson"
    warningName.style.color = "white"

    if (inputName == "") {
     inputClass.classList.add("warningClass")
     warningName.innerHTML = "Digite um nome valido"
    } else {

    question1.classList.add("hidden")
    question2.classList.remove("hidden")
    question2.classList.add("none-class")

    }


}

function changeOption2() {

    var inputEmail = document.getElementById("questionNum2").value
    var inputClass = document.getElementById("questionNum2")
    var exampleMail = document.getElementById("exampleMail")
    var warningEmail = document.getElementById("warningEmail")
    warningEmail.style.padding = "10px"
    warningEmail.style.borderRadius = "5px"
    warningEmail.style.background = "crimson"
    warningEmail.style.color = "white"
    exampleMail.style.padding = "10px"
    exampleMail.style.borderRadius = "5px"
    exampleMail.style.background = "crimson"
    exampleMail.style.color = "white"

    if (inputEmail.length <= 10) {

     inputClass.classList.add("warningClass")
     exampleMail.innerHTML = "Exemplo: comercial@jde.com"
     warningEmail.innerHTML = "Digite um email valido, veja acima no exemplo"

    } else {

    question1.classList.add("hidden")
    question2.classList.add("hidden")
    question3.classList.remove("hidden")
    question3.classList.add("none-class")

}

}

function changeOption3() {

    var inputPhone = document.getElementById("questionNum3").value
    var inputClass = document.getElementById("questionNum3")
    var warningPhone = document.getElementById("warningPhone")
    warningPhone.style.padding = "10px"
    warningPhone.style.borderRadius = "5px"
    warningPhone.style.background = "crimson"
    warningPhone.style.color = "white"

    if (inputPhone.length != 15) {

     inputClass.classList.add("warningClass")
     warningPhone.innerHTML = "Digite um telefone valido"

    } else {

    question1.classList.add("hidden")
    question2.classList.add("hidden")
    question3.classList.add("hidden")

    question4.classList.remove("hidden")
    question4.classList.add("none-class")
}

}

function changeOption4() {

    var inputAdress = document.getElementById("questionNum4").value
    var inputClass = document.getElementById("questionNum4")
    var warningAdress = document.getElementById("warningAdress")
    warningAdress.style.padding = "10px"
    warningAdress.style.borderRadius = "5px"
    warningAdress.style.background = "crimson"
    warningAdress.style.color = "white"

    if (inputAdress.length < 8) {

     inputClass.classList.add("warningClass")
     warningAdress.innerHTML = "Digite um endereço valido"

    } else {


    question1.classList.add("hidden")
    question2.classList.add("hidden")
    question3.classList.add("hidden")
    question4.classList.add("hidden")

    question5.classList.remove("hidden")
    question5.classList.add("none-class")

   }

}

function changeOption5() {

    question1.classList.add("hidden")
    question2.classList.add("hidden")
    question3.classList.add("hidden")
    question4.classList.add("hidden")
    question5.classList.add("hidden")

    question6.classList.remove("hidden")
    question6.classList.add("none-class")
    


}

function changeOption6() {

    question1.classList.add("hidden")
    question2.classList.add("hidden")
    question3.classList.add("hidden")
    question4.classList.add("hidden")
    question5.classList.add("hidden")
    question6.classList.add("hidden")

    question7.classList.remove("hidden")
    question7.classList.add("none-class")

    if (checkbox.checked == true) {
        console.log ("Foi Escolhido o Sim")
    } else {
        console.log ("Foi Escolhido o Não")
    }

    
    


}

function changeOption7() {

    question1.classList.add("hidden")
    question2.classList.add("hidden")
    question3.classList.add("hidden")
    question4.classList.add("hidden")
    question5.classList.add("hidden")
    question6.classList.add("hidden")
    question7.classList.add("hidden")

    question8.classList.remove("hidden")
    question8.classList.add("none-class")
    


}

function optionArquiteto() {

    question1.classList.add("hidden")
    question2.classList.add("hidden")
    question3.classList.add("hidden")
    question4.classList.add("hidden")
    question5.classList.add("hidden")
    question6.classList.add("hidden")
    question7.classList.add("hidden")
    question8.classList.add("hidden")

    question9.classList.remove("hidden")
    question9.classList.add("none-class")
}

function optionPaisagista() {

    question1.classList.add("hidden")
    question2.classList.add("hidden")
    question3.classList.add("hidden")
    question4.classList.add("hidden")
    question5.classList.add("hidden")
    question6.classList.add("hidden")
    question7.classList.add("hidden")
    question8.classList.add("hidden")

    question9.classList.remove("hidden")
    question9.classList.add("none-class")
}

function optionClienteFinal() {

    question1.classList.add("hidden")
    question2.classList.add("hidden")
    question3.classList.add("hidden")
    question4.classList.add("hidden")
    question5.classList.add("hidden")
    question6.classList.add("hidden")
    question7.classList.add("hidden")
    question8.classList.add("hidden")

    question9.classList.remove("hidden")
    question9.classList.add("none-class")

}

function optionProjeto3d() {

    question1.classList.add("hidden")
    question2.classList.add("hidden")
    question3.classList.add("hidden")
    question4.classList.add("hidden")
    question5.classList.add("hidden")
    question6.classList.add("hidden")
    question7.classList.add("hidden")
    question8.classList.add("hidden")
    question9.classList.add("hidden")

    question10.classList.remove("hidden")
    question10.classList.add("none-class")

}

function optionPaisagismo() {

    question1.classList.add("hidden")
    question2.classList.add("hidden")
    question3.classList.add("hidden")
    question4.classList.add("hidden")
    question5.classList.add("hidden")
    question6.classList.add("hidden")
    question7.classList.add("hidden")
    question8.classList.add("hidden")
    question9.classList.add("hidden")

    question11.classList.remove("hidden")
    question11.classList.add("none-class")

}

function optionLago() {

    question1.classList.add("hidden")
    question2.classList.add("hidden")
    question3.classList.add("hidden")
    question4.classList.add("hidden")
    question5.classList.add("hidden")
    question6.classList.add("hidden")
    question7.classList.add("hidden")
    question8.classList.add("hidden")
    question9.classList.add("hidden")

    question12.classList.remove("hidden")
    question12.classList.add("none-class")

}

function optionParede() {

    question1.classList.add("hidden")
    question2.classList.add("hidden")
    question3.classList.add("hidden")
    question4.classList.add("hidden")
    question5.classList.add("hidden")
    question6.classList.add("hidden")
    question7.classList.add("hidden")
    question8.classList.add("hidden")
    question9.classList.add("hidden")

    question13.classList.remove("hidden")
    question13.classList.add("none-class")

}

function optionInterna() {

    question1.classList.add("hidden")
    question2.classList.add("hidden")
    question3.classList.add("hidden")
    question4.classList.add("hidden")
    question5.classList.add("hidden")
    question6.classList.add("hidden")
    question7.classList.add("hidden")
    question8.classList.add("hidden")
    question9.classList.add("hidden")
    question13.classList.add("hidden")

    question14.classList.remove("hidden")
    question14.classList.add("none-class")

}

function optionExterna() {

    question1.classList.add("hidden")
    question2.classList.add("hidden")
    question3.classList.add("hidden")
    question4.classList.add("hidden")
    question5.classList.add("hidden")
    question6.classList.add("hidden")
    question7.classList.add("hidden")
    question8.classList.add("hidden")
    question9.classList.add("hidden")
    question13.classList.add("hidden")

    question15.classList.remove("hidden")
    question15.classList.add("none-class")

}



















function enviar() {

    question1.classList.add("hidden")
    question2.classList.add("hidden")
    question3.classList.add("hidden")
    question4.classList.add("hidden")
    question5.classList.add("hidden")
    question6.classList.add("hidden")
    question7.classList.add("hidden")
    question8.classList.add("hidden")
    question9.classList.add("hidden")
    question10.classList.add("hidden")
    question11.classList.add("hidden")
    question12.classList.add("hidden")
    question13.classList.add("hidden")
    question14.classList.add("hidden")
    question15.classList.add("hidden")

    finalA.classList.remove("hidden")
    finalA.classList.add("none-class")

}
