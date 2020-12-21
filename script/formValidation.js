let submitButton = document.getElementById("submit")

submitButton.addEventListener("click", event => {
    let nameInput = document.getElementById("nameInput")
    let emailInput = document.getElementById("emailInput")
    let phoneInput = document.getElementById("phoneInput")
    let messageArea = document.getElementById("messageArea")
    
    let error = document.getElementById("errorDiv")

    function estilizarErro () {
        error.style = `
        text-align: center;
        font-size: 1.4em;
        background-color: rgb(199, 52, 35, .8);
        border: 1px solid rgba(112, 30, 21, .5);
        padding: 7px 5px;
        border-radius: 7px;`
    }

    // checking empty inputs
    if (nameInput.value == '') {
        event.preventDefault()
        estilizarErro()
        nameInput.focus()
        error.textContent='Nome não informado'
    } else if (emailInput.value == '' || emailInput.value.indexOf('@') == -1 || emailInput.value.indexOf('.') == -1) {
        event.preventDefault()
        estilizarErro()
        emailInput.focus()
        error.textContent='Por favor, insira um e-mail válido!'
    } else if (phoneInput.value == '') {
        event.preventDefault()
        estilizarErro()
        phoneInput.focus()
        error.textContent='Telefone ou celular não informado'
    } else if (messageArea.value == '') {
        event.preventDefault()
        estilizarErro()
        messageArea.focus()
        error.textContent='Sua mensagem está vazia, por favor escreva sua mensagem'
    }

    if (isNaN(phoneInput.value) == true) {
        event.preventDefault()
        estilizarErro()
        phoneInput.focus()
        error.textContent='O campo Telefone deve conter apenas números. Por favor, insira um número válido!'
    }

    if (phoneInput.value.length > 14) {
        event.preventDefault()
        estilizarErro()
        phoneInput.focus()
        error.textContent='Quantidade de dígitos maior que o permitido. Por favor, faça as alterações necessárias.'
    }
})
