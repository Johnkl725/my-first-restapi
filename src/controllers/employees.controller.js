import {pool} from '../db.js'
export const getEmployees = async (req,res) => {
    // Metodo HTTP GET
    try {
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }

}
export const getEmployee = async (req,res) => {
    // Metodo HTTP GET
    try {
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?',[req.params.id])
        if(rows.length<=0) return res.status(404).json({
            message: 'Empleado no encontrado'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}
export const createEmployees = async (req,res) => {
    // Metodo HTTP POST
    //res.send({rows})
    try {
        const {name,salary} = req.body
        const [rows] = await pool.query('INSERT INTO employee(name,salary) VALUES (?, ?)', [name,salary])
        res.send({
            id: rows.insertId,
            name,
            salary,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}
export const updateEmployees = async (req,res) => {
    try {
        const {id} = req.params
        const {name,salary} = req.body
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,name) WHERE id = ?'
        ,[name,salary,id])
        console.log(result)
        if(result.affectedRows<=0) return res.status(404).json({
            message: 'Empleado no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?',[id])
        res.json(rows[0]) 
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}
export const deleteEmployees = async (req,res) => {
    // Metodo HTTP DELETE
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?',[req.params.id])
        if(result.affectedRows<=0) return res.status(404).json({
            message: 'Empleado no encontrado'
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}