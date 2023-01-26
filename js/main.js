import { guardar } from "./guardar.js";
let resultado = document.querySelector('.salida');
let col = document.querySelectorAll('.col');
let reiniciar = document.querySelector('.titulo');
const {guardarTablero, guardarTurno, leerTablero, leerTurno}=guardar();
let gana=false;
function inicio(){
    let resultado = leerTablero();
    let i=0;
    resultado.forEach(element => {
        col[i].firstElementChild.textContent=element;
        i++;
    });
    ganador();
    empezar();
}
reiniciar.addEventListener('click', ()=>{
    let cadena = ['','','','','','','','',''];
    guardarTablero(cadena);
    guardarTurno(1);
    for(let i=0;i<col.length;i++){
        col[i].firstElementChild.textContent='';
    }
    gana=false;
    resultado.textContent=`Turno: ${leerTurno()}`;
});
function empezar(){
    col.forEach(element => {
        element.addEventListener('click',function(){
            let texto;
            let tur;
           if(this.firstElementChild.textContent==='' && !gana){
            if(leerTurno()===1){
                texto='X';
                tur=2;
            }else if(leerTurno()===2){
                texto='O';
                tur=1;
            }
            guardarTurno(tur);
            this.firstElementChild.textContent=texto;
            actualizar();
            
            ganador();
           }
        });
    });
}
function ganador(){
    let todo = leerTablero();

    let filas1= todo[0]===todo[1] && todo[1]===todo[2] && todo[0]!='';
    let filas2= todo[3]===todo[4] && todo[4]===todo[5] && todo[5]!='';
    let filas3= todo[6]===todo[7] && todo[7]===todo[8] && todo[7]!='';

    let col1=todo[0]===todo[3] && todo[3]===todo[6] && todo[0]!='';
    let col2=todo[1]===todo[4] && todo[7]===todo[4] && todo[4]!='';
    let col3=todo[2]===todo[5] && todo[8]===todo[5] && todo[5]!='';

    let x1 = todo[0]===todo[4] && todo[4]===todo[8] && todo[0]!='';
    let x2 = todo[2]===todo[4] && todo[4]===todo[6] && todo[2]!='';

    if(filas1 || filas2 || filas3 || col1 || col2 || col3 || x1 || x2){
        gana=true;
        let jugador = (leerTurno()===1)?'Gana jugador 2':'Gana jugador 1';
        resultado.textContent=jugador;
    }else{
        resultado.textContent=`Turno: ${leerTurno()}`;
    }
    
}
function actualizar(){
    let cad=[];
    for(let i=0;i<col.length;i++){
        cad[i]=col[i].firstElementChild.textContent;
    }
    guardarTablero(cad);
}

window.onload=inicio;