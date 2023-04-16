var PE = 0
var SIM1 = 0
var SIM2 = 0
var REDAÇÃO = 0
var ATV = 0


PE = parseFloat(prompt("NOTA DA PE"))
SIM1 = parseFloat(prompt("NOTA DO SIMULADO1"))
SIM2 = parseFloat(prompt("NOTA DO SIMULADO2"))
REDAÇÃO = parseFloat(prompt("NOTA DA REDAÇÃO DO SIMULADO"))
ATV = parseFloat(prompt("NOTA DA ATIVIDADE ESPECIAL"))

console.log("nota da PE", PE, " - nota do simulado 1", SIM1, "- nota do simulado 2", SIM2,
    "- nota da redação", REDAÇÃO, "- nota da atividade especial", ATV)

var MSR = (((SIM1 + SIM2) * 8) + REDAÇÃO * 2) / 10

var MP = (PE * 3 + MSR + ATV) / 5

console.log("sua media é", MP)


alert("sua media é" + MP)

