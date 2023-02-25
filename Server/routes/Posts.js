const express = require('express')
const { getAllPosts, getPost, deletePost, addPost, getAllPostsOfUser, getAllPostsLikedFromUser, updatePost } = require('../controllers/Posts')
const router = express.Router()
const {validateToken} = require('../middlewares/Auth')

router.route('/').get(validateToken, getAllPosts)
router.route('/:id').get(validateToken, getPost)
router.route('/user/:id').get(validateToken, getAllPostsOfUser)
router.route('/like/:id').get(validateToken, getAllPostsLikedFromUser)
router.route('/').post(validateToken, addPost)
router.route('/').put(validateToken, updatePost)
router.route('/:id').delete(validateToken, deletePost)

module.exports = router