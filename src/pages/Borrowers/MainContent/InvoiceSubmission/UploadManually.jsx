import React, { useState } from "react";
import { HeaderContainer, Container } from "../../../../components/Container";
import { Content, Card } from "../../../../components/Card";
import styled from "styled-components";
import { FlexContainer } from "../../../../components/FlexContainer";
import GroupButton from "../../../../components/GroupButton";
import InvoiceDrop from "../../../../components/InvoiceDrop";
import SubmissionTable from "../SubmissionTable/SubmissionTable";
import Select from "../../../../components/Select";
import { UseDelete } from "../../../../utils/UseDelete";
import { useDropzone } from "react-dropzone";

const Header = styled.div`
  height: 7.4074074074074066vh;
  background-color: #fff7eb;
  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
`;

const StatusDetails = styled.ul`
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
  display: flex;
  :not(:first-child) {
    margin-left: 4.270833333333334vw;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: inherit;
  justify-content: space-between;
`;
const initialState = [
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
    remarks: "XXXXXXXXXXX",
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
    remarks: "XXXXXXXXXXX",
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
    remarks: "XXXXXXXXXXX",
    isEdit: false,
  },
];
const curencyData = [
  {
    label: "SGD",
    value: "SGD",
  },
  {
    label: "MYR",
    value: "MYR",
  },
];

const creditData = [
  {
    label: "XXX",
    value: "XXX",
  },
  {
    label: "XXX",
    value: "XXX",
  },
];
export default function UploadManually(props) {
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
      <HeaderContainer>Upload manually</HeaderContainer>

      <Card width={"100%"} height="auto" mt="2.4074074074074074vh">
        <Content mb="3.229166666666667vw">
          <Header>
            <Wrapper>
              <StatusDetails>
                <Details>
                  <Select
                    selectWidth="50px"
                    LabelFontWeight="bold"
                    selectMl="1.0416666666666667vw"
                    label="Select Currency"
                    data={curencyData}
                  />
                </Details>
                <Details>
                  <Select
                    LabelFontWeight="bold"
                    selectWidth="50px"
                    selectMl="1.0416666666666667vw"
                    label="Select Credit Line"
                    data={creditData}
                  />
                </Details>
              </StatusDetails>
              <FlexContainer justifyContent="flex-end">
                <InvoiceDrop variant="small" getInputProps={getInputProps} getRootProps={getRootProps} />
              </FlexContainer>
            </Wrapper>
          </Header>
          <SubmissionTable
            viration="upload"
            data={state}
            addHandler={(e) => addHandler()}
            handleDelete={(key) => handleDelete(key)}
            handleEdit={(item, key) => handleEdit(item, key)}
            onChange={(e, key, item, keyData) => onChange(e, key, item, keyData)}
            handleEditUpload={(files, key, item) => handleEditUpload(files, key, item)}
          />

          <GroupButton />
          <InvoiceDrop variant="large" getInputProps={getInputProps} getRootProps={getRootProps} />
        </Content>
      </Card>
    </Container>
  );
}
