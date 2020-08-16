import React from "react";
import { Table, THead, Th, Td } from "../../components/Table";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PencilEditIcon from "../../images/Table/pencil-edit.svg";
import { Image } from "../../components/Image";
import Checkbox from "../../components/Checkbox";
import { TableInput } from "../Borrowers/MainContent/SubmissionTable/TableInput";

const Mtable = styled(Table)`
  td {
    font-size: 0.313em;
  }
  Th {
    font-weight: normal;
    padding-left: 0.2604166666666667vw;
    padding-right: 0.2604166666666667vw;
  }
`;

const View = styled(Link)`
  color: #05ccce;
`;
export const MTHead = styled(THead)`
  tr:last-child > th {
    padding-bottom: 1.9444444444444444vh;
  }
`;

function EditableRow({ item, index, width, objectKey, withIcon, handleEdit, changeHandler }) {
  if (item.isEdit) {
    return (
      <Td>
        <TableInput
          variant="date"
          width={width}
          value={item[objectKey]}
          onChange={(e) => changeHandler(e, index, item, objectKey)}
        />
      </Td>
    );
  }

  if (withIcon) {
    return (
      <Td textAlign="center">
        {item[objectKey]}
        {console.log(handleEdit)}
        {handleEdit ? (
          <Image
            ml="10px"
            width="0.78125vw"
            height="auto"
            src={PencilEditIcon}
            onClick={() => handleEdit(item, index)}
          />
        ) : (
          ""
        )}
      </Td>
    );
  }
  return <Td textAlign="center">{item[objectKey]}</Td>;
}

export default function COTable(props) {
  const { data, handleEdit, verifyHandler, changeHandler, approved } = props;
  return (
    <Mtable
      allBorder
      mt={"3.7037037037037033vh"}
      mr="1.4583333333333335vw"
      ml="1.4583333333333335vw"
      pt={"2.41vh"}
      pb={"1.3425925925925926vh"}
    >
      <MTHead>
        <tr>
          <Th>Customer name</Th>
          <Th>Code</Th>
          <Th textAlign="center">BR</Th>
          <Th textAlign="center">Invoice Number</Th>
          <Th textAlign="center">Invoice Date</Th>
          <Th textAlign="center">Invoice Amount</Th>
          <Th textAlign="center">Credit Period</Th>
          <Th textAlign="center">Credit Terms</Th>
          <Th textAlign="center">File Upload</Th>
          <Th textAlign="center">Borrower Remarks</Th>
          <Th textAlign="center">Approved Amount</Th>
          <Th textAlign="center" w="13.020833333333334vw">
            Credit Officer Remarks
          </Th>
          {verifyHandler || approved ? <Th textAlign="center">Verified</Th> : ""}
        </tr>
      </MTHead>
      <tbody>
        {data.map((item, key) => (
          <tr key={key}>
            <Td>{item.customer_name}</Td>
            <Td>{item.code}</Td>
            <Td textAlign="center">{item.br}</Td>
            <Td textAlign="center">{item.invoice_number}</Td>
            <Td textAlign="center">{item.invoice_date}</Td>
            <Td textAlign="center">${item.invoice_amount}</Td>
            <Td textAlign="center">{item.credit_period}</Td>
            <Td textAlign="center">{item.credit_terms}</Td>
            <Td textAlign="center">
              <View to="">View</View>
              {item.file_upload}
            </Td>
            <Td textAlign="center">{item.Borrower_remarks}</Td>
            <EditableRow
              objectKey="approved_amount"
              item={item}
              index={key}
              width="5.208333333333334vw"
              changeHandler={(e, key, item, objectKey) => changeHandler(e, key, item, objectKey)}
            />
            <EditableRow
              withIcon
              objectKey="credit_officer_remarks"
              item={item}
              index={key}
              width="11.197916666666668vw"
              handleEdit={handleEdit ? () => handleEdit(item, key) : ""}
              changeHandler={(e, key, item, objectKey) => changeHandler(e, key, item, objectKey)}
            />
            {verifyHandler ? (
              <Td textAlign="center">
                <Checkbox
                  height="2.7777777777777777vh"
                  checked={item.verified}
                  onClick={() => verifyHandler(item, key)}
                />
              </Td>
            ) : (
              ""
            )}
            {approved ? (
              <Td>
                <Checkbox height="2.7777777777777777vh" checked={true} />
              </Td>
            ) : (
              ""
            )}
          </tr>
        ))}
      </tbody>
    </Mtable>
  );
}
