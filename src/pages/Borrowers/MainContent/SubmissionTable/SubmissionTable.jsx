import React from "react";
import { Table, THead, Th } from "../../../../components/Table";
import FileUploadIcon from "../../../../images/SubmissionStatus/file-upload.svg";
import DeleteIcon from "../../../../images/Table/delete-icon.svg";
import { FlexContainer } from "../../../../components/FlexContainer";
import DeleteIconSmall from "../../../../images/Table/small-close.svg";
import { Image } from "../../../../components/Image";
import { ImageButton } from "../../../../components/ImageButton";
import UploadCircleIcon from "../../../../images/Table/upload-circle.svg";
import TableSelect from "./TableSelect";
import { TableInput, TableInputEndIcon, InputWraper } from "./TableInput";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import EditIcon from "../../../../images/Table/edit-icon.svg";
import Dropzone from "react-dropzone";

const selectCustomerName = [
  {
    label: "ABD Pte Ltd 1",
    value: "ABD Pte Ltd 1",
  },
  {
    label: "ABD Pte Ltd 2",
    value: "ABD Pte Ltd 2",
  },
  ,
  {
    label: "ABD Pte Ltd 3",
    value: "ABD Pte Ltd 3",
  },
];
function TD(props) {
  const { index, item, keyData, width, type, changeHandler } = props;
  if (item.isEdit) {
    if (type === "Select") {
      return (
        <td>
          <TableSelect
            width={width}
            data={selectCustomerName}
            value={item[keyData]}
            onChange={(e) => changeHandler(e, index, item, keyData)}
          />
        </td>
      );
    } else if (type === "Date") {
      return (
        <td>
          <InputWraper>
            <TableInput
              variant="date"
              width={width}
              value={item[keyData]}
              onChange={(e) => changeHandler(e, index, item, keyData)}
            />
            <TableInputEndIcon icon={faCalendar} />
          </InputWraper>
        </td>
      );
    }
    return (
      <td>
        <TableInput value={item[keyData]} width={width} onChange={(e) => changeHandler(e, index, item, keyData)} />
      </td>
    );
  }
  return <td>{item[keyData]}</td>;
}
export default function SubmissionTable(props) {
  const { data, viration, handleDelete, addHandler, handleEdit, onChange, handleEditUpload, mt } = props;

  return (
    <Table allBorder mt={mt ? mt : "2.5vh"} mr="1.484375vw" ml="1.5625vw" pt={"2.41vh"} pb={"2.6vh"}>
      <THead pb={"3.16vh"}>
        <tr>
          <Th w="7.552083333333334vw">Customer name</Th>
          <Th>Code</Th>
          <Th>BR</Th>
          <Th>Invoice Number</Th>
          <Th>Invoice Date</Th>
          <Th>Invoice Amount</Th>
          <Th>Credit Period</Th>
          <Th>Credit Terms</Th>
          <Th>File Upload</Th>
          <Th w="10.6875vw">Remarks by Credit Officer</Th>
          {viration === "view" ? null : (
            <>
              <Th></Th>
              <Th></Th>
            </>
          )}
        </tr>
      </THead>
      <tbody>
        {data.map((item, key) => (
          <tr key={key}>
            {/* {TD(key, item, , "9.635416666666668vw")} */}
            <TD
              type="Select"
              index={key}
              item={item}
              keyData="customer_name"
              width="7.239583333333334vw"
              changeHandler={(e, key, item, keyData) => onChange(e, key, item, keyData)}
            />
            <td>{item.code}</td>
            <td>{item.br}</td>
            <TD
              index={key}
              item={item}
              keyData="invoice_number"
              width="6.510416666666667vw"
              changeHandler={(e, key, item, keyData) => onChange(e, key, item, keyData)}
            />
            <TD
              type="Date"
              index={key}
              item={item}
              keyData="invoice_date"
              width="4.947916666666667vw"
              changeHandler={(e, key, item, keyData) => onChange(e, key, item, keyData)}
            />
            <TD
              index={key}
              item={item}
              keyData="invoice_amount"
              width="6.458333333333334vw"
              changeHandler={(e, key, item, keyData) => onChange(e, key, item, keyData)}
            />
            <TD
              index={key}
              item={item}
              keyData="credit_period"
              width="5.520833333333334vw"
              changeHandler={(e, key, item, keyData) => onChange(e, key, item, keyData)}
            />
            <td>{item.credit_terms}</td>
            <td>
              {viration === "upload" ? (
                <>
                  <Dropzone
                    maxFiles={1}
                    multiple={false}
                    onDrop={(acceptedFiles) => {
                      handleEditUpload(acceptedFiles, key, item);
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <>
                        <Image
                          {...getRootProps()}
                          src={UploadCircleIcon}
                          width="1.9791666666666667vw"
                          height="auto"
                        />
                        <input id="table" {...getInputProps()} />
                      </>
                    )}
                  </Dropzone>
                </>
              ) : (
                <Dropzone
                  maxFiles={1}
                  multiple={false}
                  onDrop={(acceptedFiles) => {
                    handleEditUpload(acceptedFiles, key, item);
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <>
                      <FlexContainer>
                        {viration === "view" ? (
                          <Image src={FileUploadIcon} width="1.9791666666666667vw" height="auto" />
                        ) : (
                          <>
                            <Image
                              {...getRootProps()}
                              src={FileUploadIcon}
                              width="1.9791666666666667vw"
                              height="auto"
                            />
                            <Image
                              ml="5.2px"
                              src={DeleteIconSmall}
                              width="0.5385416666666667vw"
                              height="auto"
                              onClick={(e) => {}}
                            />
                          </>
                        )}
                      </FlexContainer>
                      <input id="table" {...getInputProps()} />
                    </>
                  )}
                </Dropzone>
              )}
            </td>
            <TD
              index={key}
              item={item}
              keyData="remarks"
              width="8.125vw"
              changeHandler={(e, key, item, keyData) => onChange(e, key, item, keyData)}
            />

            {viration === "view" ? null : (
              <>
                <td>
                  <Image
                    src={EditIcon}
                    width="1.9791666666666667vw"
                    height="auto"
                    onClick={(e) => handleEdit(item, key)}
                  />
                </td>
                <td>
                  <Image
                    src={DeleteIcon}
                    width="1.9791666666666667vw"
                    height="auto"
                    onClick={(e) => handleDelete(key)}
                  />
                </td>
              </>
            )}
          </tr>
        ))}
        {viration === "view" ? null : (
          <tr>
            <td colSpan="11">
              <ImageButton onClick={(e) => addHandler()}>Add more</ImageButton>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
