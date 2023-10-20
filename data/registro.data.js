var db = require ("../db/db.js")

class RegistroData{
    constructor(){}
   
    select(tabla, columnasWhere, valoresWhere){
        return new Promise((resolve, reject)=>{
            var queryWhere = columnasWhere.map((col, i) => `${col} = $${i+1}`);
            var query = `SELECT * FROM ${tabla} WHERE ${queryWhere.join(' and ')}`;
            db.query(query, valoresWhere, (error, result) =>{
                if(error){
                    reject(error)
                    return
                }
                resolve(result)
            });
        });
    }

    insert(tabla, columnas, valores){
        return new Promise((resolve, reject)=>{
            var indexes = columnas.map((col, i) => `$${i+1}`)
            var query = `INSERT INTO ${tabla} (${columnas.join(',')}) VALUES (${indexes.join(',')}) RETURNING *`;
            db.query(query, valores, (error, result) =>{
                if(error){
                    reject(error)
                }
                resolve(result)
            });
        });
    }
}

const registro = new RegistroData()
module.exports = registro