import React, { useState } from "react";
import { Table, THead, Th, Td } from "../../../components/Table";
import { Link } from "react-router-dom";
import { Image } from "../../../components/Image";
import EditIcon from "../../../images/Table/edit-icon.svg";
import { Card } from "../../../components/Card";
import styled from "styled-components";
import SelectCO from "../../../components/SelectCreditOfficer";
import { PENDING_EDIT } from "../../../utils/Links";
const Header = styled.div`
  height: 6.481481481481481vh;
  background-color: #f8f8f8;
`;
const initialState = [
  {
    borrower: "Company A",
    amount_submitted: "1,000.00",
    submitted_date: "14/02/2020",
    schedule_no: 3,
    status: "New",
  },
  {
    borrower: "Company B",
    amount_submitted: "500.00",
    submitted_date: "20/02/2020",
    schedule_no: 6,
    status: "Processing",
  },
  {
    borrower: "Company C",
    amount_submitted: "2,000.00",
    submitted_date: "07/30/2016",
    schedule_no: 5,
    status: "Processing",
  },
];

const data = [
  {
    label: "Borrower name",
    value: "Borrower name   ",
  },
];
export default function PendingTable(props) {
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
            <Th w="7.291666666666667vw">Borrower</Th>
            <Th w="11.71875vw" textAlign="center">
              Amount Submitted
            </Th>
            <Th w="12.5vw" textAlign="center">
              Submitted Date
            </Th>
            <Th w="10.416666666666668vw" textAlign="center">
              Schedule No.
            </Th>
            <Th w="9.375vw">Status</Th>
            <Th></Th>
          </tr>
        </THead>
        <tbody>
          {state.map((item, key) => (
            <tr key={key}>
              <Td fontWeight="bold">{item.borrower}</Td>
              <Td textAlign="center">${item.amount_submitted}</Td>
              <Td textAlign="center">{item.submitted_date}</Td>
              <Td textAlign="center">{item.schedule_no}</Td>
              <Td>{item.status}</Td>
              <Td>
                <Link
                  to={{
                    pathname: PENDING_EDIT,
                    state: item,
                  }}
                >
                  <Image pullRight src={EditIcon} width="fit-content" />
                </Link>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
