var dom=document.querySelector('h2');
var btn=document.getElementById('ingresa');
let cliente1={
    nombre: 'Ismael',
    apellido: 'Mor Mor',
    dni: '1',
    cantidadDeDinero: 3000,
};
let cliente2={
    nombre: 'Wei',
    apellido: 'Xu',
    dni: 'I2342360H',
    cantidadDeDinero: 5000,
};
let cliente3={
    nombre: 'Daza',
    apellido: 'Épico',
    dni: 'P2331123H',
    cantidadDeDinero: 6000,
};

let dni = prompt('Introduce DNI de usted, porfavor');
switch (dni) {
    case cliente1.dni:
        dom.innerHTML+=cliente1.nombre+'<br>'+cliente1.apellido+'<br>'+cliente1.cantidadDeDinero;
        break;
    case cliente2.dni:
        dom.innerHTML+=cliente2.nombre+'<br>'+cliente2.apellido+'<br>'+cliente2.cantidadDeDinero;
        break
    case cliente3.dni:
        dom.innerHTML+=cliente3.nombre+'<br>'+cliente3.apellido+'<br>'+cliente3.cantidadDeDinero;
        break
    default:
        dom.innerHTML+="no existe este client";
        break;
}

function ingresa() {
    let ingresa = prompt('Introduce cantidad del ingreso');
    cliente1.cantidadDeDinero -= -ingresa;
    dom.innerHTML+=cliente1.cantidadDeDinero;
 };