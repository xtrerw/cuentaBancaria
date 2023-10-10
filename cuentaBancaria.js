var dom=document.querySelector('h2');
let cliente1={
    nombre: 'Ismael',
    apellido: 'Mor Mor',
    dni: 'A1111111A',
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
        dom.innerHTML+=cliente1.nombre;
        break;
    case cliente2.dni:
        dom.innerHTML+=cliente2.nombre;
        break
    case cliente3.dni:
        dom.innerHTML+=cliente3.nombre;
        break
    default:
        dom.innerHTML+="no existe este client";
        break;
}
