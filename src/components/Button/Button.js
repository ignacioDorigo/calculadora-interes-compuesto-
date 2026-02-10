import React from "react";
import styled from "styled-components";

const Boton = styled.button`
  padding: 1rem;
  width: 100%;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.4rem;
  cursor: pointer;
  background-color: #fff;
  color: #d87092;
  border: 2px solid #d87092;
  transition: all 0.3s ease-in-out;

  @media (width>=768px) {
    width: 30%;
    display: flex;
    align-self: flex-end;
    justify-content: center;
  }

  &:hover {
    color: #fff;
    background-color: #d87092;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
  }
`;

export default function Button(props) {
  return <Boton {...props}></Boton>;
}
