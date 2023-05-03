const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {

    static init(sequelize) {
        return super.init(
            {
                username: {
                    type: Sequelize.STRING(40),
                    allowNull: false,
                    required: true,
                    unique: true,
                    defaultValue: 0,
                },
                password: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                    required: true,
                    unique: false,
                },
            },
            {
                sequelize,
                timestamps: false,
                underscored: false,
                modelName: "user",
                tableName: "user",
                paranoid: false,
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            }
        );
    }
    static associate(db){

    } 
}