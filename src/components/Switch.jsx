import React from "react";
import styled from "styled-components";
import { margin } from "styled-system";

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 34px;
`;
const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #e4fbf8;
  }

  &:checked + span:before {
    background-color: #05ccce;
  }
  :checked + span:before,
  :checked + span:after {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
`;
const Slider = styled.span`
  height: 11px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #efefef;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: -5px;
    bottom: -7px;
    background-color: black;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
    @media (max-width: 1600px) {
      left: 0px;
      bottom: -3px;
      height: 18px;
      width: 18px;
    }
  }
  &:after {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: -2px;
    bottom: -4px;
    background-color: white;
    -webkit-transition: 0.4s;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
    @media (max-width: 1600px) {
      height: 12px;
      width: 12px;
      left: 3px;
      bottom: 0px;
    }
  }
`;
const Text = styled.label`
  position: relative;
  top: -6px;
  left: 20px;
`;
const Container = styled.div`
  font-size: 18px;
  ${margin}
  @media (max-width: 1600px) {
    font-size: 14px;
  }
`;
export default function Switch(props) {
  const { mt, onClick } = props;
  return (
    <Container mt={mt}>
      <Label>
        <Input type="checkbox" onClick={onClick} />
        <Slider />
      </Label>
      <Text>Change password</Text>
    </Container>
  );
}
