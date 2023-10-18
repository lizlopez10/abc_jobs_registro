var data = require ('../data/registro.data')
const jwt = require('jsonwebtoken');

TOKEN_SECRET = 'secret_key';  /// pasara variable de entorno


class RegistroLogic {

    async registroUsuario(nombre_completo, email, contrasena, id_tipo_usuario) {
        
        return new Promise(async (resolve,reject)=>{

            let tipoUsuarioExiste = await data.select('registro.tipo_usuario', ['id'], [id_tipo_usuario]);
            tipoUsuarioExiste = tipoUsuarioExiste.rowCount > 0;
            if (!tipoUsuarioExiste) reject('el tipo de usuario no existe');

            let usuarioExiste = await data.select('registro.usuarios', ['email'], [email]);
            usuarioExiste = usuarioExiste.rowCount === 0;
            if (!usuarioExiste) reject('el usuario ya existe');

            if (tipoUsuarioExiste && usuarioExiste) {
                var result = await data.insert(
                    'registro.usuarios',
                    ["nombre_completo", "email", "contrasena", "id_tipo_usuario"],
                    [nombre_completo, email, contrasena, id_tipo_usuario]
                );
                resolve(result.rows[0].email)            
            }
        })
    }

    async loginUsuario(email, contrasena) {
        return new Promise(async (resolve,reject)=>{
            const usuarioValido = await data.select('registro.usuarios', ['email','contrasena'], [email, contrasena]);
            if (usuarioValido.rowCount < 1 ) {
                reject('usuario o contraseña no validos');
            }
            if(usuarioValido.rowCount === 1) {
                const token = jwt.sign({
                    email: email,
                    id: 1
                }, TOKEN_SECRET)
                const usuarioLogin = {
                    token,
                    usuario: usuarioValido.rows[0].email,
                    id_tipo_usuario: usuarioValido.rows[0].id_tipo_usuario
                }
                resolve(usuarioLogin)
            }            
        })
    }

}

const user = new RegistroLogic()

module.exports = user