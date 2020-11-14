alerta = () =>{
    let nome = document.getElementById("name")
    let email = document.getElementById("email")
    let mensagem = document.getElementById("message")

    if(nome.value == 'null' || nome.value == 'undefined' || nome.value == '' || email.value == 'null' || email.value == 'undefined'|| email.value == '' || mensagem.value == 'null' || mensagem.value == 'undefined' || mensagem.value == ''){
       return;
    }else {
        let obj = document.getElementById("id-alerta")
        obj.classList.toggle("display")
    }
}