import React, { useState } from "react";
import { Container } from "../../../../components/Container";
import styled from "styled-components";
import incompleteSubIcon from "../../../../images/Dashboard/incomplete_submission.svg";
import submitedInvoiceIcon from "../../../../images/Dashboard/submitted_invoice.svg";
import totalApprovedLoanIcon from "../../../../images/Dashboard/total_approved_loan_amount.svg";
import totalStaffIcon from "../../../../images/Dashboard/total_staff.svg";
// import DasboardNoContent from "./DasboardNoContent";
import { Card, Content } from "../../../../components/Card";
import noInvoive from "../../../../images/Dashboard/no-Invoice.svg";
import { Image } from "../../../../components/Image";
import { SubmitButton } from "../../../../components/SubmitButton";
import { FlexContainer } from "../../../../components/FlexContainer";
import { Link } from "react-router-dom";
import deleteIcon from "../../../../images/Table/delete-icon.svg";
import editIcon from "../../../../images/Table/edit-icon.svg";
import {
  INCOMPLETE_SUBMISSION,
  SUBMISSION_STATUS,
  INVOICE_SUBMISSION,
  INCOMPLETE_ITEM_DATA,
  SUBMISSION_STATUS_DETAILED,
} from "../../../../utils/Links";
import { Table, THead, Th, TableStatus } from "../../../../components/Table";
import { UseDelete } from "../../../../utils/UseDelete";
import StatusCount from "../../../../components/StatusCount";
import DeleteConfirmation from "../../../../components/DeleteConfirmation";
const Title = styled.div`
  font-size: 0.417em;
  font-weight: bold;
`;

const ViewAll = styled(Link)`
  color: #707070;
  font-size: 0.7em;
  font-style: italic;
  text-decoration: none;
  padding-top: 0.56vh;
  float: right;
`;

const data = [
  {
    lastUpdated: "10/30/2020",
    staffName: "ABC1",
    totalAmount: "12,345",
  },
  {
    lastUpdated: "10/30/2021",
    staffName: "ABC2",
    totalAmount: "12,345",
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
];

const NewInvoiceLink = styled(Link)`
  width: 100%;
`;

export default function Dashboard() {
  const [state, setstate] = useState(data);
  const [modal, setModal] = useState({
    key: "",
    isShow: false,
  });

  const deleteHandler = () => {
    setModal({ key: "", isShow: !modal.isShow });
    setstate(UseDelete(state, modal.key));
  };

  const modalHandler = (key) => {
    setModal({ key: key, isShow: !modal.isShow });
  };

  return (
    <Container mt={"6vh"}>
      <FlexContainer justifyContent={"space-between"}>
        <StatusCount title="Incomplete submission" icon={incompleteSubIcon} count={3} minContent={true} />
        <StatusCount title="Submitted invoice" icon={submitedInvoiceIcon} count={3} />
        <StatusCount title="Total approved loan amount" icon={totalApprovedLoanIcon} count={3} width={"8.96vw"} />
        <StatusCount title="Total staff" icon={totalStaffIcon} count={3} />
      </FlexContainer>

      {/* <DasboardNoContent /> */}
      <FlexContainer justifyContent={"space-between"}>
        <Card mt={"2.8vh"} width={"49%"}>
          <Content mt={"2.78vh"} ml={"1.57vw"} mr={"1.67vw"}>
            <Title>
              Incomplete submission <ViewAll to={INCOMPLETE_SUBMISSION}>View all</ViewAll>
            </Title>

            <Table pt={"1.39vh"} pb={"1.7vh"}>
              <THead pb={"2.23vh"}>
                <tr>
                  <Th w={"8.1vw"}>Last updated</Th>
                  <Th w={"13.1vw"}>Staff name</Th>
                  <Th w={"8vw"}>Total amount</Th>
                  <Th w={"2.82vw"}></Th>
                  <Th></Th>
                </tr>
              </THead>
              <tbody>
                {state.map((item, key) => (
                  <tr key={key}>
                    <td>{item.lastUpdated}</td>
                    <td>{item.staffName}</td>
                    <td>${item.totalAmount}</td>
                    <td>
                      <Link
                        to={{
                          pathname: INCOMPLETE_ITEM_DATA,
                          state: item,
                        }}
                      >
                        <Image src={editIcon} />
                      </Link>
                    </td>
                    <td>
                      <Image
                        src={deleteIcon}
                        onClick={() => {
                          modalHandler(key);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Content>
        </Card>
        <Card mt={"2.8vh"} width={"49%"}>
          <Content mt={"1.9vh"} ml={"0.6vw"} mb={"1.8vh"} mr={"1.85vw"}>
            <FlexContainer justifyContent={"space-between"} align={"center"}>
              <Image width={"17.5vw"} src={noInvoive} />
              <NewInvoiceLink to={INVOICE_SUBMISSION}>
                <SubmitButton primary ml={"0.9vw"}>
                  SUBMIT NEW INVOICE
                </SubmitButton>
              </NewInvoiceLink>
            </FlexContainer>
          </Content>
        </Card>
      </FlexContainer>
      <Card mt={"3.25vh"} height={"100%"} width={"100%"}>
        <Content mt={"2.8VH"} ml={"1.6vw"} mb={"8.1vh"} mr={"2.4vw"}>
          <Title>
            Submission status<ViewAll to={SUBMISSION_STATUS}>View all</ViewAll>
          </Title>
          <Table pt={"2.41vh"} pb={"2.6vh"}>
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
        </Content>
      </Card>
      {modal.isShow ? (
        <DeleteConfirmation
          type="submission"
          onClose={() => {
            setModal({ ...modal, isShow: !modal.isShow });
          }}
          onConfirm={() => {
            deleteHandler();
          }}
        />
      ) : null}
    </Container>
  );
}
