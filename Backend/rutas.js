import { Router } from 'express';

const setuprouter = ({ login, signup, authentication, getevents, permision, redirectwithgoogle, createevents, deleteevents, updateevents, seefile, uploadfile}) => {
    const router = Router();

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

    return router;
};

export default setuprouter;
