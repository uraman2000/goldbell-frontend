import React from "react";
import { Container } from "../../../../components/Container";
import { Card, Content } from "../../../../components/Card";
import styled from "styled-components";
import { Image } from "../../../../components/Image";
import LogoutIcon from "../../../../images/Navigation/logout.svg";
import { variant } from "styled-system";
import CheckmarkIcon from "../../../../images/Logout/checkmark.svg";
import CloseIcon from "../../../../images/Logout/close.svg";
import { Link } from "react-router-dom";
import { LOGIN } from "../../../../utils/Links";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: -webkit-fill-available;
`;
const Text = styled.div`
  font-size: 0.375em;
  margin-top: 2.7777777777777777vh;
`;
const LargeText = styled.div`
  font-size: 0.625em;
  font-weight: bold;
`;
const ButtonGroup = styled.div`
  margin-top: 2.314814814814815vh;
`;
const Button = styled.button`
  height: 4.62962962962963vh;
  width: 10.416666666666668vw;
  border: none;
  border-radius: 19px;
  background-color: transparent;
  background-repeat: no-repeat;
  font-size: 0.333em;

  cursor: pointer;
  @media (max-width: 1800px) {
    font-size: 0.313em;
  }

  ${variant({
    variants: {
      green: {
        backgroundImage: `url(${CheckmarkIcon})`,
        backgroundSize: "1.0416666666666667vw auto",
        marginRight: "0.78125vw",
        color: "#05CCCE",
        backgroundColor: "#E4FBF8",
        backgroundPosition: "1.40625vw 1.3888888888888888vh",
        textIndent: "1.8518518518518516vh",
      },
      red: {
        backgroundImage: `url(${CloseIcon})`,
        backgroundSize: "0.8854166666666667vw auto",
        marginLeft: "0.78125vw",
        color: "#FF3C3C",
        backgroundColor: "#FEF7F7",
        backgroundPosition: "0.5208333333333334vw 1.2962962962962963vh",
        textIndent: "0.8854166666666667vw",
      },
    },
  })}

  :focus {
    outline: none;
  }
`;

export default function Logout() {
  return (
    <Container mt="5.7407407407407405vh">
      <Card mt="2.4074074074074074vh" width={"100%"} height="88.6111111111111vh">
        <Content mt="4.814814814814815vh" ml="1.5885416666666667vw" mr="1.484375vw">
          <Center>
            <Image src={LogoutIcon} width="auto" height="8.333333333333332vh" />
            <Text>You are leaving..</Text>
            <LargeText>Are you sure?</LargeText>
            <ButtonGroup>
              <Link to={LOGIN}>
                <Button variant="green">Yes, log me out</Button>
              </Link>
              <Button variant="red">No, keep me signed in</Button>
            </ButtonGroup>
          </Center>
        </Content>
      </Card>
    </Container>
  );
}
