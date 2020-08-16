import React from "react";
import { Container, HeaderContainer } from "../../../../components/Container";
import { Content, Card } from "../../../../components/Card";
import styled from "styled-components";
import { grid, compose, layout, typography, margin } from "styled-system";
import { Link } from "react-router-dom";
import { SubmitButton } from "../../../../components/SubmitButton";
import { SUBMISSION_STATUS } from "../../../../utils/Links";
import SubmissionTable from "../SubmissionTable/SubmissionTable";

const Header = styled.div`
  width: 100%;
  height: 8.645833333333334vw;
  background-color: #e4fbf8;
  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  padding-top: 3.148148148148148vh;
  display: inline-flex;
`;

const Label = styled.div`
  font-weight: ${(props) => (props.Bold ? "Bold" : "")};
  display: inline-block;
  font-size: 0.333em;
  ${compose(margin, layout, typography)}
`;

const Wraper = styled.div`
  width: fit-content;
  display: flex;
  margin-left: 1.5625vw;
  ${compose(grid, layout, margin)};
`;

const MainWraper = styled.div``;

const tableData = [
  {
    customer_name: "ABD Pte Ltd",
    code: "ABCSGSGXX",
    br: "00",
    invoice_number: "Invoice 2003",
    invoice_date: "02/04/2019",
    invoice_amount: "XX,XXX.XX",
    credit_period: "30 days",
    credit_terms: "OA",
    file_upload: "",
    remarks: "XXXXXXXXXXX",
  },
  {
    customer_name: "ABD Pte Ltd",
    code: "ABCSGSGXX",
    br: "00",
    invoice_number: "Invoice 2003",
    invoice_date: "02/04/2019",
    invoice_amount: "XX,XXX.XX",
    credit_period: "30 days",
    credit_terms: "OA",
    file_upload: "",
    remarks: "XXXXXXXXXXX",
  },
  {
    customer_name: "ABD Pte Ltd",
    code: "ABCSGSGXX",
    br: "00",
    invoice_number: "Invoice 2003",
    invoice_date: "02/04/2019",
    invoice_amount: "XX,XXX.XX",
    credit_period: "30 days",
    credit_terms: "OA",
    file_upload: "",
    remarks: "XXXXXXXXXXX",
  },
];
export default function DetailedStatus(props) {
  const { data } = props.location.state;
  console.log(data);
  return (
    <Container mt="5.7407407407407405vh">
      <HeaderContainer>{data.submitted_by}</HeaderContainer>
      <Content mt="2.4074074074074074vh">
        <Card width={"100%"} height="82.68518518518518vh">
          <Header>
            <MainWraper>
              <Wraper>
                <Label Bold width="7.291666666666667vw">
                  Status
                </Label>
                <Label width="7.291666666666667vw">{data.status}</Label>
              </Wraper>
              <Wraper mt="1.8518518518518516vh">
                <Label Bold width="7.291666666666667vw">
                  Schedule no.
                </Label>
                <Label>{data.schedule_no}</Label>
              </Wraper>
              <Wraper mt="1.8518518518518516vh">
                <Label Bold width="7.291666666666667vw">
                  Last update
                </Label>
                <Label>08/02/2020 </Label>
              </Wraper>
            </MainWraper>
            <MainWraper>
              <Wraper>
                <Label Bold width="10.15625vw">
                  Submitted amount
                </Label>
                <Label width="8.333333333333334vw">${data.summited_amount}</Label>
              </Wraper>
              <Wraper mt="1.759259259259259vh">
                <Label Bold width="10.15625vw">
                  Approved amount
                </Label>
                <Label>$XX,XXX.XX</Label>
              </Wraper>
              <Wraper mt="1.8518518518518516vh">
                <Label Bold width="10.15625vw">
                  Date submitted
                </Label>
                <Label>08/02/2020 </Label>
              </Wraper>
            </MainWraper>
            <MainWraper>
              <Wraper>
                <Label Bold width="5.208333333333334vw">
                  Curency
                </Label>
                <Label width="5.208333333333334vw">SGD</Label>
              </Wraper>
              <Wraper mt="1.759259259259259vh">
                <Label Bold width="5.208333333333334vw">
                  Credit line.
                </Label>
                <Label>XXX</Label>
              </Wraper>
            </MainWraper>
            <MainWraper>
              <Wraper>
                <Label Bold width="-webkit-fill-available">
                  Overall remarks by credit officer
                </Label>
              </Wraper>
              <Wraper mt="1.759259259259259vh" mr="3.385416666666667vw">
                <Label width="-webkit-fill-available" lineHeight="2.222222222222222vh">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur enim metus, in feugiat
                  nulla venenatis a. Aliquam erat volutpat.
                </Label>
              </Wraper>
            </MainWraper>
          </Header>
          <SubmissionTable viration="view" data={tableData} />
          <Link to={SUBMISSION_STATUS}>
            <SubmitButton
              mt="1.4583333333333335vw"
              mr="1.4583333333333335vw"
              pullRight
              primary
              width="9.895833333333334vw"
            >
              Close
            </SubmitButton>
          </Link>
        </Card>
      </Content>
    </Container>
  );
}
