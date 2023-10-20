// import * as data from '../data/registro.data';
const data = require('../data/registro.data');

// Importa las funciones que deseas probar
const functions = require('../logic/registro.logic');
// Pruebas para registroUsuario
describe('registroUsuario', () => {
  it('debería registrar un usuario exitosamente', async () => {
    // Configura el comportamiento del mock de la base de datos si es necesario
    const nombre_completo = 'ususario';
    const email = 'ususario@gm.com';
    const contrasena = 'contrasena123';
    const id_tipo_usuario = 1;
    jest.spyOn(functions, 'validateTipoUsuario').mockResolvedValue(true);
    jest.spyOn(data, 'select').mockResolvedValue({rowCount: 0});
    jest.spyOn(data, 'insert').mockResolvedValue({
      rows:[{
        email
      }]
    });
    const result = await functions.registroUsuario(nombre_completo, email, contrasena, id_tipo_usuario);
    expect(result).toEqual(email);

  });
  it('debería no registrar un usuario por tipo de ususario invalido', async () => {
    // Configura el comportamiento del mock de la base de datos si es necesario
    const nombre_completo = 'ususario';
    const email = 'ususario@gm.com';
    const contrasena = 'contrasena123';
    const id_tipo_usuario = 14;
    jest.spyOn(functions, 'validateTipoUsuario').mockResolvedValue(false);
    jest.spyOn(data, 'select').mockResolvedValue({rowCount: 0});
    jest.spyOn(data, 'insert').mockResolvedValue({
      rows:[{
        email
      }]
    });
    return expect(functions.registroUsuario(nombre_completo, email, contrasena, id_tipo_usuario)).rejects.toEqual('el tipo de usuario no existe');
  });
  it('debería no registrar un usuario por usuario existente', async () => {
    // Configura el comportamiento del mock de la base de datos si es necesario
    const nombre_completo = 'lizcaro';
    const email = 'lizcaro@e.com';
    const contrasena = 'contrasena123';
    const id_tipo_usuario = 1;
    jest.spyOn(functions, 'validateTipoUsuario').mockResolvedValue(true);
    jest.spyOn(data, 'select').mockResolvedValue({rowCount: 1});
    jest.spyOn(data, 'insert').mockResolvedValue({
      rows:[{
        email
      }]
    });
    return expect(functions.registroUsuario(nombre_completo, email, contrasena, id_tipo_usuario)).rejects.toEqual('el usuario ya existe');
  });
});

// Pruebas para loginUsuario
describe('loginUsuario', () => {
  it('debería iniciar sesión de un usuario exitosamente', async () => {
    // Configura el comportamiento del mock de la base de datos si es necesario
    jest.spyOn(data, 'select').mockResolvedValue({
      rowCount: 1,
      rows:[{
        email:'lizcaro@e.com'
      }]
    });

    const email = 'lizcaro@e.com';
    const contrasena = 'abc123';

    const result = await functions.loginUsuario(email, contrasena);

    expect(result.usuario).toEqual('lizcaro@e.com');
  });

  it('debería manejar errores al iniciar sesión de un usuario', async () => {
    // Configura el comportamiento del mock de la base de datos si es necesario
    jest.spyOn(data, 'select').mockResolvedValue({rowCount: 0});

    const email = 'usuario@test.com';
    const contrasena = 'contrasena123r';
    return expect(functions.loginUsuario(email, contrasena)).rejects.toEqual('usuario o contraseña no validos');
  });
});
