import React, { useState } from "react";
import { HeaderContainer, Container } from "../../../../components/Container";
import { Content, Card } from "../../../../components/Card";
import styled from "styled-components";
import GroupButton from "../../../../components/GroupButton";
import InvoiceDrop from "../../../../components/InvoiceDrop";
import SubmissionTable from "../SubmissionTable/SubmissionTable";
import { UseDelete } from "../../../../utils/UseDelete";
import { useDropzone } from "react-dropzone";

const Header = styled.div`
  height: 80px;
  background-color: #fff7eb;
  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
`;

const StatusDetails = styled.ul`
  font-size: 0.333em;
  margin-block-start: 0px;
  margin-block-end: 0px;
  list-style: none;
  padding-inline-start: 1.5625vw;
  display: flex;
  height: 100%;
`;
const Details = styled.li`
  margin-top: auto;
  margin-bottom: auto;
  :not(:first-child) {
    margin-left: 4.6875vw;
  }
`;
const DetailsTittle = styled.span`
  font-weight: bold;
`;
const DetailsStatus = styled.span`
  margin-left: 1.0416666666666667vw;
`;

const initialState = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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

export default function ItemData(props) {
  const { lastUpdated, staffName } = props.location.state;
  const statusDetailsData = [
    {
      title: "Status",
      value: "Draft",
    },
    {
      title: "Last Update",
      value: lastUpdated,
    },
    {
      title: "Total Amount",
      value: "$XX,XXX.XX",
    },
    {
      title: "Currency",
      value: "SGD",
    },
    {
      title: "Credit Line",
      value: "XXX",
    },
    {
      title: "Create by",
      value: staffName,
    },
  ];
  const [state, setstate] = useState(initialState);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "application/pdf,.jpg,.png,",
    onDrop: (acceptedFiles) => {
      // debugger;inputRef
      handleUpload(acceptedFiles);
    },
  });

  const handleEdit = (item, key) => {
    let oldState = [...state];
    oldState[key] = { ...item, isEdit: !item.isEdit };
    setstate(oldState);
  };

  const handleUpload = (files) => {
    const data = [...state];
    files.forEach((element) => {
      data.push({ file_upload: element, isEdit: true });
    });

    setstate(data);
  };

  const handleEditUpload = (files, key, item) => {
    let oldState = [...state];
    oldState[key].file_upload = files;
    setstate(oldState);
    console.log(state);
  };

  const handleDelete = (key) => {
    setstate(UseDelete(state, key));
  };
  const addHandler = () => {
    const data = [...state];
    data.push({ isEdit: true });

    console.log(data);
    setstate(data);
  };
  const onChange = (e, key, item, keyData) => {
    let oldState = [...state];
    oldState[key][keyData] = e.target.value;
    setstate(oldState);
  };

  return (
    <Container mt="5.7407407407407405vh">
      <HeaderContainer>Incomplete submission - {lastUpdated}</HeaderContainer>
      <InvoiceDrop variant="large" getInputProps={getInputProps} getRootProps={getRootProps} />
      <Card width={"100%"} height="auto" mt="4.166666666666666vh">
        <Content mb="3.229166666666667vw">
          <Header>
            <StatusDetails>
              {statusDetailsData.map((item, key) => (
                <Details key={key}>
                  <DetailsTittle>{item.title}</DetailsTittle>
                  <DetailsStatus>{item.value}</DetailsStatus>
                </Details>
              ))}
            </StatusDetails>
          </Header>
          <SubmissionTable
            mt="3.2407407407407405vh"
            data={state}
            addHandler={(e) => addHandler()}
            handleDelete={(key) => handleDelete(key)}
            handleEdit={(item, key) => handleEdit(item, key)}
            onChange={(e, key, item, keyData) => onChange(e, key, item, keyData)}
            handleEditUpload={(files, key, item) => handleEditUpload(files, key, item)}
          />
          <GroupButton />
        </Content>
      </Card>
    </Container>
  );
}
