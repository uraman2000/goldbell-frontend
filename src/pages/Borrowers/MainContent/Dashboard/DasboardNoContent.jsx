import React from "react";
import noInvoive from "../../../images/Dashboard/no-Invoice.svg";
import { Image } from "../../../components/Image";
import { SubmitButton } from "../../../components/SubmitButton";
import { Card } from "../../../components/Card";
import styled from "styled-components";

export default function DasboardNoContent() {
  const FlexContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
  `;

  const GridItem = styled.div`
    margin-left: 4.428vw;
    margin-right: 3.541vw;
    margin-bottom: 13.889vh;
    margin-top: 8.334vh;
  `;

  const Message = styled.div`
    color: #707070;
    font-size: 1.5em;
    margin-top: 15.649vh;
  `;
  return (
    <Card mt={"2.8vh"} width={"100%"}>
      <FlexContainer>
        <GridItem>
          <Image src={noInvoive} />
        </GridItem>
        <GridItem>
          <Message>
            There are no invoice found.
            <SubmitButton mt={"2.88vh"} primary isBlock width={"323px"}>
              SUBMIT INVOICE NOW
            </SubmitButton>
          </Message>
        </GridItem>
      </FlexContainer>
    </Card>
  );
}
