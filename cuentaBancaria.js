var dom=document.querySelector('h2');
var btn1=document.getElementById('ingresar');
var btn2=document.getElementById('retirar');
var btn3=document.getElementById('Lista de clientes');
var btn4=document.getElementById('Cambio de usuario');
var btn5=document.getElementById('Agregar cliente');
let cliente1={
    nombre: 'Ismael',
    apellido: 'Mor Mor',
    dni: '1',
    cantidadDeDinero: 3000,
};
let cliente2={
    nombre: 'Wei',
    apellido: 'Xu',
    dni: '2',
    cantidadDeDinero: 5000,
};
let cliente3={
    nombre: 'Daza',
    apellido: 'Épico',
    dni: '3',
    cantidadDeDinero: 6000,
};

let dni = prompt('Introduce DNI de usted, porfavor');
var ingreso=0;
var retiro=0;
function actualizarCliente(cliente) { 
    dom.innerHTML=cliente.nombre+'<br>'+cliente.apellido+'<br>'+cliente.cantidadDeDinero;
    btn1.addEventListener('click',function() { 
        ingreso = Number(prompt('Introduce cantidad del ingreso'));
        cliente.cantidadDeDinero += ingreso;
        dom.innerHTML=cliente.nombre+'<br>'+cliente.apellido+'<br>'+cliente.cantidadDeDinero;
        })
    btn2.addEventListener('click',function() {
        if (cliente.cantidadDeDinero>=0) {
            retiro=Number(prompt('Introduce el monto del retiro'));
            if (retiro<= cliente.cantidadDeDinero){
                cliente.cantidadDeDinero -= retiro;
                dom.innerHTML=cliente.nombre+'<br>'+cliente.apellido+'<br>'+cliente.cantidadDeDinero;
            }else if (retiro>cliente.cantidadDeDinero) {
                dom.innerHTML=cliente.nombre+'<br>'+cliente.apellido+'<br>'+'no se puede retirar más efectivos';
            }else{
                dom.innerHTML=cliente.nombre+'<br>'+cliente.apellido+'<br>'+'introduce un número';
            }
        }else{
            dom.innerHTML=cliente.nombre+'<br>'+cliente.apellido+'<br>'+'no se puede retirar más efectivos';
        }
    });
 }
switch (dni) {
    case cliente1.dni:
        actualizarCliente(cliente1);
        break;
    case cliente2.dni:
        actualizarCliente(cliente2);
        break
    case cliente3.dni:
        actualizarCliente(cliente3);
        break
    default:
        dom.innerHTML+="no existe este client";
        break;
}

btn3.addEventListener('click',function(){
        dom.innerHTML+="<br>DNI: "+cliente1.dni+"</br>DNI: "+cliente2.dni+"</br>DNI: "+cliente3.dni+"</br>";
});
