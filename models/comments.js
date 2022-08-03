const CommentModel = (sequelize, Sequelize) => {
    const {INTEGER, STRING, FLOAT, BOOLEAN, DATE} = Sequelize
    const Comment = sequelize.define('User', {
        CommentId: { type: STRING, primaryKey: true },
        VideoId: { type: STRING, allowNull: false },
        UserId: {type: STRING, allowNull: true},
        CommentText: {type: STRING, primaryKey: false},
        NumberOfLikes: { type: INTEGER, allowNull: true },
        NumberOfDislikes: {type: INTEGER, allowNull: true}
    })
    return Comment
}

module.exports = CommentModel