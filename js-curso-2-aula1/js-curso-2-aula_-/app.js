let listaDeNumerosSorteados = []; 
let numeroLimite = 5;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


mostarMensagemInicial(); 

function mostarMensagemInicial(){
    mostrarTextoNaTela('h1', 'Jogo do número secreto');
    mostrarTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
    

}

function verificarChute() {
    let chute  = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        mostrarTextoNaTela('h1', 'Acertou!!'); 
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você adivinhou o número secreto com ${tentativas} ${palavraTentativa}`; 
        mostrarTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute > numeroSecreto) {
            mostrarTextoNaTela('p', 'O número secreto é menor que o seu palpite');
        }
        else {
            mostrarTextoNaTela('p', 'O número secreto é maior que o seu palpite'); 
        }
        limparCampo(); 
        tentativas++; 
    }
}

function mostrarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); 

}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length;
    
if (quantidadeDeElementos == numeroLimite) {
       listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
       return gerarNumeroAleatorio(); 
    } 
    
    else {
        console.log(listaDeNumerosSorteados);
        listaDeNumerosSorteados.push(numeroEscolhido); 
        return numeroEscolhido;
    }
}

function limparCampo() {
   chute = document.querySelector('input');
   chute.value = '';
    
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mostarMensagemInicial(); 
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


