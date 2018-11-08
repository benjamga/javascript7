const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const sum = document.querySelector('#sum');
const sub = document.querySelector('#sub');
const multi = document.querySelector('#multi');
const div = document.querySelector('#div');
const vastaus = document.querySelector('#vastaus');

function popup1(evt) {
    vastaus.innerHTML = (+num1.value + +num2.value);
}

sum.onclick = popup1;


function popup2(evt) {
    vastaus.innerHTML = (+num1.value - +num2.value);
}

sub.onclick = popup2;


function popup3(evt) {
    vastaus.innerHTML = (+num1.value * +num2.value);
}

multi.onclick = popup3;


function popup4(evt) {
    vastaus.innerHTML = (+num1.value / +num2.value);
}

div.onclick = popup4;

