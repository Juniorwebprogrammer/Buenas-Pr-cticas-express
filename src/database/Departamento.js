const mysql = require('./connection');

const getAllDepartamentos = async () => {
    let result;

    let query = "Select * from departamento";

    try {
        
        result = await sendQuery(query);
        result = JSON.stringify(result, null, 2);
        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, (err, result) => {
                    if(err){
                        reject(err)
                    } else {
                        resolve(result)
                    }
                })
            })
        }

    } catch (error) {
        console.log(error)
    }

    return result;
}

const getOneDepartamento = async (idDepartamento) => {
    let result;

    let query = "Select * from departamento where idDepartamento = ?";

    try {
        
        result = await sendQuery(query);
        result = JSON.stringify(result, null, 2);
        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, [idDepartamento], (err, result) => {
                    if(err){
                        reject(err)
                    } else {
                        resolve(result)
                    }
                })
            })
        }

    } catch (error) {
        console.log(error)
    }

    return result;
}


module.exports = {
    getAllDepartamentos,
    getOneDepartamento
}