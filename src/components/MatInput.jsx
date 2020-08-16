import React from "react";
import styled from "styled-components";
import { margin } from "styled-system";

const Container = styled.div`
  position: relative;
  margin-top: 0.9259259259259258vh;
  ${margin}
`;
const Span = styled.span`
  font-size: 0.375em;

  color: #707070;
  position: absolute;
  pointer-events: none;
  left: 0;
  bottom: 1.3888888888888888vh;

  transition: 0.2s ease all;
`;
const Input = styled.input`
  font-size: 0.375em;
  width: 100%;
  height: 3.2407407407407405vh;
  border: 0;
  outline: 0;
  font-weight: bold;
  border-bottom: 1px solid #eff0f2;

  :focus ~ span,
  :not(:focus):valid ~ span {
    /* top: 8px; */
    bottom: 4.62962962962963vh;
    left: 0px;
    font-size: 0.333em;
    opacity: 1;
  }
`;

export default function MatInput(props) {
  const { label, mt, value, name, refs } = props;
  return (
    <Container mt={mt}>
      <Input type="text" required value={value} name={name} ref={refs} />
      <Span>{label}</Span>
    </Container>
  );
}
