const express = require('express')
const { addLike } = require('../controllers/Likes')
const { validateToken } = require('../middlewares/Auth')
const router = express.Router()

router.route('/:postId').post(validateToken, addLike)


module.exports = router