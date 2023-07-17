//Importar peticiones 
import {getDep,newDep,deleteDep,editDep,getCiudadesFilter,newCiudad,deleteCiudad} from "../apiConnection/API.js"
//Importar selectores del DOM
import {$tablaDep,$inputDep,$btnDep, $formAddDep,$subTitle,$formAddCiudad, $modalTitle,$modalIdDep,$modalNomCiudad,$modalImg,$modalLatitud,$modalLongitud} from "./selectores.js";


//1.FUNCIONES DEL CRUD DE DEPARTAMENTOS

//1.1 GET -Render las departamentos (LEER)
export async function renderDep(){
    const listaDep = await getDep();  

    $tablaDep.innerHTML=" ";

    listaDep.forEach((dep,index)=>{
        const {id,nomDepartamento} = dep;
        let html = `<tr>
                        <th scope="row">${index+1}</th>
                        <td>${nomDepartamento}</td>
                        <td>
                            <button data-dep="${id}"  data-posicion="${index}"  "type="button" class="addDep bi bi-plus-square" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></button>
                        </td>
                        <td>
                            <button  data-dep="${id}" data-bs-target="#p${id}" type="button" class="bi bi-eye" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample"></button>
                        </td>
                        <td>
                            <button data-dep="${id}" type="button" class="btn btn-warning bi bi-pencil-square" data-posicion="${index}"></button>

                            <button data-dep="${id}" type="button" class="btn btn-danger bi bi-trash delete-dep"></button>
                        </td>
                    </tr>

                    <tr>
                        <td colspan="5" style="padding: 0;">
                            <div class="collapse" id="p${id}">
                                <div class="cardCiudades" id="c${id}">
                                <!--Se añade de forma dinámica-->
                                </div>
                            </div>
                        </td>
                    </tr>`;

        $tablaDep.insertAdjacentHTML('beforeend',html);
            
    });
};

//1.2 Gestion Departamento (AGREGAR Y EDITAR )
export function  gestionDep(e){
    e.preventDefault();
 
     const nomDepartamento = $inputDep.value;
    
     //POST - AGREGAR DEPARTAMENTO
     if($btnDep.textContent === "Guardar"){
         //Nuevo objeto Deparatamento
         const nuevoDep ={
             "id": Date.now(),
             nomDepartamento
         }
         newDep(nuevoDep);
    
    //1.3 PATCH - Editar Nombre del departamento
     }else{
        let idDep = (e.target.dataset.dep) 
        let edicion = {"nomDepartamento":nomDepartamento};
        editDep(edicion,idDep);
     }
     
 }

//2 FUNCIONES DE CIUDADES Read-Create-Delete
//2.1 Render CIUDADES
async function renderCiudades(idDep){

    //Obtener solo las ciudades de una ciudad específica
    let listaCiudadesFilter = await getCiudadesFilter(idDep);
    const $cartsCiudad = document.getElementById(`c${idDep}`);
    $cartsCiudad.innerHTML = " "; //Se deja vacío


    listaCiudadesFilter.forEach(ciudad=>{
        const {id,nomCiudad, imagen} =ciudad;
        
        let html = `<div class="card" style="width: 18rem;">
                            <img src="${imagen}" class="card-img-top" alt="imagen.jpg">
                            <div class="card-body">
                            <p class="card-text"><b>${nomCiudad}</b></p>
                            <div>
                                <button type="button" class="btn btn-danger bi bi-trash delete-ciudad" id="${id}" data-dep="${idDep}" </button>
                            </div>
                            </div>
                        </div>`;
        $cartsCiudad.insertAdjacentHTML('beforeend', html)
        
    });
    
}

//2.2 Agregar Ciudad 
export async function agregarCiudad(e){
    e.preventDefault();
    let id = Date.now();
    let nomCiudad = $modalNomCiudad.value;
    let departamentoId = Number($modalIdDep.value);
    let imagen = $modalImg.value;
    let coorddepartamentoIdenadas = {"lat": $modalLatitud, "lon": $modalLongitud}
    //Objeto Ciudad
    let nuevaCiudad = {
        id,
        nomCiudad,
        departamentoId,
        imagen,
        coorddepartamentoIdenadas
    }
   await newCiudad(nuevaCiudad);

}

//AddEventListener de botones de la tabla

export async function seleccionTabla(e){
    let clase = e.target.className
    let idDep = parseInt(e.target.dataset.dep);

    if(clase.includes("bi-pencil-square")){
        let posicion = parseInt(e.target.dataset.posicion)*5;
        editarDep(idDep,posicion)
    }else if(clase.includes("delete-dep")){
        //Confirmar delete

        //1.3 DELETE departamento
        deleteDep(idDep);

    }else if(clase.includes("bi-plus-square")){
        let posicion = parseInt(e.target.dataset.posicion)*5;    
        formularioCiudad(idDep,posicion);
    }else if(clase.includes("bi-eye")){
        renderCiudades(idDep);
    //2.3 DELETE Ciudad
    }else if(clase.includes("delete-ciudad")){
        let idCiudad = parseInt(e.target.id);
        deleteCiudad(idCiudad);  
    }
}

//0. Otras funciones
//0.1
export function editarDep(idDep,posicion){
    $formAddDep.style.display = "flex";
    $subTitle.textContent="Edición Departamento";

    const $tdTable = document.getElementsByTagName("td");

    $inputDep.value = $tdTable[posicion].innerHTML;

    $btnDep.textContent = 'Confirmar';
    $formAddDep.setAttribute('data-dep',idDep);
}
//0.2
function formularioCiudad(idDep,posicion){
    const $tdTable = document.getElementsByTagName("td");
    $modalTitle.innerText = $tdTable[posicion].innerHTML;
    $modalIdDep.value = idDep;
}

//0.4 Colapsar los puntos de las rutas
function colapsarPuntos(){
    let listClass = document.getElementsByClassName('collapse');
    for (let i = 0; i < listClass.length; i++) {
        listClass[i].className = "collapse";
    }
}
