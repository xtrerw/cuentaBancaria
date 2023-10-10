var dom=document.querySelector('h2');
const cliente1={
    nombre: 'Ismael',
    apellido: 'Mor Mor',
    dni: 'Y2343242H',
    cantidadDeDinero: 3000,
};
const cliente2={
    nombre: 'Wei',
    apellido: 'Xu',
    dni: 'I2342360H',
    cantidadDeDinero: 5000,
};
const cliente3={
    nombre: 'Daza',
    apellido: 'Épico',
    dni: 'P2331123H',
    cantidadDeDinero: 6000,
};

let dni1 = cliente1['dni'];
let dni2 = cliente2['dni'];
let dni3 = cliente3['dni'];

let nombre1 = cliente1['nombre'];
let nombre2 = cliente2['nombre'];
let nombre3 = cliente3['nombre'];

let apellido1 = cliente1['apellido'];
let apellido2 = cliente2['apellido'];
let apellido3 = cliente3['apellido'];

let saldo1 = cliente1['cantidadDeDinero'];
let saldo2 = cliente1['cantidadDeDinero'];
let saldo3 = cliente1['cantidadDeDinero'];

dom.innerHTML+='nombre: '+nombre1+'<br>apellido: '+apellido1+'<br>DNI: '+dni1;
dom.innerHTML+='<br>nombre: '+nombre2+'<br>apellido: '+apellido2+'<br>DNI: '+dni2;
dom.innerHTML+='<br>nombre: '+nombre3+'<br>apellido: '+apellido3+'<br>DNI: '+dni3;