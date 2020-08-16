import React from "react";
import { Container, HeaderContainer } from "../../../../components/Container";
import { Card, Content } from "../../../../components/Card";
import styled from "styled-components";
import { FlexContainer } from "../../../../components/FlexContainer";
import Xero from "../../../../images/InvoiceSubmission/xero.svg";
import QuickBooks from "../../../../images/InvoiceSubmission/quickbooks.svg";
import AccountCard from "./AccountCard";

const Description = styled.div`
  font-size: 0.375em;
  line-height: 2.77vh;
`;

const data = [
  {
    account: "Xero",
    img: Xero,
  },
  {
    account: "QuickBooks",
    img: QuickBooks,
  },
];
export default function InvoiceSubmisson() {
  return (
    <Container mt={"5.75vh"}>
      <HeaderContainer>Invoice Submission </HeaderContainer>
      <Card mt={"2.314814814814815vh"} width={"100%"} height="82.77777777777777vh">
        <Content mt={"4.62vh"} ml={"1.56vw"} mr={"1.56vw"}>
          <Description>
            Login to your Xero or QuickBook accounts to pledge invoices automatically. <br />
            Alternatively, you could pledge collaterals manually.
          </Description>
          <FlexContainer mt={"5.7405vh"} ml=" 7.656vw" mr="6.041vw" justifyContent={"space-between"}>
            {data.map((item, key) => (
              <AccountCard key={key} title={item.account} img={item.img} />
            ))}
            <AccountCard />
          </FlexContainer>
        </Content>
      </Card>
    </Container>
  );
}
