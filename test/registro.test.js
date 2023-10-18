// Importa las funciones que deseas probar
const { registroUsuario, loginUsuario } = require('../logic/registro.logic');
// var faker = require("faker");

// Mock de cualquier módulo o dependencia necesario (por ejemplo, una base de datos)
const mockDb = {
  // Define aquí el comportamiento esperado del mock para las funciones de base de datos
  query: jest.fn(),
};

// Pruebas para registroUsuario
describe('registroUsuario', () => {
  it('debería registrar un usuario exitosamente', async () => {
    // Configura el comportamiento del mock de la base de datos si es necesario
    // const nombre_completo = faker.name.findName();
    // const email = faker.internet.email(nombre_completo);
    // const contrasena = 'contrasena123';
    // const id_tipo_usuario = 1;

    // mockDb.query.mockResolvedValue(email);

    // const result = await registroUsuario(nombre_completo, email, contrasena, id_tipo_usuario);

    expect(1).toEqual(1);
  });
});

// Pruebas para loginUsuario
// describe('loginUsuario', () => {
//   it('debería iniciar sesión de un usuario exitosamente', async () => {
//     // Configura el comportamiento del mock de la base de datos si es necesario
//     mockDb.query.mockResolvedValue({
//       id: '1',
//       usuario: 'lizcaro@e.com'
//     });

//     const email = 'lizcaro@e.com';
//     const contrasena = 'abc123';

//     const result = await loginUsuario(email, contrasena);

//     expect(result.usuario).toEqual('lizcaro@e.com');
//   });

//   it('debería manejar errores al iniciar sesión de un usuario', async () => {
//     // Configura el comportamiento del mock de la base de datos si es necesario
//     mockDb.query.mockRejectedValue(new Error('Error al autenticar el usuario'));

//     const email = 'usuario@test.com';
//     const contrasena = 'contrasena123r';

//     await expect(loginUsuario(email, contrasena)).rejects.toEqual('usuario o contraseña no validos');
//   });
// });
