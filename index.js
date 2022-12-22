/* 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
uma letra. Se a letra for A a função deve calcular a média aritmética,
se for P, a média ponderada (peso: 5, 3 e 2). */

function exercicio1() {
    let nota1 = Number(prompt("Digite sua primeira nota: "));
    if (!nota1) {
        alert("Valor invalido. Tente novamente!")
        return;
    }

    let nota2 = Number(prompt("Digite sua segunda nota: "));
    if (!nota2) {
        alert("Valor invalido. Tente novamente!")
        return;
    }

    let nota3 = Number(prompt("Digite sua terceira nota: "));
    if (!nota3) {
        alert("Valor invalido. Tente novamente!")
        return;
    }

    let letra = prompt("Digite 'A' para calcular a média aritmética // 'P' para média ponderada").toUpperCase()

    if (!letra) {
        alert("Valor invalido. Tente novamente!")
    }

    calcularMedia(nota1, nota2, nota3, letra.toUpperCase())
}

function calcularMedia(nota1, nota2, nota3, tipo) {
    let resultado;

    if (tipo === 'A') {
        resultado = mediaAritmetica(nota1, nota2, nota3);
        document.write(`A média sera ${resultado.toFixed(2)}`)
    }

    if (tipo === 'P') {
        resultado = mediaPonderada(nota1, nota2, nota3);
        document.write(`A média sera ${resultado.toFixed(2)}`)
    }
}

function mediaAritmetica(nota1, nota2, nota3) {

    let resultado = (nota1 + nota2 + nota3) / 3
    return resultado;
}

function mediaPonderada(nota1, nota2, nota3) {

    let resultado = ((nota1 * 5) + (nota2 * 3) + (nota3 * 2)) / 10
    return resultado;
}

/* 2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
for ímpar ou falso se for par. */

function exercicio2() {
    let valor = parseInt(prompt("Digite um numero inteiro: (O número digitado sera arredondado)"))
    if (!valor) {
        alert("Valor digitado invalido!")
        return;
    }

    let numeroImpar = retorneImpar(valor)

    if (numeroImpar) {
        document.write("O numero é impar.")
    } else {
        document.write("O numero é par.")
    }

}

function retorneImpar(valor) {
    if (valor % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

/* 3. Crie uma função que recebe por parâmetro um valor inteiro e
positivo e retorne verdadeiro se o número for primo ou falso se não
for. */

function exercicio3() {
    let valor = parseInt(prompt("Digite um numero inteiro e positivo: (O número digitado sera arredondado)"))

    if (!valor) {
        alert("Digite um valor válido. Tente novamente!")
        return;
    }

    if (valor > 0) {
        let primo = verificaPrimo(valor)

        if (primo) {
            document.write("O número é primo.")
        } else {
            document.write("O numero não é primo.")
        }
    } else {
        document.write("O numero não é inteiro ou não é positivo. Tente novamente")
    }
}

function verificaPrimo(valor) {
    let divisores = 2;

    if (valor === 1) {
        return false
    }

    for (let contador = 2; contador < valor; contador++) {
        if (valor % contador === 0) {
            divisores++
        }
    }

    if (divisores > 2) {
        return false
    } else {
        return true
    }
}

/* 4. Crie uma função que recebe por parâmetro o tempo de duração de
uma fábrica expressa em segundos e retorna esse tempo em horas,
minutos e segundos. */
/* Ex:
Entrada: 3672
Saída: 1:1:12 */

function exercicio4() {
    let fabricaSegundos = Number(prompt("Digite os segundos aqui: "))

    calculoTempo(fabricaSegundos)

}

function calculoTempo(segundos) {
    let horas = 0;
    let minutos = 0;
    let segundosRestantes = 0;

    horas = parseInt(segundos / 3600)
    console.log(horas)

    let restoHoras = segundos % 3600
    console.log("Resto horas -> ", restoHoras)

    minutos = parseInt(restoHoras / 60)
    console.log(minutos)

    segundosRestantes = restoHoras % 60
    console.log(segundosRestantes)

    document.write(`${horas}:${minutos}:${segundosRestantes}`)
}

/* 5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
é um valor perfeito ou falso se não for. Um valor é dito perfeito
quando ele é igual a soma dos seus divisores excetuando ele
próprio.

Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores */

function exercicio5() {
    let valor = parseInt(prompt("Digite um numero inteiro: "))

    let valor2 = numeroPerfeito(valor)

    if (valor2) {
        document.write("O valor é perfeito.")
    } else {
        document.write("O valor não é perfeito.")
    }
}


function numeroPerfeito(valor) {

    let soma = 0;

    for (let contador = 1; contador < valor; contador++) {
        if (valor % contador === 0) {
            soma += contador;
        }
    }
    console.log(soma);

    if (soma === valor) {
        return true;
    } else {
        return false;
    }
}

/* 6. Crie uma função chamada acessoAoSite() que não tenha
parâmetro. Esta função será chamada ao abrir a página e mostrará
um alerta informando “Bem vindo ao site”. */

function acessoAoSite() {
    alert("Bem vindo ao site!")
}

/* 7. Crie uma função chamada mostrarMensagem() que não tenha
parâmetro. Esta função será chamada ao abrir a página e mostrará
uma mensagem no console.log() informando “Acesso à aplicação
NomeAplicação” e um alerta informando “Bem vindo à aplicação
NomeApliação”. Sendo que o nome da aplicação deve ser salvo em
uma variável para mostrar nas mensagens. */

function mostrarMensagem() {
    let exercicio7 = 'exercicio 7';

    console.log(`Acesso à aplicação ${exercicio7}`)

    alert(`Bem vindo à aplicação ${exercicio7}`)
}

/* 8. Crie uma função chamada mostrarDobro(num), que recebe um
parâmetro sendo um número inteiro. Esta função será chamada ao
abrir a página e mostrará um alerta com o resultado. Exemplo: “O
dobro do número 5 é 10.” */

function mostrarDobro(num) {
    num = parseInt(prompt("Digite um numero inteiro: "))
    if (!num) {
        alert("Numero invalido. Tente novamente!")
        return;
    }

    const dobro = num * 2
    alert(`O dobro de ${num} é ${dobro}!`)
}

/* 9. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
    nome), que recebe 4 parâmetros sendo três inteiros e um texto
    (String). Esta função será chamada ao abrir a página e mostrará um
    alerta com a média. Exemplo: “João, sua média é 70.” A função
    também deve mostrar no console.log() as notas recebidas. Exemplo
    “Nota 1: 60,Nota 2: 70,Nota 3: 80”. */

function exercicio9() {
    let nome = prompt("Informe nome:")
    if (nome === null) {
        alert("Valor invalido. Tente novamente!")
        return;
    }

    let nota1 = Number(prompt("Informe nota 1: "))
    if (!nota1) {
        alert("Valor digitado invalido. Tente novamente!")
        return;
    }

    let nota2 = Number(prompt("Informe nota 2: "))
    if (!nota2) {
        alert("Valor digitado invalido. Tente novamente!")
        return;
    }

    let nota3 = Number(prompt("Informe nota 3: "))
    if (!nota3) {
        alert("Valor digitado invalido. Tente novamente!")
        return;
    }


    let media = calcularMedia(nota1, nota2, nota3, nome)

    alert(`${nome}, sua média é ${media.toFixed(2)} `)

    console.log(`Nota 1: ${nota1}, nota 2: ${nota2}, nota 3: ${nota3}`)



}
function calcularMedia(n1, n2, n3, tipo) {

    let media = (n1 + n2 + n3) / 3
    return media;

}