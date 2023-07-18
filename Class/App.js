//Importar selectores del DOM
//import {$formAddDep, $tablaDep, $formAddCiudad, $navInicio, $navTemaClaro, $navTemaOscuro,  $navLetraG, $navLetraP} from "../js/selectores.js";

import {$formAddDep, $tablaDep, $formAddCiudad, $navInicio} from "../js/selectores.js";
//Importar funciones
import {renderDep,inicio,gestionDep,seleccionTabla,agregarCiudad} from "../js/funciones.js"

export class App {
    constructor(){
        this.initProgram();
    }

    initProgram(){
        renderDep();
        $navInicio.addEventListener('click',inicio);
        //$navTemaClaro.addEventListener('click',changeTema)
        //$navTemaOscuro.addEventListener('click',changeTema)

        $formAddDep.addEventListener('submit',gestionDep);
        $tablaDep.addEventListener('click', seleccionTabla);
        $formAddCiudad.addEventListener('submit', agregarCiudad);
    }
}
