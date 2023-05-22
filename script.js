async function buscaEndereco(cep){
    var mesnsagemErro = document.getElementById('erro');
    mesnsagemErro.innerHTML = "";
    try {  
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultaCepConvertida = await consultaCEP.json();
    if(consultaCepConvertida.erro) {
        throw Error('CEP não encontrado!');
    }
    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');
    var bairro = document.getElementById('bairro');
    var complemento = document.getElementById('complemento')
    cidade.value = consultaCepConvertida.localidade;
    logradouro.value = consultaCepConvertida.logradouro;
    estado.value = consultaCepConvertida.uf;
    bairro.value = consultaCepConvertida.bairro;
    complemento.value = consultaCepConvertida.complemento;
    console.log(consultaCepConvertida);
    return consultaCepConvertida;
}catch(erro) {
    mesnsagemErro.innerHTML = '<p>CEP inválido.Tente novamente!</p>'
    console.log(erro);
}
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));