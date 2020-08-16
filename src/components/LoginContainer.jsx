import React from "react";
import styled from "styled-components";
import { Center } from "./Center";
import Logo from "./Logo";

const Container = styled.section`
  width: ${(props) => props.width};
  height: 100vh;
  background-color: ${(props) => props.bgColor};
  display: flex;
`;

const Wrapper = styled.section`
  padding-top: 8.425925925925926vh;
  padding-left: 4.270833333333334vw;
  padding-right: 6.09375vw;
  padding-bottom: 5.648148148148148vh;
  position: relative;
`;

const CopyRights = styled.div`
  font-style: italic;
  bottom: 4.62962962962963vh;
  font-size: 0.333em;
  position: absolute;
  line-height: 2.222222222222222vh;
  letter-spacing: 1px;
`;

const BackGround = styled.div`
  height: 100%;
  background-image: url(${(props) => props.bg});
  display: flex;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function LoginContainer(props) {
  const { children, bg } = props;

  const isChildArray = (child) => {
    return Array.isArray(child);
  };

  return (
    <BackGround bg={bg}>
      <Container width={"38.54166666666667vw"} bgColor={"rgb(250,179,35,0.9)"}>
        <Wrapper>
          <Logo w="15.885416666666668vw" />
          {isChildArray(children) ? children[0] : children}
          <CopyRights>
            Disclaimer | Terms of service | Privacy policy
            <br />
            2020 © GoldBell Financial Services Pte Ltd
          </CopyRights>
        </Wrapper>
      </Container>
      <Container width={"61.458333333333336vw"} bgColor={isChildArray(children) ? "#FDF9F4" : ""}>
        <Center>{isChildArray(children) ? children[1] : null}</Center>
      </Container>
    </BackGround>
  );
}
