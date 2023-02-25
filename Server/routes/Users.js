const express = require('express')
const { register, login, getUser, changePassword } = require('../controllers/Users')
const { checkIfUserExist, strengthPassword, checkIfUserNotExist } = require('../middlewares/Users')
const { validateToken } = require('../middlewares/Auth')
const router = express.Router()

router.route('/').post( checkIfUserExist,strengthPassword ,register)
router.route('/login').post(checkIfUserNotExist, login)
router.route('/user').get(validateToken, getUser)
router.route('/user').put(validateToken, changePassword)

module.exports = router