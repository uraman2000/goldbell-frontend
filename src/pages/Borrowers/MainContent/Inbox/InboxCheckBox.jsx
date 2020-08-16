import React from "react";
import styled from "styled-components";
import { margin } from "styled-system";

const Container = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  height: 13px;
  user-select: none;
  ${margin}
`;
const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  :checked ~ span:after {
    display: block;
  }
`;
const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 0.6770833333333334vw;
  width: 0.6770833333333334vw;
  background-color: white;
  border: 1px solid #c3c3c3;

  :after {
    content: "";
    position: absolute;
    display: none;
    left: 4px;
    top: 0px;
    width: 3px;
    height: 8px;
    border: solid grey;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    @media (max-width: 1600px) {
      left: 3px;
      top: 0px;
      width: 2px;
      height: 5px;
    }
  }
`;

const Label = styled.label`
  font-size: 0.333em;
  color: #707070;
  top: -1px;
  position: absolute;
  margin-left: 30px;
`;

export default function InboxCheckBox(props) {
  const { ml, mt, label, checked, onClick } = props;
  return (
    <Container mt={mt} ml={ml}>
      <Input type="checkbox" checked={checked} onClick={onClick} />
      <Checkmark />

      <Label>{label}</Label>
    </Container>
  );
}
