module.exports = (sequelize, DataTypes) => {
    return sequelize.define('student', {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1,30]

        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1,50]
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1,30],
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        resume: {
            type: DataTypes.STRING,
            validate: {
                isURL: true
            }
        }
    })
}