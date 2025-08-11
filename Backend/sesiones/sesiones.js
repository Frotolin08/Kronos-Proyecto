const iniciar = async (req, res) => {
       
    try {
        /* const contraseñaValida = await argon2.verify(userBusqueda.contraseña, contraseñaVer);
        if (!contraseñaValida || !usuarioVer){
            console.log("error al buscar usuario");
        }; */ // se tiene que llamar contraseniaI

        const usuarioI = document.getElementById("usuarioI").value; // falta input d usuarioI
        const nombreI = document.getElementById("nombreI").value; // falta input d nombreI
        const mailI = document.getElementById("mailI").value; // falta input d mailI

        datos = await query(        
            `SELECT persona.usuario AS usuario, persona.nombre AS nombre, persona.mail AS mail, persona.contrasenia AS contrasenia FROM persona JOIN artistas WHERE persona.usuario = $usuarioI`, 
            [usuarioI]
        );

        const ingresado = [usuarioI, nombreI, mailI, contraseniaI];
        
        if (datos === ingresado) {
            console.log("sesion ingresada con exito");
        } else {
            console.log("no se pudo iniciar sesion")
        }
    } catch {
        console.error("no se pudo entrar al usuario", err);
    }
}


const crear = async (req, res) => {
    try {
        const usuario = document.getElementById("usuario").value; // falta input d usuario 
        const nombre = document.getElementById("nombre").value; // falta input d nombre
        const mail = document.getElementById("mail").value; // falta input d mail
        const contraseniaPrior = document.getElementById("contrasenia").value; // falta input d contraseniaPrior

        const contrasenia = await argon2.hash(contraseniaPrior); // pendiente: instalar argon2

        await query(
            "INSERT INTO persona (usuario, nombre, mail, contrasenia) VALUES ($usuario, $nombre, $mail, $contraseniaPrior)",
            [usuario, nombre, mail, contraseniaPrior],
        );
        return res.status(201).json("creado bien");
    } catch {
        console.error("no se pudo crear el usuario", err);
    };
};