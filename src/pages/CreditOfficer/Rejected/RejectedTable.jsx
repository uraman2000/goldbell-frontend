import React, { useState } from "react";
import { Table, THead, Th, Td } from "../../../components/Table";
import { Link } from "react-router-dom";
import { Image } from "../../../components/Image";
import { Card } from "../../../components/Card";
import styled from "styled-components";
import SelectCO from "../../../components/SelectCreditOfficer";
import ApprovedIcon from "../../../images/Table/approved_icon.svg";
import { REJECTED_VIEW } from "../../../utils/Links";

const Header = styled.div`
  height: 6.481481481481481vh;
  background-color: #f8f8f8;
`;
const initialState = [
  {
    borrower: "Company A",
    amount_submitted: "1,000.00",
    amount_approved: "800.00",
    submitted_date: "14/02/2020",
    schedule_no: 3,
    reviewed_by: "Credit Officer Name 01",
    status: "Rejected",
  },
  {
    borrower: "Company B",
    amount_submitted: "1,000.00",
    amount_approved: "500.00",
    submitted_date: "14/02/2020",
    schedule_no: 5,
    reviewed_by: "Credit Officer Name 01",
    status: "Rejected",
  },
  ,
  {
    borrower: "Company C",
    amount_submitted: "1,000.00",
    amount_approved: "500.00",
    submitted_date: "14/02/2020",
    schedule_no: 5,
    reviewed_by: "Credit Officer Name 01",
    status: "Rejected",
  },
  ,
  {
    borrower: "Company D",
    amount_submitted: "1,000.00",
    amount_approved: "500.00",
    submitted_date: "14/02/2020",
    schedule_no: 5,
    reviewed_by: "Credit Officer Name 01",
    status: "Rejected",
  },
];

const data = [
  {
    label: "Borrower name",
    value: "Borrower name   ",
  },
];
export default function RejectedTable(props) {
  const { lite } = props;
  const [state, setstate] = useState(initialState);
  const height = lite ? "61.388888888888886vh" : "82.68518518518518vh";
  return (
    <Card width={"100%"} Mheight={height} mt={!lite ? "2.4074074074074074vh" : ""}>
      <Header>
        <SelectCO
          LabelFontWeight="bold"
          selectFontWeight="bold"
          labelMl="1.5625vw"
          selectMl="1.5625vw"
          label="Filter by:"
          data={data}
        />
      </Header>
      <Table pt={"1.39vh"} pb={"1.7vh"} mt="3.7037037037037033vh" ml="1.5625vw" mr="1.5625vw">
        <THead pb={"2.23vh"}>
          <tr>
            <Th w={"9.375vw"}>Borrower</Th>
            <Th textAlign="center" w={"9.375vw"}>
              Amount Submitted
            </Th>
            <Th textAlign="center" w={"12.5vw"}>
              Submitted Date
            </Th>
            <Th textAlign="center" w={"5.208333333333334vw"}>
              Schedule No.
            </Th>
            <Th pl="3.385416666666667vw">{lite ? "Reviewed by" : "Status"}</Th>
            <Th w={lite ? "" : "39.0625vw"}></Th>
          </tr>
        </THead>
        <tbody>
          {state.map((item, key) => (
            <tr key={key}>
              <Td>{item.borrower}</Td>
              <Td textAlign="center">${item.amount_submitted}</Td>
              <Td textAlign="center">{item.submitted_date}</Td>
              <Td textAlign="center">{item.schedule_no}</Td>
              <Td pl="3.385416666666667vw">
                {lite ? item.reviewed_by : item.status}
              </Td>
              <Td>
                <Link
                  to={{
                    pathname: REJECTED_VIEW,
                    state: item,
                  }}
                >
                  <Image src={ApprovedIcon} pullRight width="fit-content" mr="0.5208333333333334vw" />
                </Link>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
