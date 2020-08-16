import React from "react";
import { Container, HeaderContainer } from "../../../components/Container";
import ApprovedTable from "./ApprovedTable";

export default function Approved() {
  return (
    <Container mt="5.7407407407407405vh">
      <HeaderContainer>Approved</HeaderContainer>
      <ApprovedTable />
    </Container>
  );
}
