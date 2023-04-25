const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('button');

const pResult = document.querySelector('.result')



// function Calcular(input1,input2) {
//     const resultado = input1 + input2;
//     return console.log(resultado);;
// }

function btnOnClick() {
    // console.log('funcioinaaa');
    // console.log(input1.value + input2.value);
    const sumar = input1.value + input2.value;
    pResult.innerHTML = sumar

}