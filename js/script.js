let inputCPF = document.getElementById('CPFuser');
let confirmeS = document.getElementById('confirmeSenha');
let inputSenha = document.getElementById('password');
let validacao = document.getElementById('cpfCliente');
let inputcep = document.getElementById('validacaoCEP');
let inputEndereco = document.getElementById('endereco');
let inputBairro = document.getElementById('bairro');
let inputCidade = document.getElementById('nomeCidade');
let inputCartao = document.getElementById('cartaoVali');

//validação CPF
inputCPF.addEventListener("keyup", (event) => {
    //para usar o contrario colocar o sinal de ! assim só aceitará letras e não numeros.
    if (isNaN(inputCPF.value)) {
        inputCPF.value = inputCPF.value.substring(0, (inputCPF.value.length - 1))
        console.log("É uma String")
    }
    if (inputCPF.value.length >= 11)
        inputCPF.value = inputCPF.value.substring(0, 11)


})
// Validação de senhas. Sempre criar as variaveis e atribuir os valores.
confirmeS.addEventListener("keyup", (e) => {
    if (confirmeS.value != inputSenha.value) {
        confirmeS.setAttribute("class", "form-control is-invalid")

    } else {
        confirmeS.setAttribute("class", "form-control is-valid")
    }

})

// validação CPF titular do cartão.
validacao.addEventListener("keyup", (event) => {
    if (isNaN(validacao.value)) {
        validacao.value = validacao.value.substring(0, (validacao.value.length - 1))
        console.log("É uma String")
    }
    if (validacao.value.length >= 11){
    validacao.value = validacao.value.substring(0, 11);

    }

}) 

// validação CEP

//função que avisa a busca pelo cep
function buscarCep(cep){
  fetch(`https://viacep.com.br/ws/${cep}/json`)
  .then(Response => Response.json())
  .then(dados =>{
      if(dados.erro){
          return inputcep.setAttribute("class", "form-control is-invalid")
      }
      inputcep.setAttribute("class", "form-control is-valid")
      inputEndereco.value = dados.logradouro
      inputBairro.value = dados.bairro
      inputCidade.value = dados.localidade

  })

}

inputcep.addEventListener("keyup", (event) => {
    if (isNaN(inputcep.value)) {
        inputcep.value = inputcep.value.substring(0, (inputcep.value.length - 1))
        console.log("É uma String")
    }
    if (inputcep.value.length >= 8){
        inputcep.value = inputcep.value.substring(0,8);
        buscarCep(inputcep.value)
        Alert("Procurando CEP")
    }

}) 

// validação cartao de credito
inputCartao.addEventListener("keyup", (event) => {
    if (isNaN(inputCartao.value)) {
        inputCartao.value = inputCartao.value.substring(0, (inputCartao.value.length - 1))
        console.log("É uma String")
    }
    if (inputCartao.value.length >= 11){
    inputCartao.value = inputCartao.value.substring(0, 11);

    }

}) 
 





