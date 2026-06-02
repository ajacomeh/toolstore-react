# ToolStore React

## Integrantes

- Aaron Jacome (Líder de Proyecto y Documentador)
- Jeremy Robles (Desarrollador Frontend)
- Ricardo Coque (Desarrollador Backend)
- Jacobo Chimbolema (Operaciones y Despliegue)

## Descripción

ToolStore es una landing page desarrollada con React y Vite para la promoción de herramientas de construcción y bricolaje.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- GitHub
- Docker
- Vercel

## Funcionalidades

- Navegación entre secciones
- Diseño responsive
- Catálogo de herramientas
- Beneficios destacados
- Formulario de pedidos
- Validaciones en tiempo real

## Ejecución local

### Clonar repositorio

git clone https://github.com/ajacomeh/toolstore-react.git

### Instalar dependencias

npm install

### Ejecutar proyecto

npm run dev

## Despliegue

https://toolstore-react.vercel.app

## Docker

### Construir imagen

docker build -t toolstore-react .

### Ejecutar contenedor

docker run -d -p 8080:80 --name toolstore-container toolstore-react

### Abrir aplicación

http://localhost:8080
