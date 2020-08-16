import React, { useState } from "react";
import { Container, HeaderContainer } from "../../../../components/Container";
import { Card } from "../../../../components/Card";
import styled from "styled-components";
import { Image } from "../../../../components/Image";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "../../../../components/Input";
import { Table, THead, Th } from "../../../../components/Table";
import deleteIcon from "../../../../images/Table/delete-icon.svg";
import { UseDelete } from "../../../../utils/UseDelete";
import Select from "../../../../components/Select";
import GroupButton from "../../../../components/GroupButton";

const Header = styled.div`
  width: 100%;
  height: 13.888888888888888vh;
  background-color: #fafafa;
`;

const Navigation = styled.div`
  float: right;
  margin-top: 2.962962962962963vh;
  @media (max-width: 1440px) {
    margin-top: 0px;
  }
`;

const Search = styled(Input)`
  background-color: #e4fbf8;
  color: #05ccce;
  width: 18.125vw;
  height: 6.481481481481481vh;
  margin: 0px;
  text-indent: 5.677083333333334vw;
  font-size: 0.9375vw;
  padding: 0px;

  @media (max-width: 1440px) {
    text-indent: 50px;
  }
`;
const SearchWraper = styled.div`
  position: relative;
  margin-right: 2.0833333333333335vw;
  margin-left: 1.875vw;
  font-size: 0.625em;
  display: inline-block;
  .faSearch {
    font-size: 0.625em;
    color: #05ccce;
    margin-top: 1.8518518518518516vh;
    margin-bottom: 1.8518518518518516vh;
    margin-left: 2.604166666666667vw;
    position: absolute;
    @media (max-width: 1440px) {
      margin-left: 15px;
      margin-top: 14px;
    }
  }
`;

const initData = [
  { id: 0, InvoiceNumber: "Invoice2033", InvoiceAmount: "XXX,XXX,XXX" },
  { id: 1, InvoiceNumber: "Invoice2033", InvoiceAmount: "XXX,XXX,XXX" },
  { id: 2, InvoiceNumber: "Invoice2033", InvoiceAmount: "XXX,XXX,XXX" },
];

export default function Account(props) {
  const { title, img } = props.location.state;

  const [state, setstate] = useState(initData);

  const itemDelete = (key) => {
    setstate(UseDelete(state, key));
  };

  const searchHandler = (e) => {
    console.log(e.target.value);
  };

  const curencyData = [
    {
      label: "SGD",
      value: "SGD",
    },
    {
      label: "MYR",
      value: "MYR",
    },
  ];

  const creditData = [
    {
      label: "XXX",
      value: "XXX",
    },
    {
      label: "XXX",
      value: "XXX",
    },
  ];
  return (
    <Container mt={"5.75vh"}>
      <HeaderContainer>{title}</HeaderContainer>
      <Card mt={"2.314814814814815vh"} width={"100%"} height="82.77777777777777vh">
        <Header>
          <Image width="auto" src={img} />
          <Navigation>
            <Select
              selectWidth="50px"
              selectMl="1.0416666666666667vw"
              label="Select Currency"
              data={curencyData}
            />
            <Select
              selectWidth="50px"
              selectMl="1.0416666666666667vw"
              labelMl="2.0833333333333335vw"
              label="Select Credit Line"
              data={creditData}
            />

            <SearchWraper>
              <FontAwesomeIcon className="faSearch" icon={faSearch} />
              <Search
                b
                placeholder="Search invoice number"
                placeholderColor="#05CCCE"
                onChange={(e) => searchHandler(e)}
              />
            </SearchWraper>
          </Navigation>
        </Header>

        <Table
          allBorder
          pt={"1.39vh"}
          pb={"1.7vh"}
          mt="3.888888888888889vh"
          ml="2.7083333333333335vw"
          mr="2.0833333333333335vw"
        >
          <THead pb={"2.23vh"}>
            <tr>
              <Th w="4.166666666666667vw"></Th>
              <Th w="13.28125vw"> Invoice Number</Th>
              <Th>Invoice Amount</Th>
            </tr>
          </THead>
          <tbody>
            {state.map((item, key) => (
              <tr key={key}>
                <td>
                  <Image
                    src={deleteIcon}
                    onClick={() => {
                      itemDelete(key);
                    }}
                  />
                </td>
                <td>{item.InvoiceNumber}</td>
                <td>${item.InvoiceAmount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <GroupButton />
      </Card>
    </Container>
  );
}
