# EF - Aplicaciones con Enfoque Orientado a Servicios

Para ejecutar la aplicación sigue los siguientes pasos:

**1.** Clonar el proyecto usando `git clone`

```bash
git clone https://github.com/AndreMoralesDev/idat-aplicaciones-con-enfoque-orientado-a-servicios.git
```

**2.** Generar los `node_modules`

```bash
pnpm i
```

**3.** Ejecutar la aplicación 

```bash
pnpm run dev
```

Una vez que el programa esté ejecutando, puedes ver el resultado en `http://localhost:5173/`

**4.** Crea un archivo `.env.local` al nivel del `src/` y define las variables de entorno, puedes guiarte del archivo `.env.example`,
```text
VITE_URL_WORKERS=URL...
VITE_URL_PIECES=URL...
VITE_...
```

**No olvides tener ejecutando el proyecto backend.**