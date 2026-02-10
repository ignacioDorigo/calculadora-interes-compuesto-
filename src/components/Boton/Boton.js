import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: #d87092;
  font-weight: bold;
  background-color: #fff;
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1.5rem;
  border: 2px solid #d87092;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  width: 100%;
  margin-top: 2rem;

  &:hover {
    background-color: #d87092;
    color: #fff;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
  }

  @media (width>=768px) {
    width: auto;
    display:flex;
    justify-self: flex-end;
  }
`;

export default function Boton(props) {
  return <Button>{props.children}</Button>;
}
