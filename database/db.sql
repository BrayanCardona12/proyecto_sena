CREATE TABLE usuarios(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    imagen text not null,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    codInt int(7) NOT NULL,
    telefono bigint,
    edad int(2),
    pais varchar(25),
    ciudad varchar(50),
    direccion varchar(150),
    rol INT(2) NOT NULL,
    correo VARCHAR(120) NOT NULL,
    contrasena VARCHAR(10) NOT NULL,
    estado VARCHAR(10) not null,
    createAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE rol(
    idRol INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombreRol VARCHAR(50) NOT NULL,
    createAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE producto(
    idProducto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idVendedor INT NOT NULL,
    imagen TEXT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    categoria varchar(30) NOT NULL,
    descripcion TEXT NOT NULL,
    cantidad int(3),
    precio int(7),
    estado VARCHAR(17) not null,
    createAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE carrito(
    idCliente bigint not null,
    idProducto bigint not null,
    idVendedor bigint not null,
    estado VARCHAR(17) not null,
    cantidadProducto bigint not null
)


