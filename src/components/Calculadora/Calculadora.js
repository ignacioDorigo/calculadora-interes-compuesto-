import { useFormik } from "formik";
import React from "react";
import Boton from "../Boton/Boton";
import styled from "styled-components";
import Campo from "../Campo/Campo";

const Formulario = styled.form`
  background-color: #ececec;
  padding: 2rem;
  border-top-width: 2px;
  border-top-color: #d87092;
  border-top-style: solid;
  border-radius:5px;
  width:90%;
  @media(width>768px){
    width:40%;
  }
`;

const ContenedorCampos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const valoresIniciales = {
  depositoInicial: 0.0,
  contribucionAnual: 0.0,
  anios: 0,
  interesEstimado: 0.0,
};

export default function Calculadora() {
  const formik = useFormik({
    initialValues: valoresIniciales,
    onSubmit: async (formulario) => {
      try {
        console.log(formulario);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Formulario onSubmit={formik.handleSubmit}>
      <ContenedorCampos>
        <Campo label={"Deposito Inicial"}></Campo>
        <Campo label={"Contribución Anual"}></Campo>
        <Campo label={"Años"}></Campo>
        <Campo label={"Interés Estimado"}></Campo>
      </ContenedorCampos>
      <Boton type="submit">Enviar</Boton>
    </Formulario>
  );
}
