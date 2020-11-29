
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


visibleCards = (event) =>{
    let card = sessionStorage.getItem("card-Ativo")

    if(card === 'undefined' || card === null){
       sessionStorage.setItem("card-Ativo", event.target.dataset.indent)
       console.log(`card setado`)
    }else{
        let adiciona = document.getElementById(card)
        adiciona.classList.add("img-card")

        // setar novo id
        sessionStorage.setItem("card-Ativo", event.target.dataset.indent)
    }

    let obj = document.getElementById(event.target.dataset.indent)
    obj.classList.toggle("img-card")
}
