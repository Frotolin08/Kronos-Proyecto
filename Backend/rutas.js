
app.post("/users/login", sesiones.login);
app.post("/users/signup", sesiones.signup);
app.get("/auth/google/callback", calendario.permision);
app.get("/api/calendar/events",calendario.getevents)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get('/auth/google', (req, res) => {
  const url = authorization();
  res.redirect(url);
});

