import {aleatorio} from './aleatorio.js';
import {aleatorio} from './aleatorio.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixaa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector()
const
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector("tela-inicial");

let atual = 0;
let perguntaAtual;

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    atual= 0;
    telaInicial.computedStyleMap.display = 'none';
    caixaPerguntas.classList.remove(".mostrar");
    caixaAlternativas.classList.remove(".mostrar");
    caixaResultado.classList.remove(".mostrar");
    mostrarPergunta ();pdydy
}

function mostrarPergunta() {};