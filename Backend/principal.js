import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import setupsesiones from './sesiones/sesiones.js';
import setupcalendario from './calendario.js';
import setupautenticacion from './autenticacion.js';
import setuprouter from './rutas.js';
import setuparchivos from './archivos/archivos.js';

const {authorization, getatoken, lookfortoken, permision, getevents, redirectwithgoogle, createevents, deleteevents, updateevents} = setupcalendario();
const { login, signup } = setupsesiones(JWT_SECRET);
const { autenticacion } = setupautenticacion(JWT_SECRET);
const {seefile, uploadfile} = setuparchivos();
const router = setuprouter({ login, signup, authentication, getevents, permision, redirectwithgoogle, createevents, deleteevents, updateevents, seefile, uploadfile});

dotenv.config();
const app = express();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'contrasenia-jeje';
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;