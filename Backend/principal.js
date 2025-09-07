import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import * as sesiones from './sesiones.js';
import * as calendario from './calendario.js';
import rutas from './rutas.js';

dotenv.config();
const app = express();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'contrasenia-jeje';
app.use(express.json());
app.use(rutas); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;