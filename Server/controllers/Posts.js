const { Posts, Likes } = require('../models')


const getAllPosts = async (req, res) => {
    const listOfPosts = await Posts.findAll()
    res.json(listOfPosts)
}

const getPost = async (req, res) => {
    const {id} = req.params
    const post = await Posts.findByPk(id)
    res.json(post)
}

const getAllPostsOfUser = async (req, res) => {
    const {id} = req.params
    const posts = await Posts.findAll({where: {UserId: id}})
    res.json(posts)
}

const getAllPostsLikedFromUser = async (req, res) => {
    const {id} = req.params
    const posts = await Posts.findAll({include: {
        model: Likes,
        where: {UserId: id}
    }})
    res.json(posts)
}

const addPost = async (req, res) => {
    const post = req.body
    post.username = req.user.username
    post.UserId = req.user.id
    await Posts.create(post)
    res.json(post)
}

const deletePost = async (req, res) => {
    const { id } = req.params
    await Posts.destroy({ where: { id: id } })
    res.json("Post Is Deleted")
}

const updatePost = async (req, res) => {
    const post = req.body
    await Posts.update({title: post.title, text: post.text}, {where: {id: post.id}})
    res.json(post)
}

module.exports = { getAllPosts, getPost, addPost, deletePost, updatePost, getAllPostsOfUser, getAllPostsLikedFromUser }