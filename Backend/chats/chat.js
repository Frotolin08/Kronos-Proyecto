import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const setupchat = () => {
    const createchat = async (req, res) => {
        const { nombre, limite } = req.body;
        const { personaId } = req.personaId;
        const { proyectoIdId } = req.params;

        if (!nombre || !id_proyecto || !personaId) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        try {
            const ismember = await prisma.tiene.findFirst({
                where: {
                    id_persona: personaId,
                    id_proyecto: proyectoId
                }
            });

            if (!ismember) {
                return res.status(403).json({ error: "You don't have permission to create a chat in this project" });
            }

            const newchat = await prisma.chat.create({
                data: {
                    nombre: nombre,
                    id_proyecto: id_proyecto,
                    limite: limite
                },
            });

            const projectMembers = await prisma.tiene.findMany({
                where: {
                    id_proyecto: id_proyecto
                },
                select: {
                    id_persona: true
                }
            });

            await prisma.tiene_pc.createMany({
                data: projectMembers.map(member => ({
                    id_persona: member.id_persona,
                    id_chat: newchat.id
                }))
            });

            res.status(201).json({ message: "Chat created successfully", chat: newchat });
        } catch (error) {
            console.error("Error creating chat:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    };

    const getchatmessages = async (req, res) => {
        const { chatId } = req.params;
        const personaId = req.personaId;

        if (!chatId || !personaId) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        try {
            const hasaccess = await prisma.tiene_pc.findFirst({
                where: {
                    id_persona: personaId,
                    id_chat: parseInt(chatId)
                }
            });

            if (!hasaccess) {
                return res.status(403).json({ error: "You don't have access to this chat" });
            }

            const messages = await prisma.mensajes.findMany({
                where: {
                    id_chat: parseInt(chatId)
                },
                orderBy: {
                    id: 'asc'
                }
            });

            res.status(200).json(messages);

        } catch (error) {
            console.error("Error getting messages:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    };

    const updatemessagestatus = async (req, res) => {
        const { messageId } = req.params;
        const { estado } = req.body; 
        const personaId = req.personaId;
        
        if (!messageId || !estado) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // falta la logica para verificar cuando se vio el mensaje y cuando no

        try {
            const updatedmessage = await prisma.mensajes.update({
                where: {
                    id: parseInt(messageId)
                },
                data: {
                    estado: estado
                }
            });

            res.status(200).json({ message: "Message status updated successfully", updatedmessage });
        } catch (error) {
            console.error("Error updating message status:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    };
    
    return { createchat, getchatmessages, updatemessagestatus };
};

export default setupchat;
