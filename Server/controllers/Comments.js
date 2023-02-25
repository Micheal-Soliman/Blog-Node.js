const { Comments } = require('../models')

const getCommentsOfPost = async (req, res) => {
    const { postId } = req.params
    const comments = await Comments.findAll({ where: { PostId: postId } })
    return res.json(comments)
}

const addComment = async (req, res) => {
    const comment = req.body
    comment.UserId = req.user.id
    await Comments.create(comment)
    return res.json(comment)
}

const updateComment = async (req, res) => {
    const comment = req.body
    await Comments.update({text: comment.text}, {where: {id: comment.id}})
    return res.json(comment)
}

const deleteComment = async (req, res) => {
    const { id } = req.params
    await Comments.destroy({where: {id : id}})
    return res.json('Comment Is Deleted')
}

module.exports = { getCommentsOfPost, addComment, deleteComment, updateComment }