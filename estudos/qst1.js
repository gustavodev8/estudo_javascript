function calcularMedia(n1, n2, n3,mf) {
    let media = (n1 + n2 + n3) / 3
    if (media > 7) 
    console.log("Aprovado")
    else
    console.log("Reprovado e foi para final")
        return media
}

function calcularMediaFinal(media, media_final) {
    let resultado = (media + media_final) / 2
    if (resultado < 7)
        console.log("")
    else
        console.log("Sua media final foi de: ", resultado)
        console.log("vc foi aprovado na final")
    return resultado
}




let mediainicial = calcularMedia(5, 6, 7)
console.log(calcularMediaFinal(mediainicial, 7))


