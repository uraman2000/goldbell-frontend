import React, { useState } from "react";
import { Table, THead, Th, Td } from "../../../components/Table";
import { Link } from "react-router-dom";
import { Image } from "../../../components/Image";
import { Card } from "../../../components/Card";
import styled from "styled-components";
import SelectCO from "../../../components/SelectCreditOfficer";
import ApprovedIcon from "../../../images/Table/approved_icon.svg";
import { APPROVED_VIEW } from "../../../utils/Links";

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
    status: "new",
  },
  {
    borrower: "Company B",
    amount_submitted: "1,000.00",
    amount_approved: "500.00",
    submitted_date: "14/02/2020",
    schedule_no: 5,
    reviewed_by: "Credit Officer Name 01",
    status: "new",
  },
  ,
  {
    borrower: "Company C",
    amount_submitted: "1,000.00",
    amount_approved: "500.00",
    submitted_date: "14/02/2020",
    schedule_no: 5,
    reviewed_by: "Credit Officer Name 01",
    status: "Processing",
  },
  ,
  {
    borrower: "Company D",
    amount_submitted: "1,000.00",
    amount_approved: "500.00",
    submitted_date: "14/02/2020",
    schedule_no: 5,
    reviewed_by: "Credit Officer Name 01",
    status: "Processing",
  },
];

const data = [
  {
    label: "Borrower name",
    value: "Borrower name   ",
  },
];
export default function ApprovedTable(props) {
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
            <Th w={"5.989583333333334vw"}>Borrower</Th>
            <Th textAlign="center" w="12.760416666666668vw">
              Amount Submitted
            </Th>
            <Th textAlign="center" w="10.416666666666668vw">
              Amount Approved
            </Th>
            <Th textAlign="center" w={"12.5vw"}>
              Submitted Date
            </Th>
            <Th textAlign="center" w={"5.208333333333334vw"}>
              Schedule No.
            </Th>
            <Th pl="65px">{lite ? "Reviewed by" : "Status"}</Th>
            <Th w={!lite ? "23.4375vw" : ""}></Th>
          </tr>
        </THead>
        <tbody>
          {state.map((item, key) => (
            <tr key={key}>
              <Td fontWeight="bold">{item.borrower}</Td>
              <Td textAlign="center">${item.amount_submitted}</Td>
              <Td textAlign="center">${item.amount_approved}</Td>
              <Td textAlign="center">{item.submitted_date}</Td>
              <Td textAlign="center">{item.schedule_no}</Td>
              <Td pl="65px">{lite ? item.reviewed_by : item.status}</Td>
              <Td>
                <Link
                  to={{
                    pathname: APPROVED_VIEW,
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
