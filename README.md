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

**4.** Definir las variables de entorno
```text
VITE_URL_WORKERS=URL...
VITE_URL_PIECES=URL...
VITE_URL_CITIES=URL...
VITE_URL_LOGIN=URL...
```

**No olvides tener ejecutando el proyecto backend.**