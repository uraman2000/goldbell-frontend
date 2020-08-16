import React from "react";
import styled from "styled-components";
import { Card, Content } from "../../../../components/Card";
import ModalIcon from "../../../../images/ManageStaff/modal-icon.svg";
import { Image } from "../../../../components/Image";
import { FlexContainer } from "../../../../components/FlexContainer";
import CloseIcon from "../../../../images/Table/delete-icon.svg";

const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  transition: opacity linear 0.5s;
`;
const Desc = styled.div`
  font-size: 0.5em;
  color: #707070;
  text-align: center;
  margin-top: 3.9537037037037037vh;
  width: 19.78125vw;
`;
const Close = styled(Image)`
  position: absolute;
  top: -1.2962962962962963vh;
  right: -0.9895833333333334vw;
`;

export default function SubmitModal(props) {
  const { onClick } = props;
  return (
    <Container>
      <Card width="29.791666666666668vw" height="42.22222222222222vh">
        <Close width="2.34375vw" height="auto" src={CloseIcon} onClick={onClick} />
        <Content mt="7.129629629629629vh" ml="1.4583333333333335vw" mr="1.4583333333333335vw" mb="9.25925925925926vh">
          <FlexContainer justifyContent="center">
            <Image width="10.053125000000001vw" height="auto" src={ModalIcon} />
          </FlexContainer>
          <FlexContainer justifyContent="center">
            <Desc>Staff has been added, an email containing an auto-generated password has been sent</Desc>
          </FlexContainer>
        </Content>
      </Card>
    </Container>
  );
}
