let numerosSorteadosLista = [];
let numeroMaximo = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function verificarChute(){
    console.log('clicou');
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTexto = `você acertou o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1',`Você Acertou `);
        exibirTextoNaTela('p',mensagemTexto);
        document.getElementById('chutar').setAttribute('disabled', true)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroSecreto <  chute){
            exibirTextoNaTela('p',`O numero secreto é menor que ${chute}`);
        }else{
            exibirTextoNaTela('p',`O numero secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo +1);
    let quantidadeLista = numerosSorteadosLista.length;
    if(quantidadeLista === numeroMaximo){
        numerosSorteadosLista = [];
    }
    if(numerosSorteadosLista.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        numerosSorteadosLista.push(numeroEscolhido);
        console.log(numerosSorteadosLista);
        return numeroEscolhido;
    }

}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value ='';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMesagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chutar').removeAttribute('disabled')
}function exibirMesagemInicial(){
    exibirTextoNaTela('h1','Jogo do Numero Secreto');
    exibirTextoNaTela('p',`Escolha um numero entre 1 e ${numeroMaximo}`);
}
exibirMesagemInicial();