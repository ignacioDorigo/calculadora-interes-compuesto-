import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "../Button/Button";
import styled from "styled-components";
import { validationSchema } from "./validacionesYup";

/* ======================
   Styled Components
====================== */

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

  @media (width >= 768px) {
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

/* ======================
   Lógica
====================== */

const valoresIniciales = {
  depositoInicial: "",
  contribucionAnual: "",
  anios: "",
  interesEstimado: "",
};

const calcularInteres = ({
  depositoInicial,
  contribucionAnual,
  anios,
  interesEstimado,
}) => {
  let resultado = depositoInicial;

  for (let i = 0; i < anios; i++) {
    resultado += contribucionAnual;
    resultado += resultado * (interesEstimado / 100);
  }

  return Number(resultado.toFixed(2));
};

/* ======================
   Componente
====================== */

export default function Calculadora() {
  const [interesFinal, setInteresFinal] = useState(null);

  const formik = useFormik({
    initialValues: valoresIniciales,
    validationSchema,
    onSubmit: (formulario) => {
      const datosConvertidos = {
        depositoInicial: Number(formulario.depositoInicial),
        contribucionAnual: Number(formulario.contribucionAnual),
        anios: Number(formulario.anios),
        interesEstimado: Number(formulario.interesEstimado),
      };

      setInteresFinal(calcularInteres(datosConvertidos));
    },
  });

  return (
    <Formulario onSubmit={formik.handleSubmit}>
      <ContenedorCampos>
        {/* Depósito inicial */}
        <Campo>
          <Label htmlFor="depositoInicial">Depósito Inicial</Label>
          <Input
            id="depositoInicial"
            type="number"
            min="0"
            step="0.01"
            {...formik.getFieldProps("depositoInicial")}
          />
          {formik.touched.depositoInicial &&
            formik.errors.depositoInicial && (
              <MensajeError>{formik.errors.depositoInicial}</MensajeError>
            )}
        </Campo>

        {/* Contribución anual */}
        <Campo>
          <Label htmlFor="contribucionAnual">Contribución Anual</Label>
          <Input
            id="contribucionAnual"
            type="number"
            min="0"
            step="0.01"
            {...formik.getFieldProps("contribucionAnual")}
          />
          {formik.touched.contribucionAnual &&
            formik.errors.contribucionAnual && (
              <MensajeError>{formik.errors.contribucionAnual}</MensajeError>
            )}
        </Campo>

        {/* Años */}
        <Campo>
          <Label htmlFor="anios">Años</Label>
          <Input
            id="anios"
            type="number"
            min="1"
            step="1"
            {...formik.getFieldProps("anios")}
          />
          {formik.touched.anios && formik.errors.anios && (
            <MensajeError>{formik.errors.anios}</MensajeError>
          )}
        </Campo>

        {/* Interés */}
        <Campo>
          <Label htmlFor="interesEstimado">
            Interés Estimado (%)
          </Label>
          <Input
            id="interesEstimado"
            type="number"
            min="0"
            max="100"
            step="0.01"
            {...formik.getFieldProps("interesEstimado")}
          />
          {formik.touched.interesEstimado &&
            formik.errors.interesEstimado && (
              <MensajeError>{formik.errors.interesEstimado}</MensajeError>
            )}
        </Campo>
      </ContenedorCampos>

      <Button type="submit">Calcular</Button>

      {interesFinal !== null && (
        <Resultado>
          Su capital + interés será de{" "}
          <strong>
            $
            {interesFinal.toLocaleString("es-AR", {
              maximumFractionDigits: 2,
            })}
          </strong>
        </Resultado>
      )}
    </Formulario>
  );
}
