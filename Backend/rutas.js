import { Router } from 'express';

const setuprouter = ({ login, signup, authentication, getevents, permision, redirectwithgoogle }) => {
    
    const router = Router();

    router.post("/users/login", login);
    router.post("/users/signup", signup);
    router.get("/auth/google/callback", authentication, permision);
    router.get("/api/calendar/events", authentication, getevents);
    router.get('/auth/google', redirectwithgoogle);

    return router;
};

export default setuprouter;
