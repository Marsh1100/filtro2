//API ESTADO ATMÓSFERICO
const appId='961ba900fa9486fe75a948a5579b0891';
//const urlClima = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`;

//API JSON-SERVE
const urlDep = "http://localhost:3000/Departamento";
const urlCiudades = "http://localhost:3000/Ciudades";

//Obtener departamentos de la API - (GET)
export const getDep = async () => {
    try {
        const result = await fetch(`${urlDep}`);
        const dep = await result.json();
        return dep
    }catch(error){
        console.log(error);
    }
}


// Insertar una nueva Departamento en la REST API - Método POST
export const newDep = async (dep) => {
    console.log(dep);
    try{
       await fetch(urlDep,{
            method: 'POST',
            body: JSON.stringify(dep), // Se envia lo que va a contener
            headers:{
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html'

    }catch(error){
        console.log(error);
    }
}

// Eliminar una Departamento en la REST API - Método delete
export const deleteDep = async (idDep) => {
    try{
        await fetch(`${urlDep}/${idDep}`,{
            method: 'DELETE'
        })
    }catch(error){
        console.log(error);
    }
}

//Editar una Departamento en la RESP API - Método patch
export const editDep = async (edicion, idDep) => {
    try {
        await fetch(`${urlDep}/${idDep}`,{
            method: 'PATCH',
            body: JSON.stringify(edicion),
            headers: {'Content-Type': 'application/json'}
        })
    } catch (error) {
        console.log(error);
    }
}


////////////////////////////////////////////////////////////
//Obtener ciudades de la API - (GET) filter según idDep
export const getCiudadesFilter = async (idDep) => {
    try {
        const result = await fetch(`${urlCiudades}?departamentoId=${idDep}`);
        const ciudades = await result.json();
        return ciudades
    }catch(error){
        console.log(error);
    }
}
/*
// Insertar un nuevo Punto en la REST API - Método POST
export const newPunto = async (punto) => {
    try{
       await fetch(urlPuntos,{
            method: 'POST',
            body: JSON.stringify(punto), // Se envia lo que va a contener
            headers:{
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html'

    }catch(error){
        console.log(error);
    }
}

export const deletePunto = async (idPunto,idRuta,editarPuntos) => {
    try{
        await fetch(`${urlPuntos}/${idPunto}`,{
            method: 'DELETE'
        })

        await fetch(`${urlRutas}/${idRuta}`,{
            method: 'PATCH',
            body: JSON.stringify(editarPuntos),
            headers: {'Content-Type': 'application/json'}
        })
    }catch(error){
        console.log(error);
    }
}*/