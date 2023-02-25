const express = require('express')
const { getCommentsOfPost, addComment, deleteComment, updateComment } = require('../controllers/Comments')
const { validateToken } = require('../middlewares/Auth')
const router = express.Router()


router.route('/:postId').get(validateToken, getCommentsOfPost)
router.route('/').post(validateToken ,addComment)
router.route('/').put(validateToken ,updateComment)
router.route('/:id').delete(validateToken , deleteComment)

module.exports = router