async function iniciar () {
    try{
       /* const { usuario, contrasenia } = req.body; // definir estos campos en inputs

        console.log(req.body)
        
        const contraseñaValida = await argon2.verify(userBusqueda.contraseña, contraseñaVer);
        if (!contraseñaValida || !usuarioVer){
            console.log("error al buscar usuario");
        };
        const userBusqueda = await User.findOne({
            where: {
                contraseña: hashContraseñaBuscar, 
                usuario: usuarioVer,
            }
        }); */ // codigo del año pasado para reciclar
        
    } catch {
        console.error("salio mal iniciar sesion: ", err);
    }
}

async function crear () {
    const usuario = document.getElementById("usuario").value; // falta input d usuario 
    const nombre = document.getElementById("nombre").value; // falta input d nombre
    const mail = document.getElementById("mail").value; // falta input d mail
    const contraseniaPrior = document.getElementById("contrasenia").value; // falta input d contraseniaPrior

    try {
        const contrasenia = await argon2.hash(contraseniaPrior); // pendiente: instalar argonS
        
    } catch {
        console.error("salio mal el creado de sesion: ", err);
    }
    
}

/*
    try {
        const hashContraseña = await argon2.hash(contraseñaRegistrada);
        const user = await User.create({
            contraseña: hashContraseña,
            usuario: usuarioRegistrado 
        })

*/