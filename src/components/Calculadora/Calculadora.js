import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "../Button/Button";
import styled from "styled-components";
import { validationSchema } from "./validacionesYup";

const convertirADecimal = (valor) => {
  if (!valor) return 0;

  return parseFloat(
    valor
      .replace(/\./g, "") // quita separador de miles
      .replace(",", ".") // coma → punto
      .replace(/[^0-9.]/g, ""), // quita $, espacios, etc
  );
};

const valoresIniciales = {
  depositoInicial: "",
  contribucionAnual: "",
  anios: "",
  interesEstimado: "",
};

const Resultado = styled.h3`
  font-size: 2rem;
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #ececec;
  padding: 2rem;
  border-radius: 5px;
  border-top: 2px solid #d87092;
  width: 90%;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);

  @media (width>=768px) {
    width: 30%;
    padding: 3rem;
  }
`;

const ContenedorCampos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Campo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.7rem;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #e1e1e1;

  &:focus {
    border: 2px solid #d87092;
    outline: none;
  }
`;

const MensajeError = styled.p`
  color: red;
  margin: 0;
`;

const calcularInteres = (formulario) => {
  const { depositoInicial, contribucionAnual, anios, interesEstimado } =
    formulario;

  let resultado = depositoInicial;
  for (let i = 0; i < anios; i++) {
    resultado = resultado + contribucionAnual;
    let interesGanado = resultado * (interesEstimado / 100);
    resultado = resultado + interesGanado;
  }
  return Number(resultado.toFixed(2));
};

export default function Calculadora() {
  const [interesFinal, setInteresFinal] = useState(0);
  const formik = useFormik({
    initialValues: valoresIniciales,
    validationSchema: validationSchema,
    onSubmit: async (formulario) => {
      try {
        const datosConvertidos = {
          depositoInicial: convertirADecimal(formulario.depositoInicial),
          contribucionAnual: convertirADecimal(formulario.contribucionAnual),
          anios: Number(formulario.anios),
          interesEstimado: convertirADecimal(formulario.interesEstimado),
        };

        console.log(datosConvertidos);
        setInteresFinal(calcularInteres(datosConvertidos));
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Formulario onSubmit={formik.handleSubmit}>
      <ContenedorCampos>
        {/* dEPO INICIAL */}
        <Campo>
          <Label htmlFor="depositoInicial">Deposito Inicial:</Label>
          <Input
            id="depositoInicial"
            placeholder="Deposito Inicial"
            type="number"
            {...formik.getFieldProps("depositoInicial")}
            autoComplete="off"
          ></Input>
          {formik.touched.depositoInicial && formik.errors.depositoInicial && (
            <MensajeError>{formik.errors.depositoInicial}</MensajeError>
          )}
        </Campo>

        {/* Contribucion anual */}
        <Campo>
          <Label htmlFor="contribucionAnual">Contribución Anual:</Label>
          <Input
            id="contribucionAnual"
            type="number"
            placeholder="Contribución Anual"
            {...formik.getFieldProps("contribucionAnual")}
            autoComplete="off"
          ></Input>
          {formik.touched.contribucionAnual &&
            formik.errors.contribucionAnual && (
              <MensajeError>{formik.errors.contribucionAnual}</MensajeError>
            )}
        </Campo>

        {/* Anios */}
        <Campo>
          <Label htmlFor="anios">Años:</Label>
          <Input
            id="anios"
            placeholder="Años"
            type="number"
            {...formik.getFieldProps("anios")}
            autoComplete="off"
          ></Input>
          {formik.touched.anios && formik.errors.anios && (
            <MensajeError>{formik.errors.anios}</MensajeError>
          )}
        </Campo>

        {/* Interes estimado */}
        <Campo>
          <Label htmlFor="interesEstimado">Interés Estimado (0% al 100%):</Label>
          <Input
            id="interesEstimado"
            placeholder="Interés Estimado"
            type="number"
            {...formik.getFieldProps("interesEstimado")}
            autoComplete="off"
          ></Input>
          {formik.touched.interesEstimado && formik.errors.interesEstimado && (
            <MensajeError>{formik.errors.interesEstimado}</MensajeError>
          )}
        </Campo>
      </ContenedorCampos>
      <Button type="submit">Enviar</Button>

      {interesFinal !== 0 ? (
        <Resultado>Su capital + interes será de ${interesFinal}</Resultado>
      ) : null}
    </Formulario>
  );
}
