const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const input = document.querySelector('input');

h1.innerHTML = "<h2>I'm a developer</h2>";
 // h1.innerText = "<h2>I'm a developer</h2>";


console.log(p.getAttribute('marca'));
p.setAttribute('marca','vida');

p.classList.add('claseNueva');

input.value = "Holaaaaa";

const img = document.createElement('img');
img.setAttribute('src', 'https://i.blogs.es/4641ee/zelda-tears-of-the-kingdom-1/1366_2000.jpeg');

const figure = document.querySelector('#imagen-figure');

figure.append(img)





