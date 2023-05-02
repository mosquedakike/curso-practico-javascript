const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
// const btn = document.querySelector('button');
const btn = document.querySelector('#btnCalcular');

const form  = document.querySelector('#form');
const pResult = document.querySelector('.result')



// function Calcular(input1,input2) {
//     const resultado = input1 + input2;
//     return console.log(resultado);;
// }


form.addEventListener('submit', sumarInputValues)

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
    const sumar = input1.value + input2.value;
    pResult.innerHTML = "El resultado es: "+ sumar;

}