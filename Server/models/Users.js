module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define ('Users', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    Users.associate = (models) => {
        Users.hasMany(models.Posts, {
            onDelete: 'cascade',
            onUpdate: 'cascade',
            foreignKey: {
                allowNull: false
            }
        })
        Users.hasMany(models.Comments, {
            onDelete: 'cascade',
            onUpdate: 'cascade',
            foreignKey: {
                allowNull: false
            }
        })
        Users.hasMany(models.Likes, {
            onDelete: 'cascade',
            onUpdate: 'cascade',
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Users
}