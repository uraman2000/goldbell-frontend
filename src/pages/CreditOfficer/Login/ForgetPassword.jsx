import React from "react";
import LoginContainer from "../../../components/LoginContainer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card, Content } from "../../../components/Card";
import { Center } from "../../../components/Center";
import { Input } from "../../../components/Input";
import { SubmitButton } from "../../../components/SubmitButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { RESET_PASSWORD, LOGIN } from "../../../utils/Links";
import bg from "../../../images/credit-officer-bg.png";

const Title = styled.div`
  font-size: 1.042em;
`;

const Back = styled(Link)`
  color: #ec3343;
  text-decoration: none;
  margin-top: 7.4074074074074066vh;
  display: block;
  font-size: 0.417em;
  font-weight: bold;
`;
const Heading = styled.p`
  font-size: 0.625em;
  font-weight: bold;
`;

const Wraper = styled.div`
  margin-top: 23.333333333333332vh;
  margin-left: 2.34375vw;
`;

const MainWraper = styled.div`
  // margin-top: 297px;
  margin-left: 12.760416666666668vw;
  margin-right: 12.760416666666668vw;
  // margin-bottom: 264px;
`;
const Description = styled.p`
  font-size: 0.375em;
  line-height: 2.962962962962963vh;
`;

export default function ForgetPassword() {
  return (
    <LoginContainer bg={bg}>
      <Center>
        <Wraper>
          <Title>
            It’s OK, <br /> I remembered
          </Title>

          <FontAwesomeIcon icon="angle-double-left" />
          <Back to={LOGIN}>
            <FontAwesomeIcon icon={faAngleLeft} />
            {"  Back to log in"}
          </Back>
        </Wraper>
      </Center>
      <MainWraper>
        <Card shadowPercent={"0.16"}>
          <Content m={"7.962962962962963vh 3.125vw 11.018518518518517vh 3.125vw"}>
            <Heading>Forgot your password?</Heading>
            <Description>
              Don’t worry! Resetting your password is easy. Just type in the email you registered to GoldBell.
            </Description>
            <Input borderColor="#C3C3C3" height="5.555555555555555vh" placeholder="Email" type="password" />
            <Link to={RESET_PASSWORD}>
              <SubmitButton mt={"3.2407407407407405vh"} withShadow color="#FAB323">
                SEND
              </SubmitButton>
            </Link>
          </Content>
        </Card>
      </MainWraper>
    </LoginContainer>
  );
}
