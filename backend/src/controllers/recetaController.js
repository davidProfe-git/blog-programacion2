const Model = require('../models/recetaModel')

class RecetaController{
//get - para optener todas mis recetas          
    static async obtenerRecetas(request, response){
        const recetas = await Model.obtenerRecetas()
        response.json({
            succsess: true,
            data: recetas
        })

    }
}