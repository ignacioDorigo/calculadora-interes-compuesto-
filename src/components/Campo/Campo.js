import React from "react";
import styled from "styled-components";
import Label from "../Label/Label";
import Input from "../Input/Input";

const ContenedorCampo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size:2rem;
`;

export default function Campo({ label, ...rest }) {
  return (
    <ContenedorCampo>
      <Label>{label}</Label>
      <Input></Input>
    </ContenedorCampo>
  );
}
