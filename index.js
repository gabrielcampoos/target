let ex1 = document.getElementById('ex-1');
ex1.style.display = 'none';
let ex2 = document.getElementById('ex-2');
ex2.style.display = 'none';
let ex3 = document.getElementById('ex-3');
ex3.style.display = 'none';
let ex4 = document.getElementById('ex-4');
ex4.style.display = 'none';
let ex5 = document.getElementById('ex-5');
ex5.style.display = 'none';

const listaFibonacci = [];

document.getElementById('btn-1').addEventListener('click', () => {
    if (ex1.style.display === 'none') {
        ex1.style.display = 'block';
        ex2.style.display = 'none';
        ex3.style.display = 'none';
        ex4.style.display = 'none';
        ex5.style.display = 'none';
    } else {
        ex1.style.display = 'none';
    };

    document.getElementById('calcular').addEventListener('click', () => {
        let indice = Number(document.getElementById('indice').value);
        let numero = Number(document.getElementById('numero').value);
        let soma = 0;

        while (numero < indice) {
            numero = numero + 1;
            soma = soma + numero;
        };

        let resultado = document.getElementById('resultado');
        resultado.value = soma;
    });
});


document.getElementById('btn-2').addEventListener('click', () => {
    if (ex2.style.display === 'none') {
        ex2.style.display = 'block';
        ex5.style.display = 'none';
        ex4.style.display = 'none';
        ex3.style.display = 'none';
        ex1.style.display = 'none';
    } else if (ex2.style.display === 'block') {
        ex2.style.display = 'none';
    };

    document.getElementById('calcular-ex2').addEventListener('click', () => {
        let termo = parseInt(document.getElementById('numero-ex2').value);
        let resultado = document.getElementById('resultado-ex2');
        let penultimo = 0, ultimo = 1;
        let numero;

        if (termo <= 2)
            numero = termo - 1;
        else
            for (let count = 3; count <= termo; count++) {
                numero = ultimo + penultimo;
                penultimo = ultimo;
                ultimo = numero;
                listaFibonacci.push(ultimo);
            };

        const check = listaFibonacci.some(el => el === termo);

        if (!check){
            resultado.value = 'Não está na sequência.';
        } else {
            resultado.value = 'Está na sequência.';
        };
    });

});

document.getElementById('btn-3').addEventListener('click', () => {
    if (ex3.style.display === 'none') {
        ex3.style.display = 'block';
        ex5.style.display = 'none';
        ex4.style.display = 'none';
        ex2.style.display = 'none';
        ex1.style.display = 'none';
    } else if(ex3.style.display === 'block') {
        ex3.style.display = 'none';
    };
});

document.getElementById('btn-4').addEventListener('click', () => {
    if (ex4.style.display === 'none') {
        ex4.style.display = 'block';
        ex5.style.display = 'none';
        ex3.style.display = 'none';
        ex2.style.display = 'none';
        ex1.style.display = 'none';
    } else if(ex4.style.display === 'block') {
        ex4.style.display = 'none';
    };
});

document.getElementById('btn-5').addEventListener('click', () => {
    if (ex5.style.display === 'none') {
        ex5.style.display = 'block';
        ex4.style.display = 'none';
        ex3.style.display = 'none';
        ex2.style.display = 'none';
        ex1.style.display = 'none';
    } else if(ex5.style.display === 'block') {
        ex5.style.display = 'none';
    };

    document.getElementById('inverter-ex5').addEventListener('click', () => {
        let palavra = document.getElementById('numero-ex5').value;
        let resultado = document.getElementById('resultado-ex5');

        let newString = '';

        for(let i = palavra.length - 1; i >= 0; i--) {
            newString += palavra[i];
        };

        resultado.value = newString;
    });

});