import sesiones from './sesiones.js';
import calendario from './calendario.js';

app.post("/users/login", sesiones.login);
app.post("/users/signup", sesiones.signup);
app.get("/auth/google/callback", calendario.permision);
app.get("/api/calendar/events",calendario.getevents);
app.get('/auth/google', calendario.redirectwithgoogle);


