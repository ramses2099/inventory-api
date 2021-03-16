const { DataTypes } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    const Customer = sequelize.define(
        "customers",
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            tel: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE              
            },
            updatedAt: {
                type: DataTypes.DATE
            }
        },
        {
            tableName: "customers",
            timestamps: false
        }
    );

    Customer.associate = function(models){
       
    }

    return Customer;
}