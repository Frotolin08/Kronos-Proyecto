import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

dotenv.config();
const app = express();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'contrasenia-jeje'; 
app.use(express.json());


const iniciar = async (req, res) => {
       
    try {

        const {usuarioI, mailI, contraseniaP} = req.body;

        console.log(req.body);

        const contraseniaI = await argon2.verify();

        if (!contraseniaI || !mailI || !usuarioI){
            console.log("error al buscar usuario");
        }
      
        /* const contraseñaValida = await argon2.verify(userBusqueda.contraseña, contraseñaVer);
        */

        const datos = await kronos.findOne({      
            where:{
                contrasenia: contraseniaI,
                usuario: usuarioI,
                mail: mailI,
            }
        });

        if (datos) {
            const id = datos.id_persona;
        }

        res.status(200).json({ 
                message: 'Usuario encontrado e iniciado',
                id_persona: id_persona
            });

    } catch  {
        console.error("no se pudo ingresar al usuario", err);
    }
    
} 
/*
 const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required." });
    }

    try {
        // Find the user by their email
        const user = await prisma.user.findUnique({
            where: { email },
        });

        // Check if the user exists
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password." });
        }

        // Compare the provided password with the hashed password in the database
        const passwordMatches = await argon2.verify(user.password, password);

        // If passwords don't match, return an error
        if (!passwordMatches) {
            return res.status(401).json({ error: "Invalid email or password." });
        }

        // Generate a new token for the logged-in user
        const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

        // Send a success response with the token
        res.status(200).json({ message: "Logged in successfully", token });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Define your routes
app.post("/users/signup", signUser);
app.post("/users/login", loginUser);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

*/
const crear = async (req, res) => {
    try {

        const {usuario, nombre, mail, contraseniaPrior} = req.body;
       /*
        const usuario = document.getElementById("usuario").value; // falta input d usuario 
        const nombre = docu ment.getElementById("nombre").value; // falta input d nombre
        const mail = document.getElementById("mail").value; // falta input d mail
        const contraseniaPrior = document.getElementById("contrasenia").value; // falta input d contraseniaPrior
        */ 
        const contrasenia = await argon2.hash(contraseniaPrior); // pendiente: instalar argon2

        await query(
            "INSERT INTO persona (usuario, nombre, mail, contrasenia) VALUES ($usuario, $nombre, $mail, $contraseniaPrior)",
            [usuario, nombre, mail, contraseniaPrior],
        );
        return res.status(201).json("creado bien");
    } catch {
        console.error("no se pudo crear el usuario", err);
    };
};


/*
const signUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required." });
    }

    try {
        // Hash the password for security
        const hashedPassword = await argon2.hash(password);

        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });

        // Generate a token for the new user
        const token = jwt.sign({ userId: newUser.id, email: newUser.email }, JWT_SECRET, { expiresIn: '1h' });

        // Send a success response with the token
        res.status(201).json({ message: "User created successfully", token });
    } catch (error) {
        // Handle unique constraint violation (duplicate email)
        if (error.code === 'P2002') {
            return res.status(409).json({ error: "Email already in use." });
        }
        console.error("Error signing up user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

*/