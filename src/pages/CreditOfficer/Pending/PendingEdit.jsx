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
    label: "New",
    value: "new",
  },
];

const Header = styled.div`
  background-color: #fff7eb;
  height: 12.037037037037036vh;
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1.0416666666666667vw 1.0416666666666667vw;
  grid-template-areas: ". .";
`;

const Column = styled.div`
  margin-top: 2.962962962962963vh;
  :first-child {
    margin-left: 1.4583333333333335vw;
  }
  ${Wraper}:last-child {
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

const TextBox = styled.textarea`
  border: none;
  background-color: #f7f7f7;
  height: 11.11111111111111vh;
  width: 32.8125vw;
  margin-top: 1.0185185185185184vh;
  text-indent: 0.78125vw;
  font-size: 11px;
  font-family: "Lato" !important;
  resize: none;
  :focus {
    outline: none;
  }
  @media (min-width: 1500px) {
    font-size: 16px;
  }
`;

const TextBoxTitle = styled.div`
  margin-top: 3.009259259259259vh;
  font-size: 0.333em;
  font-weight: bold;
`;

const TextBoxContainer = styled.div`
  margin-right: 1.4583333333333335vw;
`;

const ButtonContainer = styled.div`
  margin-top: 2.7777777777777777vh;
`;
export default function PendingEdit() {
  const [state, setstate] = useState(initialState);

  const handleEdit = (item, key) => {
    let oldState = { ...state };
    oldState["data"][key] = { ...item, isEdit: !item.isEdit };
    setstate(oldState);
  };

  const verifyHandler = (item, key) => {
    let oldState = { ...state };

    oldState["data"][key] = { ...item, verified: !item.verified };
    setstate(oldState);
  };

  const onChange = (e, key, item, keyData) => {
    let oldState = { ...state };
    oldState["data"][key] = { ...item, [keyData]: e.target.value };
    setstate(oldState);
  };

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
          </Column>
          <Column ml="0.78125vw">
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
          <Column ml="0.78125vw">
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
        </Header>
        <COTable
          data={state.data}
          handleEdit={(item, key) => handleEdit(item, key)}
          verifyHandler={(item, key) => verifyHandler(item, key)}
          changeHandler={(e, key, item, objectKey) => onChange(e, key, item, objectKey)}
        />

        <FlexContainer justifyContent="flex-end" flexDirection="column" alignItems="flex-end">
          <TextBoxContainer>
            <TextBoxTitle>Overall remarks by credit officer</TextBoxTitle>
            <TextBox type="textbox" />
          </TextBoxContainer>
          <ButtonContainer>
            <Link to={PENDING}>
              <SubmitButton primary bg="none" border="none" mr="1.5625vw" width="9.895833333333334vw">
                SAVE
              </SubmitButton>
            </Link>
            <Link to={REJECTED}>
              <SubmitButton
                bg="#FAD4D4"
                fontColor="#EC3343"
                mr="1.5625vw"
                border="none"
                width="9.895833333333334vw"
              >
                REJECT
              </SubmitButton>
            </Link>
            <Link to={APPROVED}>
              <SubmitButton
                bg="#05CD33"
                fontColor="#ffff"
                mr="1.4583333333333335vw"
                border="none"
                width="9.895833333333334vw"
              >
                APPROVED
              </SubmitButton>
            </Link>
          </ButtonContainer>
        </FlexContainer>
      </Card>
    </Container>
  );
}
