import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import rutas from './rutas.js';
import { authorization, getatoken } from './calendario/calendario.js';


dotenv.config();
const app = express();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'contrasenia-jeje';
app.use(express.json());