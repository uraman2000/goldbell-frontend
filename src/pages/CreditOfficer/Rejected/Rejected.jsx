import React from "react";
import { Container, HeaderContainer } from "../../../components/Container";
import RejectedTable from "./RejectedTable";

export default function Rejected() {
  return (
    <Container mt="5.7407407407407405vh">
      <HeaderContainer>Rejected</HeaderContainer>
      <RejectedTable />
    </Container>
  );
}
