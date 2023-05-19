async function buscaEndereco(){
var consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/')
var consultaCepConvertida = await consultaCEP.json();
console.log(consultaCepConvertida);
}
buscaEndereco();