import React from "react";
import styled from "styled-components";

const Inputcito = styled.input`
  padding: 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
`;

export default function Input({ props }) {
  return <Inputcito {...props}></Inputcito>;
}
