const {Likes} = require("../models")

const addLike = async (req, res) => {
    const {postId} = req.params
    const like = {UserId: req.user.id, PostId: postId}
    const findLike = await Likes.findOne({where: like})
    if (findLike) {
        await Likes.destroy({where: like})
        return res.json(false)
    } else {
        await Likes.create(like)
        return res.json(true)
    }
}

module.exports = {addLike}