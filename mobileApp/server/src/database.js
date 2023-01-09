import Sequelize from 'sequelize'

async function connectDb() {
    try {
        const sequelize = new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {
                host: process.env.DB_HOST,
                dialect: 'mysql',
                pool: {
                    max: 10,
                    min: 0,
                }
            }
        )
        await sequelize.authenticate()
            .then(() => {
                console.log("Abierta Sequelize")
            })
        return sequelize;
    } catch (error) {
        console.log(error)
    }
}

export default connectDb