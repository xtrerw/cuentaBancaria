var dom1=document.querySelector('.informationDelCliente');
var dom2=document.querySelector('.informationDeTodo');
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
    resultado='';
    for (const key in cliente) {
        resultado=resultado+key+': '+cliente[key]+'<br>';
    }
    dom1.innerHTML=resultado
    btn1.addEventListener('click',function() { 
        ingreso = Number(prompt('Introduce cantidad del ingreso'));
        cliente.cantidadDeDinero += ingreso;
        resultado='';
        for (const key in cliente) {
            resultado=resultado+key+': '+cliente[key]+'<br>';
        }
        dom1.innerHTML=resultado
        })
    btn2.addEventListener('click',function() {
        if (cliente.cantidadDeDinero>=0) {
            retiro=Number(prompt('Introduce el monto del retiro'));
            if (retiro<= cliente.cantidadDeDinero){
                cliente.cantidadDeDinero -= retiro;
                resultado='';
                for (const key in cliente) {
                    resultado=resultado+key+': '+cliente[key]+'<br>';
                }
                dom1.innerHTML=resultado
            }else if (retiro>cliente.cantidadDeDinero) {
                dom1.innerHTML=cliente.nombre+'<br>'+cliente.apellido+'<br>'+'no se puede retirar más efectivos';
            }else{
                dom1.innerHTML=cliente.nombre+'<br>'+cliente.apellido+'<br>'+'introduce un número';
            }
        }else{
            dom1.innerHTML=cliente.nombre+'<br>'+cliente.apellido+'<br>'+'no se puede retirar más efectivos';
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
        dom1.innerHTML+="no existe este cliente";
        break;
}
var array=Array(cliente1,cliente2,cliente3);
btn3.addEventListener('click',function(){
    str='';
    array.forEach(cliente => {
        str+="DNI: "+cliente.dni+"</br>";
    });
    dom2.innerHTML=str;
});

function cambioUser(cliente) { 
    if (dni==cliente.dni) {
        resultado='';
        for (const key in cliente) {
            resultado=resultado+key+': '+cliente[key]+'<br>';
        }
        dom1.innerHTML=resultado
    }
 }
 btn4.addEventListener('click',function(){
    dni=prompt("introduce tu DNI");
    array.forEach(Element => {
        cambioUser(Element);
    });
});

btn5.addEventListener("click", function() {
    let cliente={
        dni:prompt("introduce tu DNI"),
        nombre:prompt("introduce tu nombre"),
        apellido:prompt("introduce tu apellido"),
        cantidadDeDinero:Number(prompt("introduce tu saldo inicial")),
    };
    array.push(cliente);
});