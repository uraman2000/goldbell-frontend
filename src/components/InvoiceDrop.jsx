import React from "react";
import styled from "styled-components";
import UploadIcon from "../images/IncompleteSubmission/upload.svg";
import { Image } from "./Image";
import { variant } from "styled-system";

const DropContainer = styled.div`
  background-color: #e4fbf8;
  display: flex;
  cursor: pointer;

  ${variant({
    variants: {
      small: {
        width: "20.46875vw",
      },
      large: {
        width: "73.4375vw",
        height: "15.555555555555555vh",
        margin: "auto",
        marginTop: "4.722222222222222vh",
        border: "1px dashed #17C4AE",

        // backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='1' stroke-dasharray='4' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
      },
    },
  })}
`;

const DropDescription = styled.div(
  variant({
    variants: {
      small: {
        marginLeft: "1.8229166666666667vw",
        marginTop: "0.9259259259259258vh",
        marginRight: "3.541666666666667vw",
        marginBottom: "1.111111111111111vh",
      },
      large: {
        margin: "auto",
        textAlign: "center",
        width: "9.895833333333334vw",
      },
    },
  })
);
const DropTitle = styled.div`
  color: #05ccce;
  font-size: 0.375em;
  font-weight: bold;
`;
const DropDetails = styled.div`
  font-size: 0.292em;
  color: #707070;
`;
const Wraper = styled.div`
  display: flex;
  ${variant({
    variants: {
      large: {
        margin: "auto",
        display: "block",
      },
    },
  })}
`;

const Icon = styled(Image)(
  variant({
    variants: {
      large: {
        margin: "auto",
        display: "block",
      },
    },
  })
);

export default function InvoiceDrop(props) {
  const { variant, getRootProps, getInputProps } = props;

  return (
    <DropContainer variant={variant} {...getRootProps()}>
      <Wraper variant={variant}>
        <Icon src={UploadIcon} ml="3.6458333333333335vw" width="1.5625vw" height="auto" variant={variant} />
        <DropDescription variant={variant}>
          <DropTitle>Drop invoices here</DropTitle>
          <DropDetails> Format: PDF, JPEG, PNG (Name of file = invoice number)</DropDetails>
        </DropDescription>
      </Wraper>
      <input {...getInputProps()} />
    </DropContainer>
  );
}
