import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginContainer from "../../../components/LoginContainer";
import { Input } from "../../../components/Input";
import { SubmitButton } from "../../../components/SubmitButton";
import { DASHBOARD } from "../../../utils/Links";
import bg from "../../../images/borrowers-bg.png";
const Form = styled.section`
  margin: 12.129629629629628vh 0px 0px 2.0833333333333335vw;
`;

const Heading = styled.p`
  display: block;
  margin: 0px;
  i {
    font-size: 0.583em;
  }
  b {
    display: block;
    font-size: 1.146em;
  }
`;

const ForgetPassword = styled(Link)`
  margin-top: 2.7777777777777777vh;
  color: black;
  text-decoration: none;
  float: right;
  font-style: italic;
  font-size: 0.438em;
`;

export default function Login() {
  return (
    <LoginContainer bg={bg}>
      <Form>
        <Heading>
          <i>Welcome to</i>
          <b>GBFS e-client login!</b>
        </Heading>
        <form>
          <Input borderColor="#E3E3E3" height="5.555555555555555vh" placeholder="Email" />
          <Input borderColor="#E3E3E3" height="5.555555555555555vh" placeholder="Password" type="password" />
          <Link to={DASHBOARD}>
            <SubmitButton mt={"3.2407407407407405vh"} type="submit" color="#EC3343" fontColor="White">
              SUBMIT
            </SubmitButton>
          </Link>
          <ForgetPassword to="/forget-password">Forget password?</ForgetPassword>
        </form>
      </Form>
    </LoginContainer>
  );
}
