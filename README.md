# ⚛️ React + TypeScript + Vite

Este proyecto es una aplicación frontend moderna construida con **React**, **TypeScript** y **Vite**. Sigue buenas prácticas de arquitectura de software, utiliza componentes reutilizables y garantiza la calidad del código mediante pruebas unitarias exhaustivas.

## ✨ Características

La aplicación incluye las siguientes funcionalidades principales:

-   🔐 **Autenticación:** Flujos de Login y Registro completos.
-   🛡️ **Rutas Protegidas:** Gestión de accesos mediante `React Router DOM`.
-   📡 **Conexión API:** Consumo de servicios backend optimizado con `Axios`.
-   ✅ **Testing:** Pruebas unitarias configuradas con reporte de cobertura (Coverage).

---

## 🛠️ Tecnologías utilizadas

El stack tecnológico del proyecto incluye:

-   [React 18](https://reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Vite](https://vitejs.dev/)
-   [React Router DOM](https://reactrouter.com/)
-   [Axios](https://axios-http.com/)
-   [Vitest](https://vitest.dev/)
-   [Testing Library](https://testing-library.com/)
-   [ESLint](https://eslint.org/)

---

## 🚀 Instalación y Puesta en marcha

Sigue estos pasos para ejecutar el proyecto en tu entorno local.

### 1. Clonar el repositorio e instalar dependencias

```bash
# Clona el repositorio
git clone <URL_DE_TU_REPOSITORIO>

# Entra en la carpeta del proyecto
cd nombre-del-proyecto

# Instala las dependencias
npm install

Claro que sí. He revisado tu texto y he realizado varias mejoras:

Corrección de formato: Había bloques de código sin cerrar (faltaban las comillas invertidas ```), lo que rompía la visualización.

Organización: He estructurado mejor las secciones de instalación, scripts y testing para que sean más legibles.

Limpieza: He resumido la parte de ESLint (en un README es mejor poner cómo ejecutar el comando que pegar toda la configuración del archivo) y he asumido que las dependencias ya están en el package.json (por lo que el usuario solo necesita npm install).

Aquí tienes el código Markdown listo para copiar y pegar en tu archivo README.md.

Markdown
# ⚛️ React + TypeScript + Vite

Este proyecto es una aplicación frontend moderna construida con **React**, **TypeScript** y **Vite**. Sigue buenas prácticas de arquitectura de software, utiliza componentes reutilizables y garantiza la calidad del código mediante pruebas unitarias exhaustivas.

## ✨ Características

La aplicación incluye las siguientes funcionalidades principales:

-   🔐 **Autenticación:** Flujos de Login y Registro completos.
-   🛡️ **Rutas Protegidas:** Gestión de accesos mediante `React Router DOM`.
-   📡 **Conexión API:** Consumo de servicios backend optimizado con `Axios`.
-   ✅ **Testing:** Pruebas unitarias configuradas con reporte de cobertura (Coverage).

---

## 🛠️ Tecnologías utilizadas

El stack tecnológico del proyecto incluye:

-   [React 18](https://reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Vite](https://vitejs.dev/)
-   [React Router DOM](https://reactrouter.com/)
-   [Axios](https://axios-http.com/)
-   [Vitest](https://vitest.dev/)
-   [Testing Library](https://testing-library.com/)
-   [ESLint](https://eslint.org/)

---

## 🚀 Instalación y Puesta en marcha

Sigue estos pasos para ejecutar el proyecto en tu entorno local.

### 1. Clonar el repositorio e instalar dependencias

```bash
# Clona el repositorio
git clone <URL_DE_TU_REPOSITORIO>

# Entra en la carpeta del proyecto
cd nombre-del-proyecto

# Instala las dependencias
npm install


### 2. Configurar Variables de Entorno

El proyecto utiliza variables de entorno para la conexión con el backend. Crea un archivo `.env` en la raíz del proyecto basándote en el siguiente ejemplo:

```env
VITE_API_BASE_URL=http://localhost:8080


### 3. Ejecutar en modo desarrollo
Inicia el servidor local de Vite:

Bash
npm run dev


## 🧪 Pruebas Unitarias (Testing)
El proyecto cuenta con una suite de pruebas robusta utilizando **Vitest** y **@testing-library/react**.

Las pruebas cubren:

* 📄 **Páginas:** `LoginPage`, `RegisterPage`.
* 🧩 **Componentes:** Componentes de UI reutilizables.
* 🔒 **Rutas:** Validación de `PrivateRoute`.
* 🌐 **Servicios:** Mocking y pruebas de peticiones `Axios`.


# Ejecutar las pruebas

Para correr todos los tests definidos en el proyecto:

```bash
npm run test


## 📊 Reporte de Cobertura (Coverage)

Para ejecutar las pruebas y generar un reporte detallado de qué porcentaje del código está siendo probado:

```bash
npm run test:coverage

Este comando generará:

* **Resultado en consola.**
* Una carpeta **`coverage/`** en la raíz.
* Un archivo **`coverage/lcov.info`** (útil para integración continua).


### Visualizar el reporte gráficamente

Puedes ver el reporte detallado abriendo el archivo HTML generado en tu navegador:

```bash
# Abre este archivo en Chrome/Firefox/Edge
coverage/index.html