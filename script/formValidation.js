let submitButton = document.getElementById("submit")

console.log("script funcionando")
submitButton.addEventListener("click", event => {
    let nameInput = document.getElementById("nameInput")
    let emailInput = document.getElementById("emailInput")
    let phoneInput = document.getElementById("phoneInput")
    let messageArea = document.getElementById("messageArea")
    
    let error = document.getElementById("errorDiv")

    // checking empty inputs
    if (nameInput.value == '') {
        event.preventDefault()
        error.textContent='Nome não informado'
    } else if (emailInput.value == '' || emailInput.value.indexOf('@') == -1 || emailInput.value.indexOf('.') == -1) {
        event.preventDefault()
        error.textContent='Por favor, insira um e-mail válido!'
    } else if (phoneInput.value == '') {
        event.preventDefault()
        error.textContent='Telefone ou celular não informado'
    } else if (messageArea.value == '') {
        event.preventDefault()
        error.textContent='Sua mensagem está vazia, por favor escreva sua mensagem'
    }

    if (isNaN(phoneInput.value) == true) {
        event.preventDefault()
        error.textContent='O campo Telefone deve conter apenas números. Por favor, insira um número válido!'
    }

    if (phoneInput.value.length > 14) {
        event.preventDefault()
        phoneInput.focus()
        error.textContent='Quantidade de dígitos maior que o permitido. Por favor, faça as alterações necessárias.'
    }
})
