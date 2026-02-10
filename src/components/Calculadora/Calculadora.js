import React from "react";
import { useFormik } from "formik";
import Button from "../Button/Button";
import styled from "styled-components";

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

export default function Calculadora() {
  const formik = useFormik({
    initialValues: valoresIniciales,
    onSubmit: async (formulario) => {
      try {
        const datosConvertidos = {
          depositoInicial: convertirADecimal(formulario.depositoInicial),
          contribucionAnual: convertirADecimal(formulario.contribucionAnual),
          anios: Number(formulario.anios),
          interesEstimado: convertirADecimal(formulario.interesEstimado),
        };

        console.log(datosConvertidos);
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
            type="text"
            {...formik.getFieldProps("depositoInicial")}
          ></Input>
        </Campo>

        {/* Contribucion anual */}
        <Campo>
          <Label htmlFor="contribucionAnual">Contribución Anual:</Label>
          <Input
            id="contribucionAnual"
            placeholder="Contribución Anual"
            type="text"
            {...formik.getFieldProps("contribucionAnual")}
          ></Input>
        </Campo>

        {/* Anios */}
        <Campo>
          <Label htmlFor="anios">Años:</Label>
          <Input
            id="anios"
            placeholder="Años"
            type="text"
            {...formik.getFieldProps("anios")}
          ></Input>
        </Campo>

        {/* Interes estimado */}
        <Campo>
          <Label htmlFor="interesEstimado">Interés Estimado:</Label>
          <Input
            id="interesEstimado"
            placeholder="Interés Estimado"
            type="text"
            {...formik.getFieldProps("interesEstimado")}
          ></Input>
        </Campo>
      </ContenedorCampos>
      <Button type="submit">Enviar</Button>
    </Formulario>
  );
}
