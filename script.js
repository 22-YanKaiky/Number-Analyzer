var num = document.getElementById("fnum")
var list = document.getElementById("flist")
var res = document.querySelector('div#res')
var dados = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, d) {
    if (d.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

// function isNotVaLid(n) {
//     if (Number(n) <= 0 && Number(n) >= 101) {
//         return true
//     } else {
//         return false
//     }
// }
// 1º else if (isNotValid(num.value)) {
//       window.alert("Valor Inválido")
//   } else {
//       window.alert("Valor encontrado-se na lista.")
//   }

function adicionarNum() {
    if (isNumber(num.value) && !inList(num.value, dados)) {
        dados.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''
    } else { //1º - function isNotVaLid()
        window.alert("Valor inválido ou já econtrado-se na lista")
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if (dados.length == 0) {
        window.alert("Adicione valores antes de finalizar")
    } else {
        let total = dados.length
        let maior = dados[0]
        let menor = dados[0]
        let soma = 0
        let media = 0

        for (let pos in dados) {
            soma += dados[pos]

            if (dados[pos] > maior)
                maior = dados[pos]

            if (dados[pos] < menor)
                menor = dados[pos]
        }
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temoso resultado ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}