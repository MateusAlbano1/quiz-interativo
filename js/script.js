import {aleatorio} from './aleatorio.js';
import {aleatorio} from './aleatorio.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixaa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novaemnte-btn")
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector("tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    atual= 0;
    historiaFinal = "";
    telaInicial.computedStyleMap.display = 'none';
    caixaPerguntas.classList.remove(".mostrar");
    caixaAlternativas.classList.remove(".mostrar");
    caixaResultado.classList.remove(".mostrar");
    mostrarPergunta ();
}

function mostrarPergunta() {
    if(atual >= perguntas.length){
        mostrarResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement()
    }
}