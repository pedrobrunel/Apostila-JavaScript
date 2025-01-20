const alteraMaiusculo = document.getElementById("textoMaiusculo")
alteraMaiusculo.textContent = "Texto em Maíusculo".toLocaleUpperCase()

const alteraMinusculo = document.getElementById("textoMinusculo")
alteraMinusculo.textContent = "Texto em Minusculo".toLocaleLowerCase()

let mensagem = "O comprimento dessa váriavel é?"
const alteraH1Length = document.getElementById("tamanhoString")
alteraH1Length.textContent = `Tamanho do texto: ${mensagem.length}`

let numeros = 123456
const alteraH1Numero = document.getElementById("tamanhoNumero")
alteraH1Numero.textContent = `Tamanho do número: ${String(numeros).length}`

let mensagemSubstituir = "Vamos trocar a palavra"
const alteraH1Substituir = document.getElementById("substituirTexto")
alteraH1Substituir.textContent = mensagemSubstituir.replace("trocar","alterar")

let mensagemCortar = "Essa mensagem foi cortada"
const alteraH1Cortar = document.getElementById("cortarTexto")
alteraH1Cortar.textContent = mensagemCortar.slice(3, 24)

let mensagemCortarDeTras = "Dá para cortar de trás pra frente"
const alteraH1CortarTras = document.getElementById("cortarTextoTras")
alteraH1CortarTras.textContent = mensagemCortarDeTras.slice(-27)

let mensagemComEspacoBranco = "    Espaço em Branco no começo ou fina    l"
const alterarH1ComEspacoBranco = document.getElementById("tirarEspacoEmBranco")
alterarH1ComEspacoBranco.textContent = mensagemComEspacoBranco.trim()

let numeroBase1 = "12345"
const numeroAumentado1 = (numeroBase1.padEnd(10, "#"))
const alteraH1TamanhoString1 = document.getElementById("adicionarTamanhoString1")
alteraH1TamanhoString1.textContent = `Aumentou: ${numeroAumentado1}`

let numeroBase2 = "12345"
const numeroAumentado2 = (numeroBase2.padStart(10, "#"))
const alteraH1TamanhoString2 = document.getElementById("adicionarTamanhoString2")
alteraH1TamanhoString2.textContent = `Aumentou: ${numeroAumentado2}`

let mensagemTapada1 = "Pedro Antônio"
const naoTapar1 = mensagemTapada1.slice(6)
const alterarH1MensagemTapada1 = document.getElementById("taparString1")
alterarH1MensagemTapada1.textContent = naoTapar1.padStart(mensagemTapada1.length, "*")

let mensagemTapada2 = "Pedro Antônio"
const naoTapar2 = mensagemTapada2.slice(0, 5)
const alterarH1MensagemTapada2 = document.getElementById("taparString2")
alterarH1MensagemTapada2.textContent = naoTapar2.padEnd(mensagemTapada2.length, "*")

