import * as Yup from "yup";

const numeroValido = /^[\d.,$ ]+$/;

export const validationSchema = Yup.object({
  depositoInicial: Yup.string()
    .matches(numeroValido, "Debe ser un número válido")
    .required("El depósito inicial es obligatorio"),

  contribucionAnual: Yup.string()
    .matches(numeroValido, "Debe ser un número válido")
    .required("La contribución anual es obligatoria"),

  interesEstimado: Yup.string()
    .matches(numeroValido, "Debe ser un número válido")
    .required("El interés estimado es obligatorio"),

  anios: Yup.number()
    .typeError("Debe ser un número")
    .integer("Debe ser un número entero")
    .positive("Debe ser mayor a 0")
    .required("Los años son obligatorios"),
});
