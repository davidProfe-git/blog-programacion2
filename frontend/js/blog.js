const API_URL = "http://localhost:3000/api/recetas/"

fetch(API_URL)
.then(response => response.json())
.then(datos =>{

        let seccion = document.getElementById("recetas-lista");
        datos.daticos.forEach(receta => {
              seccion.innerHTML += `
        <div class="receta-card">
                <img src="${receta.imagen_url}" alt="">
                <h3>${receta.titulo}</h3>
                <p class="receta-time">⏱️${receta.tiempo_preparacion}</p>
                <p<
             </div> 
        `  
        });
        

})
