import React from "react";
import { Container, HeaderContainer } from "../../../components/Container";
import { Card } from "../../../components/Card";
import MatInput from "../../../components/MatInput";
import styled from "styled-components";
import { margin } from "styled-system";
import { Link } from "react-router-dom";
import { BORROWER } from "../../../utils/Links";
import { SubmitButton } from "../../../components/SubmitButton";

import { useForm } from "react-hook-form";
import { useEffect } from "react";

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.column ? props.column : "auto auto auto")};
  gap: 2.604166666666667vw;
  ${margin}
`;

export default function BorrowerAddEdit(props) {
  const { title, data } = props.location.state;
  const { handleSubmit, register, errors, setValue, getValues } = useForm();

  useEffect(() => {
    if (data) {
      setValue("company", data.company);
      setValue("email", data.email);
    }
  });

  const onSubmit = (values) => console.log(values);
  return (
    <Container mt="5.7407407407407405vh">
      <HeaderContainer>{title}</HeaderContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card width={"100%"} mt="2.4074074074074074vh" pb="7.083333333333333vh">
          <FormGroup ml="4.6875vw" mr="4.114583333333334vw" mt="5.7407407407407405vh">
            <MatInput name="company" label="Company" refs={register({ required: true })} />
            <MatInput label="First name" name="first_name" refs={register({ required: true })} />
            <MatInput label="last name" name="last_name" refs={register({ required: true })} />
          </FormGroup>
          <FormGroup ml="4.6875vw" mr="4.114583333333334vw" mt="3.7499999999999996vh">
            <MatInput label="Registration no," name="registration_no" refs={register({ required: true })} />
            <MatInput label="Email" name="email" refs={register({ required: true })} />
            <MatInput label="Tel" name="tel1" refs={register({ required: true })} />
          </FormGroup>
          <FormGroup ml="4.6875vw" mr="4.114583333333334vw" mt="3.7499999999999996vh">
            <MatInput label="Type of company" name="type_of_company" refs={register({ required: true })} />
            <MatInput label="Address" name="address" refs={register({ required: true })} />
            <MatInput label="Website" name="website" refs={register({ required: true })} />
          </FormGroup>
        </Card>
        <Card width={"100%"} height={"52.77777777777777vh"} mt="3.2407407407407405vh">
          <FormGroup column="1.3fr 0.6fr" ml="4.6875vw" mr="4.114583333333334vw" mt="5.7407407407407405vh">
            <MatInput label="Business scope" name="business_scope" refs={register({ required: true })} />
            <MatInput label="Annual Turnover" name="annual_turnover" refs={register({ required: true })} />
          </FormGroup>
          <FormGroup ml="4.6875vw" mr="4.114583333333334vw" mt="3.7499999999999996vh">
            <MatInput label="Bank" name="bank" refs={register({ required: true })} />
            <MatInput label="Account No." name="account_no" refs={register({ required: true })} />
            <MatInput label="Tel" name="tel2" refs={register({ required: true })} />
          </FormGroup>
          <FormGroup ml="4.6875vw" mr="4.114583333333334vw" mt="3.7499999999999996vh">
            <MatInput label="Type of company" name="type_of_company" refs={register({ required: true })} />
            <MatInput label="Address" name="address2" refs={register({ required: true })} />
            <MatInput label="Website" name="website2" refs={register({ required: true })} />
          </FormGroup>

          <Link to={BORROWER}>
            <SubmitButton
              pullRight
              primary
              mt="6.527777777777778vh"
              mr="4.114583333333334vw"
              border="none"
              width="9.895833333333334vw"
              type="submit"
            >
              ADD COMPANY
            </SubmitButton>
          </Link>
        </Card>
      </form>
    </Container>
  );
}
