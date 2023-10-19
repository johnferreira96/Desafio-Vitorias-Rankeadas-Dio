let saldo = calcularVitorias(115, 10)
let nivel = rankiar(saldo)

function calcularVitorias(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

function rankiar(saldo){
    let nivel = " "
    if (saldo <= 10){
        return nivel = "Ferro"
    }
    else if(saldo >10 && saldo <=20){
        return nivel =  "Bronze"
    }
    else if(saldo >20 && saldo <=50){
        return nivel = "Prata"
    }
    else if(saldo >50 && saldo <=80){
        return nivel = "Ouro"
    }
    else if(saldo >80 && saldo <=90){
        return nivel = "Diamante"
    }
    else if(saldo >91 && saldo <=101){
        return nivel = "Lendário"
    }
    else{
        return nivel = "Imortal"
    }   
}

console.log(`O Hério tem saldo de ${saldo} e está no nível de ${nivel}`)