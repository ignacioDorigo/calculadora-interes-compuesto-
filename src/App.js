import React from "react";
import styled from "styled-components";
import "./normalize.css";
import Calculadora from "./components/Calculadora/Calculadora";

const Titulo = styled.h1`
  text-align: center;
  font-size: 3rem;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Aplicacion = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <Aplicacion>
      <Titulo>Calculadora de Interes</Titulo>
      <Calculadora></Calculadora>
    </Aplicacion>
  );
}
