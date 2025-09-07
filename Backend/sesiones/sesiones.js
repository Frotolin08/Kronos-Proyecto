const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'contrasenia-jeje';
    
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'contrasenia-jeje';

const login = async (req, res) => {

    const {usuarioI, mailI, contraseniaP} = req.body;
    let persona;
    
    try {

            if (mailI) {
      persona = await prisma.persona.findUnique({ 
        where: { 
            mail: mailI 
        } 
    });
    }

    if (!persona && usuarioI) {
      persona = await prisma.persona.findUnique({ 
        where: { 
            usuario: usuarioI 
        } 
    });
    }
    
    if (!persona || !contraseniaP) {
      return res.status(401).json({ error: "Wrong data" });
    }

    
    const contraseniaI = await argon2.verify(persona.contrasenia, contraseniaP);
    if (!contraseniaI) {
      return res.status(401).json({ error: "Wrong data" });
    }
    
        const token = jwt.sign({ 
            personaId: persona.id, 
            mail: persona.email 
        }, JWT_SECRET, { 
            expiresIn: '8h' 
        });

        res.status(200).json({ 
            message: "Logged in successfully", 
            token 
        });
        
    } catch (error) {
        console.error("unsuccessful login", err);
    }
    
};

const signup = async (req, res) => {
    const {usuario, nombre, mail, contraseniaPrior} = req.body;

    try {

        if (!usuario || !nombre || !mail || !contraseniaPrior) {
            return res.status(400).json(error, "Email and password required");
        }

        const contrasenia = await argon2.hash(contraseniaPrior);

        const persona = await prisma.persona.create({
            data: {
                usuario: usuario,
                nombre: nombre,
                mail: mail,
                contrasenia: contrasenia,

            },
        });

        const token = jwt.sign({ 
            personaId: persona.id, 
            mail: persona.email 
        }, JWT_SECRET, { 
            expiresIn: '8h' 
        });

        res.status(201).json("user created successfully", token);

    } catch (error){
        if (error.code === 'P2002') {
            return res.status(409).json({ error: "Email already used" });
        }
        console.error("error signing up", err);
        res.status(500).json({ error: "Internal Server Error" });
    };
};

module.exports = {
  login,
  signup
};