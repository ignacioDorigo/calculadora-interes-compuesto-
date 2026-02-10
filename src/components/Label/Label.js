import React from "react";
import styled from "styled-components";

const Labelcito = styled.label`
  font-weight: 600;
//   font-family: sans-serif;
`;

export default function Label(props) {
  return <Labelcito {...props}>{props.children}</Labelcito>;
}
