const figuras = [
    {
        nome: 'quadrado',
        base: 5,
        altura: 5,
        equacao: '$1 * $2'
    },
    {
        nome: 'retangulo',
        base: 3,
        altura: 5,
        equacao: '$1 * $2'
    },
    {
        nome: 'triangulo',
        base: 5,
        altura: 3,
        equacao: '($1 * $2) / 2'
    },
];


function equacaoParser(figura) {
    const equacao = figura.equacao.replace('$1', figura.base).replace('$2', figura.altura);
    const resultado = eval(equacao);
    console.log(`O resultado da equacao ${equacao} = ${resultado}`);
}

function main() {
    figuras.forEach(figura => equacaoParser(figura));
}

main();