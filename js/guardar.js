
function guardar(){
    if(!localStorage.turno){
        localStorage.turno=1;
    }
    if(!localStorage.tablero){
        localStorage.tablero=JSON.stringify(['','','','','','','','','']);
    }
    const guardarTablero = (caja)=>{
        localStorage.tablero=JSON.stringify(caja);
    }
    const guardarTurno = (tr)=>{
        localStorage.turno=tr;
    }
    const leerTablero=()=> JSON.parse(localStorage.tablero);
    const leerTurno=()=>parseInt(localStorage.turno);

    return {guardarTablero, guardarTurno, leerTablero, leerTurno};
}
export{guardar}