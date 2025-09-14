import { PrismaClient } from '@prisma/client';
import { file } from 'googleapis/build/src/apis/file';
const prisma = new PrismaClient();

const setuparchivos = () => {

    const seefile = async (req, res) => {
        const {nombrearchivo} = req.params;
        const personaId = req.personaId;

        try {
            if (!nombrearchivo) {
                return res.status(400).json({ error: "missing data" });
            }

            const archivo = await prisma.archivos.findUnique({ 
                where: { 
                    nombrearchivo: nombrearchivo 
                },
                include: {
                    proyecto: {
                        include: {
                            personas: true
                        }
                    }
                }
            });

            if (!archivo) {
                return res.status(404).json({ error: "File not found" });
            }

            const isowner = archivo.id_persona === personaId;
            const isprojectmember = archivo.proyecto?.personas.some(
                (persona) => persona.id === personaId
            );

            if (!isowner && !isprojectmember) {
                return res.status(403).json({ error: "No permission to view this file" });
            }

            res.status(200).json({ message: "file found", file: archivo});
            
        } catch (error) {
            console.error("Error finding file:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    };

    const uploadfile = async (req, res) => {
        const {formato, nombrearchivo, archivo} = req.body;
        const personaId = req.personaId;
        // const proyectoId = req.proyectoId

        try {

            if (!formato || !archivo || !nombrearchivo) {
                return res.status(400).json({error: "missing data"});
            }

            await prisma.archivos.create({
                data: {
                    formato: formato,
                    nombrearchivo: nombrearchivo,
                    archivo: archivo,
                    id_persona: personaId,
                    //id_proyecto: proyectoId
                },
            });

            res.status(201).json({ message: "file uploaded successfully"});

        } catch (error){
            if (error.code === 'P2002') {
                return res.status(409).json({ error: "File name already exists" });
            }
            console.error("Error uploading file:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }; 
    };

    return {seefile, uploadfile};
};

export default setuparchivos;