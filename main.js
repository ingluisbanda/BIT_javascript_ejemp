let numeroA = parseInt(prompt("Ingrese el primer numero: "));
let numeroB = parseInt(prompt("Ingrese el segundo numero: "));

let proceso = sumar(numeroA, numeroB);

function sumar (a,b){
    return a+b;
};

alert("el resultado de sumar " + numeroA + " + " + numeroB + " es: " + proceso);

let proceso2 = multiplicar(numeroA, numeroB);

function multiplicar (a,b){
    return a*b;
};

alert("el resultado de multiplicar " + numeroA + " x " + numeroB + " es: " + proceso2);

let proceso3 = dividir(numeroA, numeroB);

function dividir (a,b){
    return a/b;
};

alert("el resultado de dividir " + numeroA + " / " + numeroB + " es: " + proceso3);

let proceso4 = restar(numeroA, numeroB);

function restar (a,b){
    return a-b;
};

alert("el resultado de restar " + numeroA + " - " + numeroB + " es: " + proceso4);

