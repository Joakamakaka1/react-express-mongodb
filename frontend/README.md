# Proyecto Express - Backend

Este es el backend de la aplicación, desarrollado con **Express** y **MongoDB**. Proporciona una API RESTful para gestionar usuarios, incluyendo la creación de usuarios con contraseña hasheada.

## Requisitos previos

Asegúrate de tener lo siguiente instalado en tu sistema:

- **Node.js** 
- **MongoDB** 

## Pasos para instalar y ejecutar el backend

### 1. Clonar el repositorio

Primero, clona el repositorio de tu proyecto a tu máquina local:

```bash
git clone https://github.com/tu_usuario/tu_repositorio.git
cd proyectoexpress/backend
```

### 2. Inicializar el proyecto

Dentro de la carpeta backend, inicializa el proyecto con el siguiente comando:

```bash
npm init -y
```


### 3. Instalar las dependencias

A continuación, instala las dependencias necesarias (individualmente):

```bash
npm install express mongoose dotenv bcryptjs cors
```

### 4. Estructura de archivos

La estructura básica de carpetas y archivos será la siguiente:

```
backend/ 
│ 
├── config/ # Carpeta para archivos de configuración 
│ └── db.js # Conexión a la base de datos (MongoDB) 
├── controllers/ # Carpeta para controladores 
│ └── userController.js # Lógica de creación de usuarios 
├── models/ # Carpeta para los modelos de base de datos 
│ └── user.js # Esquema de Usuario 
├── routes/ # Carpeta para las rutas de la API 
│ └── userRoutes.js # Rutas relacionadas con los usuarios 
├── .env # Variables de entorno (como la URI de MongoDB y el puerto) 
├── package.json # Información del proyecto y dependencias 
├── server.js # Archivo principal para iniciar el servidor 
└── package-lock.json # Información exacta de las dependencias instaladas
```

### 5. Iniciar el servidor

Una vez que todos los archivos estén creados y configurados, ejecuta el siguiente comando para iniciar el servidor:

```bash
npm start
```

### 7. Probar la API

Puedes usar una herramienta como Postman o Insomnia para probar las rutas del backend.
POST a http://localhost:5000/api/users/ con el siguiente cuerpo JSON:

```json
{
  "name": "Juan Perez",
  "email": "juan@example.com",
  "password": "123456"
}
```