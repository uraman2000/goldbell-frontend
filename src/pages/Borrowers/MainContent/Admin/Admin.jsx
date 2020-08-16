import React, { useState } from "react";
import { Content, Card } from "../../../../components/Card";
import { Container, HeaderContainer } from "../../../../components/Container";
import { Image } from "../../../../components/Image";
import AdminAltIcon from "../../../../images/Admin/admin-alt.svg";
import styled from "styled-components";
import { FlexContainer } from "../../../../components/FlexContainer";
import MatInput from "../../../../components/MatInput";
import Switch from "../../../../components/Switch";
import { margin } from "styled-system";
import { SubmitButton } from "../../../../components/SubmitButton";
import Checkbox from "../../../../components/Checkbox";
import { Link } from "react-router-dom";

const Profile = styled.div`
  display: flex;
  div {
    margin-left: 1.0416666666666667vw;
    margin-top: 0.4629629629629629vh;
    width: max-content;
  }
`;

const ProfileDesc = styled.div`
  margin-left: 10.3125vw;
  margin-top: 0.9259259259259258vh;
  width: 100%;
`;

const CompanyLabel = styled.div`
  font-size: 0.333em;
  color: #707070;
`;
const Company = styled.div`
  font-weight: bold;
  font-size: 0.625em;
`;

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 2.604166666666667vw;
  ${margin}
`;
const TermsHeader = styled.div`
  font-weight: bold;
  font-size: 0.375em;
`;
const TermsDesc = styled.div`
  ${margin}
  font-size: 0.375em;
  line-height: 2.7777777777777777vh;
`;

const YellowText = styled(Link)`
  color: #fab323;
  font-weight: bold;
`;
export default function Admin() {
  const [changePass, setChangepass] = useState(false);
  const [agree, setAggree] = useState(true);
  return (
    <Container mt="5.7407407407407405vh">
      <HeaderContainer>Admin</HeaderContainer>

      <Card mt="2.4074074074074074vh" width={"100%"} height="auto">
        <Content mt="5.092592592592593vh" ml="2.3958333333333335vw" mr="3.2552083333333335vw" mb="5vh">
          <FlexContainer>
            <Profile>
              <Image src={AdminAltIcon} width="6.25vw" height="11.11111111111111vh" />
              <div>
                <CompanyLabel>Company</CompanyLabel>
                <Company>LKJ Pte Ltd</Company>
              </div>
            </Profile>
            <ProfileDesc>
              <FormGroup>
                <MatInput label="First name" />
                <MatInput label="Last name" />
              </FormGroup>
              <MatInput mt="2.7777777777777777vh" label="Email" />
              <Switch
                mt="8.101851851851851vh"
                onClick={(e) => {
                  setChangepass(e.target.checked);
                }}
              />
              {changePass ? (
                <>
                  <MatInput mt="1.111111111111111vh" label="Current password" />
                  <FormGroup mt="0.9259259259259258vh">
                    <MatInput label="New password" />
                    <MatInput label="Confirm password" />
                  </FormGroup>
                </>
              ) : null}
              <FlexContainer justifyContent="flex-end">
                <SubmitButton
                  primary
                  mt={changePass ? "5.046296296296296vh" : ""}
                  border="none"
                  width="9.895833333333334vw"
                >
                  SAVE
                </SubmitButton>
              </FlexContainer>
            </ProfileDesc>
          </FlexContainer>
        </Content>
      </Card>
      <Card mt="3.7037037037037033vh" width={"100%"} height="auto">
        <Content mt="3.0555555555555554vh" ml="2.3958333333333335vw" mr="3.2552083333333335vw" mb="5vh">
          <TermsHeader>Terms of Service and Privacy Policy </TermsHeader>
          <TermsDesc mt="1.3888888888888888vh">
            GoldBell Financial Services Terms of service and Privacy policy explains how we use, store, and process
            information about you to provide, understand, improve, and develop the GoldBell Financial Services
            Platform, create and maintain a trusted and safer environment and comply with our legal obligations.
          </TermsDesc>

          <FlexContainer mt="3.0555555555555554vh">
            <Checkbox
              checked={agree}
              onClick={() => {
                console.log(agree);
                setAggree(!agree);
              }}
            />
            <TermsDesc ml="0.7291666666666667vw">
              Yes, I agreed to the
              <YellowText>Terms of service</YellowText> and
              <YellowText> Privacy policy</YellowText>
            </TermsDesc>
          </FlexContainer>
        </Content>
      </Card>
    </Container>
  );
}
