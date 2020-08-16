import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { margin, layout, typography, compose } from "styled-system";

const SelectOptions = styled.select`
  border: none;

  background: none;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  position: relative;
  ${compose(margin, layout, typography)}
  :focus {
    outline: none;
  }
  padding-right: 16px;
`;

const AwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 11px;
  right: 3px;
  top: 23px;
  position: absolute;
  pointer-events: none;
  @media (min-width: 1500px) {
    top: 36px;
  }
`;

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  span {
    font-size: 0.333em;
  }
  position: relative;
  select {
    font-size: 0.333em;
  }
  ${compose(margin, typography)}
`;

export default function SelectCreditOfficer(props) {
  const { data, label, labelMl, selectMl, selectWidth, selectFontWeight, LabelFontWeight } = props;
  return (
    <Container ml={labelMl} fontWeight={LabelFontWeight}>
      <span>{label}</span>
      <SelectOptions ml={selectMl} width={"auto"} fontWeight={selectFontWeight}>
        {data.map((item, key) => (
          <option key={key} value={item.value}>
            {item.label}
          </option>
        ))}
      </SelectOptions>
      <AwesomeIcon icon={faChevronDown} />
    </Container>
  );
}
