const UserModel = (sequelize, Sequelize) => {
    const {INTEGER, STRING, FLOAT, BOOLEAN, DATE} = Sequelize
    const User = sequelize.define('User', {
        UserId: { type: STRING, primaryKey: true, allowNull: true },
        UserEmail: { type: STRING, primaryKey: true, allowNull: false },
        UserPassword: { type: STRING, allowNull: false },
        NumberOfLikes: { type: INTEGER, allowNull: true },
        NumberOfDislikes: {type: INTEGER, allowNull: true}
    })
    return User
}

module.exports = UserModel