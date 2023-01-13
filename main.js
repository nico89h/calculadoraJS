
let texto=document.getElementById('texto');

function cambiarValor(valor) {
    if(texto.value==""){
        texto.value=valor;
    }else{
        texto.value=texto.value+valor;
    }
}
let botoncero=document.getElementById('boton0');
let botonuno=document.getElementById('boton1');
let botondos=document.getElementById('boton2');
let botontres=document.getElementById('boton3');
let botoncuatro=document.getElementById('boton4');
let botoncinco=document.getElementById('boton5');
let botonseis=document.getElementById('boton6');
let botonsiete=document.getElementById('boton7');
let botonocho=document.getElementById('boton8');
let botonueve=document.getElementById('boton9');
let botondivision=document.getElementById('division');
let botonmultiplicacion=document.getElementById('multiplicacion');
let botonresta=document.getElementById('resta');
let botonsuma=document.getElementById('suma');
let botonigual=document.getElementById('igual');
let botonC=document.getElementById('botonC');





botoncero.addEventListener('click',()=>{
    cambiarValor('0');
});

botonuno.addEventListener('click',()=>{
    cambiarValor('1');
});

botondos.addEventListener('click',()=>{
    cambiarValor('2');
});
botontres.addEventListener('click',()=>{
    cambiarValor('3');
});
botoncuatro.addEventListener('click',()=>{
    cambiarValor('4');
});
botoncinco.addEventListener('click',()=>{
    cambiarValor('5');
});
botonseis.addEventListener('click',()=>{
    cambiarValor('6');
});

botonsiete.addEventListener('click',()=>{
    cambiarValor('7');
});
botonocho.addEventListener('click',()=>{
    cambiarValor('8');
});
botonueve.addEventListener('click',()=>{
    cambiarValor('9');
});
botondivision.addEventListener('click',()=>{
    cambiarValor('/');

});

botonmultiplicacion.addEventListener('click',()=>{
    cambiarValor('*');

});
botonsuma.addEventListener('click',()=>{
    cambiarValor('+');

});
botonresta.addEventListener('click',()=>{
    cambiarValor('-');

});
boton.addEventListener('click',()=>{
    cambiarValor('*');

});

botonC.addEventListener('click',()=>{
    texto.value="";
});

botonigual.addEventListener('click',()=>{
    //aca se lee lo del input y se realiza la operacion



});