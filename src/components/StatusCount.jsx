import React from "react";
import { Card } from "./Card";
import styled from "styled-components";
const Wraper = styled.div`
  padding-top: 2.8vh;
  padding-left: 1.563vw;
  padding-right: 1.563vw;
  padding-bottom: 2.6vh;
`;
const Title = styled.div`
  font-size: 0.417em;
  font-weight: bold;
  width: ${(props) => (props.width ? props.width : "")};
  // width: 205px;
  @media (max-width: 1600px) {
    ${(props) => (props.minContent ? " width: min-content;" : "")}
  }
`;
const Icon = styled.img`
  // margin-left: 51px;
  right: 0;
  position: absolute;
  margin-right: 1.5626vw;
`;
const Count = styled.div`
  font-size: 1.667em;

  ${(props) => (props.width ? "margin-top: -0.2vh;" : "margin-top: 2vh")};
  @media (max-width: 1600px) {
    ${(props) => (props.width || props.minContent ? "margin-top: -0.64vh;" : "margin-top: 2vh")};
  }
  text-align: right;
  /* margin-left: 12.656vw; */
`;

const CardCustomShadow = styled(Card)`
  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
`;
export default function StatusCount(props) {
  const { title, icon, count, width, minContent } = props;

  return (
    <CardCustomShadow width={"18.229166666666668vw"} height={"auto"}>
      <Wraper>
        <Icon src={icon} />
        <Title width={width} minContent={minContent}>
          {title}
        </Title>
        <Count width={width} minContent={minContent}>
          {count}
        </Count>
      </Wraper>
    </CardCustomShadow>
  );
}
