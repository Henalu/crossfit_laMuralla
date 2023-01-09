import connectDb from "../database.js";
import UsersModel from "../models/UsersModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Sequelize } from "sequelize";

const { Op } = Sequelize;

export const test = async (req, res) => {
    return res.json({ success: true, message: 'Welcome', data: 'works' })
}

export const getUsers = async (req, res) => {
    const connection = await connectDb();
    const user = await UsersModel.create(connection)
    const data = await user.findAll();
    res.json(data);
}

export const getTask = async (req, res) => {
    const connection = await connect();
    // Query the database with the task id
    const [rows] = await connection.query("SELECT * FROM tasks WHERE id =?", [req.params.id]);
    res.json(rows[0]);
}

export const findUser = async (req, res) => {
    try {
        const connection = await connectDb()
        const user = await UsersModel.create(connection)
        res.json(await user.findOne({ where: {  email: req.params.email } }));
    }
    catch (error) {
        console.log(error); return res.status(400).json({});
    }
}

export const registerUser = async (req, res) => {
    try {
        const connection = await connectDb();
        const { email, first_name, last_name, password } = req.body;
        const usr = await UsersModel.create(connection);
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await usr.create({
            first_name,
            last_name,
            email,
            password_hash: hashedPassword
        });
        res.json({
            message: "User registered successfully",
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({});
    }
}
