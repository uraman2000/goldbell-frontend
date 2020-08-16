import React from "react";
import { Container, HeaderContainer } from "../../../components/Container";
import PendingTable from "./PendingTable";

export default function Pending() {
  return (
    <Container mt="5.7407407407407405vh">
      <HeaderContainer>Pending</HeaderContainer>
      <PendingTable />
    </Container>
  );
}
