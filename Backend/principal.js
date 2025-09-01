import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

dotenv.config();
const app = express();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'contrasenia-jeje'; 
const rutas = require("/rutas.js")
const { authorization, getatoken} = require('/calendario/calendario.js');
app.use(express.json());


// chequear desde aca (gemini+modificaciones+proyecto pasado+extras)
// TAMBIEN FALTA ORDENAR ARCHIVOS


app.get('/auth/google', (req, res) => {
  const url = getGoogleAuthUrl();
  res.redirect(url);
});

// Route for Google to send the user back to
app.get('/auth/google/callback', async (req, res) => {
  const code = req.query.code;
  if (!code) {
    return res.status(400).send('No authorization code provided.');
  }
  
  try {
    const tokens = await exchangeCodeForTokens(code);
    // You must now save tokens.refresh_token to your user's database entry!
    // After saving, redirect or send a success message to your frontend.
    res.send('Authorization successful! Your refresh token has been logged to the console. Now go save it!');
  } catch (error) {
    res.status(500).send('Authorization failed.');
  }
});

// Example route to get events for a user (after they have a refresh token)
app.get('/api/calendar/events', async (req, res) => {
  // You must get the user's refresh token from your database here.
  // For this example, we'll use a placeholder.
  const userRefreshToken = 'TOKEN_FROM_YOUR_DB'; 
  
  try {
    const events = await getEvents(userRefreshToken);
    res.json(events);
  } catch (error) {
    res.status(500).send('Failed to get events.');
  }
});
