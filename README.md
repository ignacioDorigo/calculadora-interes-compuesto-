## Calculadora de Interés Compuesto

Aplicación web en React para simular el crecimiento de un capital a través del interés compuesto, permitiendo configurar depósito inicial, contribuciones anuales, cantidad de años e interés estimado.

### Características

- **Cálculo de interés compuesto**: simula año por año el crecimiento del capital.
- **Formulario validado**: usa `Formik` y `Yup` para validar que los datos sean correctos.
- **Interfaz responsive**: estilos creados con `styled-components`.
- **Formato local**: los resultados se muestran con formato numérico en español de Argentina.

### Tecnologías utilizadas

- **React** (Create React App)
- **Formik** y **Yup** (manejo y validación de formularios)
- **styled-components** (estilos en JS)
- **SweetAlert2** (notificaciones, si se usan en otros componentes)
- **Testing Library** (configurada por CRA)

### Requisitos previos

- **Node.js** (versión recomendada 18+)
- **npm** o **yarn**

### Instalación

1. Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd calculadora-interes-compuesto
```

2. Instalar dependencias:

```bash
npm install
# o
yarn
```

### Ejecución en desarrollo

```bash
npm start
# o
yarn start
```

La aplicación se abrirá en `http://localhost:3000`.

### Build para producción

```bash
npm run build
# o
yarn build
```

Esto genera la versión optimizada en la carpeta `build/`.

### Cómo usar la calculadora

1. **Depósito Inicial**: capital con el que comenzás la inversión.
2. **Contribución Anual**: monto que vas a aportar cada año.
3. **Años**: cantidad de años que mantendrás la inversión.
4. **Interés Estimado (%)**: tasa de interés anual esperada.
5. Presioná el botón **“Calcular”**.

La app mostrará el valor final de tu capital (capital inicial + contribuciones + interés generado) formateado en pesos argentinos.

### Lógica de cálculo (resumen)

En cada año:

- Se suma la contribución anual al capital actual.
- Se aplica el interés estimado sobre el nuevo capital.

Este proceso se repite por la cantidad de años indicada y el resultado se redondea a dos decimales.

### Scripts disponibles

- **`npm start`**: inicia el servidor de desarrollo.
- **`npm test`**: ejecuta los tests.
- **`npm run build`**: genera el build de producción.

### Licencia

Este proyecto se distribuye con fines educativos y personales. Podés adaptarlo y reutilizarlo según tus necesidades.

