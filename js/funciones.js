//Importar peticiones 
import {getDep} from "../apiConnection/API.js"
//Importar selectores del DOM



//1.FUNCIONES DEL CRUD DE DEPARTAMENTOS

//1.1 GET -Render las departamentos
export async function renderDep(){
    const listaRutas = await getDep();  

    console.log(listaRutas)
};
