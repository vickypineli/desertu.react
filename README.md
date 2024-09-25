# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



desertu-berria/
│
├── public/
│   └── assets/             # Carpeta para recursos estáticos (imágenes, PDFs, etc.)
│       └── banner.jpg      # Ejemplo de archivo estático
│
├── src/                    # Carpeta para el código fuente de la aplicación
│   ├── components/         # Carpeta para los componentes de React
│   │   ├── header/         # Carpeta del componente Header
│   │   │   ├── Header.jsx   # Componente de encabezado
│   │   │   └── Header.css   # Estilos específicos para el componente Header
│   │   │
│   │   ├── footer/         # Carpeta del componente Footer
│   │   │   ├── Footer.jsx   # Componente de pie de página
│   │   │   └── Footer.css   # Estilos específicos para el componente Footer
│   │   │
│   │   ├── home/           # Carpeta del componente Home
│   │   │   ├── Home.jsx     # Componente de la página principal
│   │   │   └── Home.css     # Estilos específicos para el componente Home
│   │   │
│   │   ├── about/          # Carpeta del componente About
│   │   │   ├── About.jsx    # Componente de la página de acerca de
│   │   │   └── About.css    # Estilos específicos para el componente About
│   │   │
│   │   ├── events/         # Carpeta del componente Events
│   │   │   ├── Events.jsx    # Componente de la página de eventos
│   │   │   └── Events.css    # Estilos específicos para el componente Events
│   │   │
│   │   ├── contact/        # Carpeta del componente Contact
│   │   │   ├── Contact.jsx   # Componente de la página de contacto
│   │   │   └── Contact.css   # Estilos específicos para el componente Contact
│   │   │
│   │   └── documents/      # Carpeta del componente Documents
│   │       ├── Documents.jsx # Componente de la página de documentos
│   │       └── Documents.css # Estilos específicos para el componente Documents
│   │
│   ├── App.jsx             # Componente principal de la aplicación
│   ├── main.jsx            # Punto de entrada de la aplicación
│   ├── index.css           # Archivo CSS global
│   └── app.css             # Archivo CSS para estilos específicos de la App
│
├── index.html              # Archivo base de la aplicación
├── package.json            # Dependencias y scripts
└── vite.config.js          # Configuración de Vite
