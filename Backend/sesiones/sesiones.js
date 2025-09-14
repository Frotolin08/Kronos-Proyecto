import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
const prisma = new PrismaClient();

const setupsesiones = (JWT_SECRET) => {

    const login = async (req, res) => {
        const {usuarioI, mailI, contraseniaP} = req.body;
        let persona;
        
        try {
            if (mailI) {
                persona = await prisma.persona.findUnique({ 
                    where: { mail: mailI } 
                });
            } else if (usuarioI) {
                persona = await prisma.persona.findUnique({ 
                    where: { usuario: usuarioI } 
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
                mail: persona.mail 
            }, JWT_SECRET, { 
                expiresIn: '8h' 
            });

            res.status(200).json({ 
                message: "Logged in successfully", 
                token 
            });

        } catch (error) {
            console.error("unsuccessful login", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
        
    }

    const signup = async (req, res) => {
        const {usuario, nombre, mail, contraseniaPrior} = req.body;

        try {

            if (!usuario || !nombre || !mail || !contraseniaPrior) {
                return res.status(400).json(error, "All fields are required");
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
                mail: persona.mail 
            }, JWT_SECRET, { 
                expiresIn: '8h' 
            });

            res.status(201).json({ message: "user created successfully", token: token });

        } catch (error){
            if (error.code === 'P2002') {
                return res.status(409).json({ error: "User already exists" });
            }
            console.error("error signing up", error);
            res.status(500).json({ error: "Internal Server Error" });
        };
    };

    return {login, signup};
};

export default setupsesiones;