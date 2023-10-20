// Importa la clase RegistroData
const registro = require('../data/registro.data');
// Crea un mock para el módulo de la base de datos
const db = {
  query: jest.fn()
};

// Crea una instancia de RegistroData con el mock de la base de datos
// const registro = new RegistroData(db);

// Definir los tests
describe('RegistroData', () => {

  // it('debería insertar registros en la base de datos', async () => {
  //   const tabla = 'registro.usuarios';
  //   const columnas = ["nombre_completo", "email", "contrasena", "id_tipo_usuario"];
  //   const valores = ["usuario", "email@usuario.com", "contrasena", 1];

  //   // Configura el mock de la base de datos
  //   db.query.mockImplementation((query, valores, callback) => {
  //     expect(query).toBe('INSERT INTO usuarios (nombre_completo,email,contrasena,id_tipo_usuario) VALUES ($1,$2, $3, $4) RETURNING *');
  //     expect(valores).toEqual(['usuario', 'email@usuario.com','contrasena', 1]);
  //     callback(null, {rowCount: 1});
  //   });

  //   const result = await registro.insert(tabla, columnas, valores);
  //   expect(result.rowCount).toBe(1);
  // });
  // it('error: no debería insertar registros en la base de datos', async () => {
  //   const tabla = 'registro.usuarios';
  //   const columnas = ["nombre_completo", "email", "contrasena", "id_tipo_usuario"];
  //   const valores = ["usuario","email", "contrasena", 1];

  //   // Configura el mock de la base de datos
  //   db.query.mockImplementation((query, valores, callback) => {
  //     expect(query).toBe('INSERT INTO usuarios (nombre_completo,email,contrasena,id_tipo_usuario) VALUES ($1,$2, $3, $4) RETURNING *');
  //     expect(valores).toEqual(['usuario', 'email@usuario.com','contrasena', 1]);
  //     callback(null, "error");
  //   });

  //   const result = await registro.insert(tabla, columnas, valores);
  //   expect(result.rowCount).toBe(1);
  // });
});
