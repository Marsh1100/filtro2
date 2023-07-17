
const urlDep = "http://localhost:3000/Departamento";
const urlPuntos = "http://localhost:3000/Ciudades";

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

/*
// Insertar una nueva Ruta en la REST API - Método POST
export const newRuta = async (ruta) => {
    console.log(ruta);
    try{
       await fetch(urlRutas,{
            method: 'POST',
            body: JSON.stringify(ruta), // Se envia lo que va a contener
            headers:{
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html'

    }catch(error){
        console.log(error);
    }
}

// Eliminar una Ruta en la REST API - Método delete
export const deleteRuta = async (idRuta) => {
    try{
        await fetch(`${urlRutas}/${idRuta}`,{
            method: 'DELETE'
        })
    }catch(error){
        console.log(error);
    }
}

//Editar una Ruta en la RESP API - Método patch
export const editRuta = async (edicion, idRuta) => {
    try {
        await fetch(`${urlRutas}/${idRuta}`,{
            method: 'PATCH',
            body: JSON.stringify(edicion),
            headers: {'Content-Type': 'application/json'}
        })
    } catch (error) {
        console.log(error);
    }
}

//Editar cantidad de puntos que tiene una ruta en la RESP API - Método patch
export const editPuntos = async (idRuta,incrementarPunto) => {

    try {
        await fetch(`${urlRutas}/${idRuta}`,{
            method: 'PATCH',
            body: JSON.stringify(incrementarPunto),
            headers: {'Content-Type': 'application/json'}
        })
    } catch (error) {
        console.log(error);
    }
}
////////////////////////////////////////////////////////////
//Obtener puntos de la API - (GET) filter según idRuta
export const getPuntosFilter = async (idRuta) => {
    try {
        const result = await fetch(`${urlPuntos}?rutaId=${idRuta}`);
        const puntos = await result.json();
        return puntos
    }catch(error){
        console.log(error);
    }
}

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