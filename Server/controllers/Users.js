const bcrypt = require('bcrypt')
const { Users } = require('../models')
const { sign } = require('jsonwebtoken')

const register = async (req, res) => {
    const { username, password } = req.body
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash
        })
    })
    return res.json('User Is Added')
}

const login = async (req, res) => {
    const { password } = req.body
    const user = req.user
    bcrypt.compare(password, user.password).then((match) => {
        if (!match) return res.json({ error: 'Wrong Username And Password Combination' })
        const accessToken = sign({ id: user.id, username: user.username }, 'importantSecret')
        return res.json(accessToken)
    })
}

const changePassword = async (req, res) => {
    const { oldPassword,  newPassword} = req.body
    const user = await Users.findOne({where: {username: req.user.username}})
    bcrypt.compare(oldPassword, user.password).then((match) => {
        if (!match) return res.json({ error: 'Wrong Password' })
        bcrypt.hash(newPassword, 10).then((hash) => {
            Users.update({password: hash}, {where: {username: req.user.username}})
        })
        return res.json("Password Is Changed")
    })
}

const getUser = (req, res) => {
    return res.json(req.user)
}

module.exports = { register, login, getUser, changePassword }