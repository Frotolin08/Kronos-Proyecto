
app.post("/users/login", sesiones.login);
app.post("/users/signup", sesiones.signup);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

