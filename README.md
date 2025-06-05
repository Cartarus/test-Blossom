# Rick and Morty API Project

Este proyecto es una aplicación web que consume la API de Rick and Morty, desarrollada con React, TypeScript y Vite.

## 🚀 Tecnologías Utilizadas

- React 19
- TypeScript
- GraphQL con Apollo Client
- Redux Toolkit para manejo de estado
- TailwindCSS para estilos
- Vite como bundler
- ESLint para linting

## 📋 Prerrequisitos

- Node.js (versión recomendada: 18 o superior)
- npm o yarn

## 🔧 Instalación y Configuración

1. Clona el repositorio:
```bash
git clone https://github.com/Cartarus/test-Blossom.git
cd test-Blossom
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🛠️ Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run lint`: Ejecuta el linter
- `npm run preview`: Previsualiza la build de producción
- `npm run codegen`: Genera los tipos de GraphQL

## 🧪 Testing

El proyecto utiliza Jest y React Testing Library para las pruebas unitarias y de integración.

### Scripts de Testing

- `npm test`: Ejecuta todas las pruebas

### Estructura de Tests

Los tests se organizan siguiendo la misma estructura del proyecto, con archivos `.test.tsx` o `.spec.tsx` junto a los componentes que prueban:

```
prueba-tecnica/
├── src/              # Código fuente
│   ├── assets/       # Recursos estáticos (imágenes, fuentes, etc.)
│   ├── components/   # Componentes de React
│   ├── gql/         # Definiciones de GraphQL
│   ├── graphql/     # Configuración y queries de GraphQL
│   ├── hooks/       # Custom hooks de React
│   ├── layauts/     # Layouts de la aplicación
│   ├── pages/       # Páginas de la aplicación
│   ├── routes/      # Configuración de rutas
│   ├── store/       # Estado global (Redux)
│   ├── utils/       # Utilidades y funciones auxiliares
│   ├── App.tsx      # Componente principal
│   ├── main.tsx     # Punto de entrada de la aplicación
│   └── index.css    # Estilos globales
├── public/           # Archivos estáticos
├── node_modules/     # Dependencias
├── package.json      # Dependencias y scripts
├── tsconfig.json     # Configuración de TypeScript
└── vite.config.ts    # Configuración de Vite
```

