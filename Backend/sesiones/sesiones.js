const iniciar = async (req, res) => {
       
    try {

        const {usuarioI, mailI, contraseniaP} = req.body;

        console.log(req.body);

        const contraseniaI = await argon2.verify();

        if (!contraseniaI || !mailI || !usuarioI){
            console.log("error al buscar usuario");
        }
      
        /* const contraseñaValida = await argon2.verify(userBusqueda.contraseña, contraseñaVer);
        */

        const datos = await kronos.findOne({      
            where:{
                contrasenia: contraseniaI,
                usuario: usuarioI,
                mail: mailI,
            }
        });

        if (datos) {
            const id = datos.id_persona;
        }

        res.status(200).json({ 
                message: 'Usuario encontrado e iniciado',
                id_persona: id_persona
            });

    } catch  {
        console.error("no se pudo ingresar al usuario", err);
    }
    
} 

const crear = async (req, res) => {
    try {

        const {usuario, nombre, mail, contraseniaPrior} = req.body;
       /*
        const usuario = document.getElementById("usuario").value; // falta input d usuario 
        const nombre = document.getElementById("nombre").value; // falta input d nombre
        const mail = document.getElementById("mail").value; // falta input d mail
        const contraseniaPrior = document.getElementById("contrasenia").value; // falta input d contraseniaPrior
        */
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