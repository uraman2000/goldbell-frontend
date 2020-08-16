import React from "react";
import { Container, HeaderContainer } from "../../../../components/Container";
import { Content, Card } from "../../../../components/Card";
import styled from "styled-components";
import filterIcon from "../../../../images/SubmissionStatus/filter.svg";
import { Image } from "../../../../components/Image";
import Select from "../../../../components/Select";
import { Table, THead, Th, TableStatus } from "../../../../components/Table";
import { SUBMISSION_STATUS_DETAILED } from "../../../../utils/Links";

const Header = styled.div`
  width: 100%;
  height: 7.4074074074074066vh;
  background-color: #f8f8f8;
  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
`;

const Span = styled.span`
  position: absolute;
  margin-top: 3.148148148148148vh;
  margin-left: ${(props) => props.ml};
  font-size: 0.333em;
`;

const Navigation = styled.div`
  float: right;
  margin-right: 2.8645833333333335vw;
`;

export default function SubmissionStatus() {
  const data = [
    {
      label: "All",
      value: "all",
    },
  ];

  const subData = [
    {
      schedule_no: 1,
      submission_date: "02/02/2020",
      submitted_by: "ABC 1",
      summited_amount: "XX,XXX.XX",
      approved_amount: "XX,XXX.XX",
      remarks: "XXXXXXXXXXXXXXXX",
      status: "Rejected",
    },
    {
      schedule_no: 2,
      submission_date: "02/02/2020",
      submitted_by: "ABC 1",
      summited_amount: "XX,XXX.XX",
      approved_amount: "XX,XXX.XX",
      remarks: "XXXXXXXXXXXXXXXX",
      status: "Approved",
    },
    {
      schedule_no: 3,
      submission_date: "02/02/2020",
      submitted_by: "ABC 1",
      summited_amount: "XX,XXX.XX",
      approved_amount: "XX,XXX.XX",
      remarks: "XXXXXXXXXXXXXXXX",
      status: "Partial",
    },
    {
      schedule_no: 4,
      submission_date: "02/02/2020",
      submitted_by: "ABC 1",
      summited_amount: "XX,XXX.XX",
      approved_amount: "XX,XXX.XX",
      remarks: "XXXXXXXXXXXXXXXX",
      status: "Pending",
    },
  ];
  return (
    <Container mt="5.7407407407407405vh">
      <HeaderContainer>Submission status</HeaderContainer>
      <Content mt="2.4074074074074074vh">
        <Card width={"100%"} height="82.68518518518518vh">
          <Header>
            <Image
              mt="2.657407407407407vh"
              ml="1.578125vw"
              height="auto"
              width="1.5869791666666666vw"
              src={filterIcon}
            />
            <Span ml="0.9270833333333334vw">Filter by</Span>
            <Navigation>
              <Select
                selectFontWeight="bold"
                selectWidth="36px"
                selectMl="4.583333333333334vw"
                label="Submission by"
                data={data}
              />
              <Select
                selectFontWeight="bold"
                selectWidth="36px"
                labelMl="5.729166666666667vw"
                selectMl="4.791666666666667vw"
                label="Submission date "
                data={data}
              />
              <Select
                selectFontWeight="bold"
                selectWidth="36px"
                labelMl="5.729166666666667vw"
                selectMl="3.8020833333333335vw"
                label="Status "
                data={data}
              />
            </Navigation>
          </Header>
          <Table mt="4.351851851851851vh" mr="1.484375vw" ml="1.5625vw" pt={"2.41vh"} pb={"2.6vh"}>
            <THead pb={"3.16vh"}>
              <tr>
                <Th w={"7.82vw"}>Schedule no.</Th>
                <Th w={"10.6vw"}>Submission date</Th>
                <Th w={"12.1vw"}>Submitted by</Th>
                <Th w={"11.65vw"}>Submitted amount</Th>
                <Th w={"11.5vw"}>Approved amount</Th>
                <Th w={"14.27vw"}>Remarks by Credit Officer</Th>
                <Th w={"4.1vw"}>Status</Th>
              </tr>
            </THead>
            <tbody>
              {subData.map((item, key) => (
                <tr key={key}>
                  <td>{item.schedule_no}</td>
                  <td>{item.submission_date}</td>
                  <td>{item.submitted_by}</td>
                  <td>${item.summited_amount}</td>
                  <td>${item.approved_amount}</td>
                  <td>{item.remarks}</td>
                  <td>
                    <TableStatus
                      to={{
                        pathname: SUBMISSION_STATUS_DETAILED,
                        state: {
                          data: item,
                        },
                      }}
                      status={item.status}
                    >
                      {item.status}
                    </TableStatus>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Content>
    </Container>
  );
}
