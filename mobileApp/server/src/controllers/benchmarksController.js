import connectDb from "../database.js";
import UsersModel from "../models/UsersModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Sequelize } from "sequelize";
