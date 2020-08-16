import React from "react";
import { Container, HeaderContainer, Title } from "../../../components/Container";
import { Card } from "../../../components/Card";
import styled from "styled-components";
import SelectCO from "../../../components/SelectCreditOfficer";
import { compose, layout, typography, margin } from "styled-system";
import COTable from "../COTable";
import { useState } from "react";
import { FlexContainer } from "../../../components/FlexContainer";
import { SubmitButton } from "../../../components/SubmitButton";
import { Link } from "react-router-dom";
import { PENDING, REJECTED, APPROVED } from "../../../utils/Links";

const data = [
  {
    label: "Approved",
    value: "Approved",
  },
];

const Header = styled.div`
  background-color: #e4fbf8;
  height: 16.203703703703702vh;
  display: flex;
`;

const Label = styled.div`
  font-weight: ${(props) => (props.Bold ? "Bold" : "")};
  display: inline-block;
  font-size: 0.333em;
  ${compose(margin, layout, typography)}
`;

const Wraper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: ${(props) => (props.remarks ? " 1f" : "1fr 1fr")};
  grid-template-rows: 1fr;
  gap: 1.0416666666666667vw 1.0416666666666667vw;
  grid-template-areas: ". .";
`;

const Column = styled.div`
  margin-top: 2.962962962962963vh;
  :first-child {
    margin-left: 1.4583333333333335vw;
  }
  ${Wraper}:not(:first-child) {
    margin-top: 1.9444444444444444vh;
  }

  ${margin}
`;
const initialState = {
  data: [
    {
      customer_name: "ABD Pte Ltd 1",
      code: "ABCSGSGXX",
      br: "00",
      invoice_number: "Invoice 2003",
      invoice_date: "02/04/2019",
      invoice_amount: "XX,XXX.XX",
      credit_period: "30 days",
      credit_terms: "OA",
      file_upload: "",
      Borrower_remarks: "XXXXXXXXXXX",
      approved_amount: "XXX,XXX.XXX",
      credit_officer_remarks: "XXX,XXX.XXX",
      verified: true,
      isEdit: false,
    },
    {
      customer_name: "ABD Pte Ltd 2",
      code: "ABCSGSGXX",
      br: "00",
      invoice_number: "Invoice 2003",
      invoice_date: "02/04/2019",
      invoice_amount: "XX,XXX.XX",
      credit_period: "30 days",
      credit_terms: "OA",
      file_upload: "",
      Borrower_remarks: "XXXXXXXXXXX",
      approved_amount: "XXX,XXX.XXX",
      credit_officer_remarks: "XXX,XXX.XXX",
      verified: false,
      isEdit: false,
    },
    {
      customer_name: "ABD Pte Ltd 3",
      code: "ABCSGSGXX",
      br: "00",
      invoice_number: "Invoice 2003",
      invoice_date: "02/04/2019",
      invoice_amount: "XX,XXX.XX",
      credit_period: "30 days",
      credit_terms: "OA",
      file_upload: "",
      Borrower_remarks: "XXXXXXXXXXX",
      approved_amount: "XXX,XXX.XXX",
      credit_officer_remarks: "XXX,XXX.XXXX",
      verified: false,
      isEdit: false,
    },
  ],
  overall_remarks: "",
};

const ButtonContainer = styled.div`
  margin-top: 2.7777777777777777vh;
`;
export default function ApprovedView() {
  const [state, setstate] = useState(initialState);

  return (
    <Container mt="5.7407407407407405vh">
      <Title>
        <span>Pending</span>
        <SelectCO label="Status" data={data} LabelFontWeight="bold" selectMl="1.5625vw" />
      </Title>

      <Card width={"100%"} Mheight={"81.48148148148148vh"} mt="2.4074074074074074vh">
        <Header>
          <Column>
            <Wraper>
              <Label Bold width="7.291666666666667vw">
                Amount Submitted
              </Label>
              <Label>$1,000.00</Label>
            </Wraper>
            <Wraper>
              <Label Bold width="7.291666666666667vw">
                Date Submitted
              </Label>
              <Label>12/02/2020</Label>
            </Wraper>
            <Wraper>
              <Label Bold width="7.291666666666667vw">
                Reviewed by
              </Label>
              <Label width="max-content">Officer Name 01</Label>
            </Wraper>
          </Column>
          <Column ml="70px">
            <Wraper>
              <Label Bold width="4.6875vw">
                Currency
              </Label>
              <Label>SGD</Label>
            </Wraper>
            <Wraper>
              <Label Bold width="4.6875vw">
                Schedule no.
              </Label>
              <Label>3</Label>
            </Wraper>
          </Column>
          <Column ml="70px">
            <Wraper>
              <Label Bold width="5.208333333333334vw">
                Credit line
              </Label>
              <Label>XXX</Label>
            </Wraper>
            <Wraper>
              <Label Bold width="5.208333333333334vw">
                Last Update
              </Label>
              <Label>-</Label>
            </Wraper>
          </Column>
          <Column ml="250px">
            <Wraper remarks>
              <Label Bold width="-webkit-fill-available">
                Overall remarks by credit officer
              </Label>
            </Wraper>
            <Wraper remarks>
              <Label mr="21px" width="-webkit-fill-available" lineHeight="2.222222222222222vh">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur enim metus, in feugiat
                nulla venenatis a. Aliquam erat volutpat.
              </Label>
            </Wraper>
          </Column>
        </Header>
        <COTable approved data={state.data} />

        <FlexContainer justifyContent="flex-end" flexDirection="column" alignItems="flex-end">
          <ButtonContainer>
            <Link to={APPROVED}>
              <SubmitButton primary mr="1.4583333333333335vw" border="none" width="9.895833333333334vw">
                ClOSE
              </SubmitButton>
            </Link>
          </ButtonContainer>
        </FlexContainer>
      </Card>
    </Container>
  );
}
