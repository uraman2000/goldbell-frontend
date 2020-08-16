import React from "react";
import { Input } from "../../../components/Input";
import LoginContainer from "../../../components/LoginContainer";
import { Card, Content } from "../../../components/Card";
import { SubmitButton } from "../../../components/SubmitButton";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LOGIN } from "../../../utils/Links";
import bg from "../../../images/credit-officer-bg.png";

const Title = styled.div`
  font-size: 0.625em;
  font-weight: bold;
`;

export default function ResetPassword() {
  return (
    <LoginContainer bg={bg}>
      <></>
      <>
        <Card shadowPercent={"0.16"} width="35.88541666666667vw" height="48.05555555555555vh">
          <Content m={"7.962962962962963vh 3.125vw 11.018518518518517vh 3.125vw"}>
            <Title>Reset password</Title>
            <Input borderColor="#C3C3C3" height="5.555555555555555vh" placeholder="New password" type="password" />
            <Input
              borderColor="#C3C3C3"
              height="5.555555555555555vh"
              withBorder
              placeholder="Confirm password"
              type="password"
            />
            <Link to={LOGIN}>
              <SubmitButton mt={"3.2407407407407405vh"} withShadow color="#FAB323">
                SUBMIT
              </SubmitButton>
            </Link>
          </Content>
        </Card>
      </>
    </LoginContainer>
  );
}
