import {Router} from 'express'
import {getEmployees,getEmployee,createEmployees,updateEmployees,deleteEmployees} from '../controllers/employees.controller.js'
//Crear una seccion de rutas y ponerle nombres
const router = Router()
router.get('/employees',getEmployees)
router.get('/employees/:id',getEmployee)
router.post('/employees', createEmployees)
router.patch('/employees/:id',updateEmployees )
router.delete('/employees/:id', deleteEmployees)
export default router