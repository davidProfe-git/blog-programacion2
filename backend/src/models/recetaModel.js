const DB = require('../config/database')

class RecetasModel {
    //obtener recetas
    static async obtenerRecetas(){
        const [rows] = await DB.query('SELECT * FROM recetas')
        return rows
    }

}

module.exports = RecetasModel