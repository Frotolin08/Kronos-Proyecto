import { Router } from 'express';
import setupchat from './chat.js';

const setuprouter = ({ login, signup, authentication, getevents, permision, redirectwithgoogle, createevents, deleteevents, updateevents, seefile, uploadfile}) => {
    const router = Router();
    const { createchat, getchatmessages, updatemessagestatus } = setupchat();

    router.post("/users/login", login);
    router.post("/users/signup", signup);
    router.get("/auth/google/callback", authentication, permision);
    router.get("/api/calendar/events", authentication, getevents);
    router.get('/auth/google', redirectwithgoogle);
    router.post("/api/calendar/events", authentication, createevents);
    router.delete("/api/calendar/events/:eventId", authentication, deleteevents);
    router.put("/api/calendar/events/:eventId", authentication, updateevents);
    router.get("/api/files/:nombrearchivo", authentication, seefile);
    router.post("/api/files", authentication, uploadfile);
    router.post("/chat/create", autenticacion, createchat);
    router.get("/chat/:chatId/messages", autenticacion, getchatmessages);
    router.put("/messages/:messageId/read", autenticacion, updatemessagestatus);


    return router;
};

export default setuprouter;
