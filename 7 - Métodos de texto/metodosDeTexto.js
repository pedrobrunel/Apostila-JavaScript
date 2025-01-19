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