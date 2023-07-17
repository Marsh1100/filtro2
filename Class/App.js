//Importar selectores del DOM
//import {$formAddDep, $tablaDep,$formAddCiudad} from "../js/selectores.js";
//Importar funciones
import {renderDep} from "../js/funciones.js"
import {} from '../js/funciones.js'

export class App {
    constructor(){
        this.initProgram();
    }

    initProgram(){
        renderDep();
        /*$formAddDep.addEventListener('submit',gestionDep);
        $tablaDep.addEventListener('click', seleccionTabla);
        $formAddCiudad.addEventListener('submit', agregarCiudad);*/
    }
}
