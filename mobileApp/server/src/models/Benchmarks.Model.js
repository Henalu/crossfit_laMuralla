import { DataTypes } from 'sequelize';

const BenchmarksModel = {
    create: async (sequelize) => {
        const Benchmarks = sequelize.define('benchmarks', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            snatch: {
                type: DataTypes.INTEGER,
                unique: true,
                allowNull: false
            },
            deadlift: {
                type: DataTypes.INTEGER,
                unique: false,
                allowNull: false
            },
            pushPress: {
                type: DataTypes.INTEGER,
                unique: false,
            },
            backSquat: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            powerClean: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: false
            }
        }, {
            timestamps: false
        });
        return Users;
    }
}

export default BenchmarksModel;