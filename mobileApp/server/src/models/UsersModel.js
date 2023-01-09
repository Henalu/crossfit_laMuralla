import { DataTypes } from 'sequelize';

const UserModel = {
    create: async (sequelize) => {
        const Users = sequelize.define('users', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            first_name: {
                type: DataTypes.STRING,
                unique: false,
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING,
                unique: false,
            },
            password_hash: {
                type: DataTypes.STRING,
                allowNull: false
            },
            is_admin: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }
        }, {
            timestamps: false
        });
        return Users;
    }
}

export default UserModel;