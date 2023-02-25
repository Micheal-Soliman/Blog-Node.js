module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts",{
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            onDelete: 'cascade',
            onUpdate: 'cascade',
            foreignKey: {
                allowNull: false
            }
        })
        Posts.hasMany(models.Likes, {
            onDelete: 'cascade',
            onUpdate: 'cascade',
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Posts
}