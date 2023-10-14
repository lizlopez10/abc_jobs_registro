-- DROP SCHEMA registro;

CREATE SCHEMA registro AUTHORIZATION postgres;


CREATE TABLE registro.usuarios (
	id serial4 NOT NULL,
	nombre_completo varchar NULL,
	email varchar NULL,
	contrasena varchar NULL,
	id_tipo_usuario integer not null, -- tipo_usuario
	CONSTRAINT usuario_pk PRIMARY KEY (id)
);


CREATE TABLE registro.tipo_usuario ( --tipo_usuario
	id serial4 NOT NULL,
	nombre varchar NULL,
	CONSTRAINT rol_pk PRIMARY KEY (id)
);

ALTER TABLE registro.usuarios ADD CONSTRAINT usuarios_fk FOREIGN KEY (id_tipo_usuario) REFERENCES registro.tipo_usuario(id);