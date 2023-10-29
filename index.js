let vitorias = 110
let derrotas = 30

function classificacao (vitorias, derrotas) {
    let saldoDeRankeadas = vitorias - derrotas 
    let nivel 

    if (saldoDeRankeadas <= 10){
        nivel = "ferro"
    } else if (saldoDeRankeadas >=11 && saldoDeRankeadas <=20) {
        nivel = "bronze"
    } else if (saldoDeRankeadas >=21 && saldoDeRankeadas <=50){
        nivel = "prata"
    } else if (saldoDeRankeadas >=51 && saldoDeRankeadas <=80){
        nivel = "ouro"
    } else if (saldoDeRankeadas >=81 && saldoDeRankeadas <=90){
        nivel = "diamante"
    } else if (saldoDeRankeadas >= 91 && saldoDeRankeadas <= 100){
        nivel = "lendário"
    } else if (saldoDeRankeadas >=101){
        nivel = "imortal"
    }

    return "O herói tem saldo de " + saldoDeRankeadas + " e está no nivel de " + nivel
}

const resultado = classificacao (vitorias, derrotas)
console.log (resultado)