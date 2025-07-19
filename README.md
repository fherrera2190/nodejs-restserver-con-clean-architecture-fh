# Node.js REST Server - Clean Architecture 🧼🚀

Este proyecto es una implementación de un servidor REST construido con **Node.js**, **Express** y **TypeScript**, siguiendo los principios de la **Arquitectura Limpia (Clean Architecture)**.

Está basado en el curso de [DevTalles](https://www.youtube.com/@DevTalles):  
📚 *"Node.js REST Server con Clean Architecture"*

---

## 🧠 Conceptos aprendidos

- Estructura de carpetas siguiendo la arquitectura limpia
- Separación de responsabilidades:
  - `domain`: entidades y casos de uso
  - `infrastructure`: servicios externos, repositorios, base de datos
  - `presentation`: controladores, rutas y middlewares
  - `app`: punto de entrada y configuración de dependencias
- Uso de **TypeScript** para escribir código más robusto
- Principios SOLID y buenas prácticas de desarrollo
- Conexión con **MongoDB** usando Mongoose
- Manejo de errores centralizado y validaciones con middlewares

---

## ⚙️ Tecnologías usadas

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose
- ESLint + Prettier
- Dotenv
- Postman (para pruebas de endpoints)

---

## 🚀 ¿Cómo correr el proyecto?

1. Cloná este repositorio:

```bash
git clone https://github.com/tuusuario/nodejs-restserver-clean-arch.git
cd nodejs-restserver-clean-arch
```

2. Instalá dependencias:

```bash
npm install
```

3. Configurá las variables de entorno:

Copiá el archivo `.env.example` y renombralo a `.env`:

```bash
cp .env.example .env
```

Completá los datos necesarios (puerto, URI de Mongo, etc.)

4. Levantá el servidor:

```bash
npm run dev
```

---

## 📁 Estructura del proyecto

```bash
src/
├── app/               # Configuración principal
├── domain/            # Entidades y casos de uso
├── infrastructure/    # Repositorios, servicios externos
├── presentation/      # Rutas, controladores y middlewares
├── shared/            # Utilidades y helpers
└── main.ts            # Entry point
```

---

## 📌 Estado

☑️ Arquitectura funcional  
☑️ Conexión con MongoDB  
☑️ Endpoints REST funcionando  
☑️ Autenticación JWT 

---

## 📚 Basado en el curso

🎓 **DevTalles** - Node.js REST Server con Clean Architecture  
🔗 [Ver canal en YouTube](https://www.youtube.com/@DevTalles)

---
