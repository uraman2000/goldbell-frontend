import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { INVOICE_SUBMISSION, INCOMPLETE_SUBMISSION, SUBMISSION_STATUS } from "../utils/Links";
import { SubmitButton } from "./SubmitButton";

const ButtonContainer = styled.div`
  margin-top: 0.9259259259259258vh;
  display: flex;
  justify-content: flex-end;
  margin-right: 2.0833333333333335vw;
`;
export default function GroupButton() {
  return (
    <ButtonContainer>
      <Link to={INVOICE_SUBMISSION}>
        <SubmitButton bg="none" fontColor="#FF3C3C" border="none" width="9.895833333333334vw">
          DELETE
        </SubmitButton>
      </Link>
      <Link to={INCOMPLETE_SUBMISSION}>
        <SubmitButton mr="1.3020833333333335vw" border="none" width="9.895833333333334vw">
          SAVE
        </SubmitButton>
      </Link>
      <Link to={SUBMISSION_STATUS}>
        <SubmitButton primary width="9.895833333333334vw">
          SUBMIT
        </SubmitButton>
      </Link>
    </ButtonContainer>
  );
}
