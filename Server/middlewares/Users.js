const { Users } = require('../models')

const checkIfUserExist = async (req, res, next) => {
    const { username } = req.body
    const user = await Users.findOne({ where: { username: username } })
    if (user) return res.json({ error: 'User Is Already Exist' })
    next();
}

const strengthPassword = async (req, res, next) => {
    const { password } = req.body
    const strength = password.length >= 8 ? true : false
    if (!strength) return res.json({ error: 'Password is weak' })
    next();
}

const checkIfUserNotExist = async (req, res, next) => {
    const { username } = req.body
    const user = await Users.findOne({ where: { username: username } })
    if (!user) return res.json({ error: 'User Not Found' })
    req.user = user
    next();
}

module.exports = { checkIfUserExist, strengthPassword, checkIfUserNotExist }