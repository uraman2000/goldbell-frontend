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
  padding-right: 1.0416666666666667vw;
`;

const AwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 11px;
  right: 3px;
  top: 1px;
  // padding: 0 0 2px;
  position: absolute;
  pointer-events: none;
  @media (min-width: 1500px) {
    top: 6px;
  }
`;

const Label = styled.label`
  font-size: 0.333em;
  position: relative;
  ${compose(margin, typography)}
`;

export default function Select(props) {
  const { data, label, labelMl, selectMl, selectWidth, selectFontWeight, LabelFontWeight, selectFontSize } = props;
  return (
    <Label ml={labelMl} fontWeight={LabelFontWeight}>
      {label}
      <SelectOptions ml={selectMl} width={"auto"} fontWeight={selectFontWeight} fontSize={selectFontSize}>
        {data.map((item, key) => (
          <option key={key} value={item.value}>
            {item.label}
          </option>
        ))}
      </SelectOptions>
      <AwesomeIcon icon={faChevronDown} />
    </Label>
  );
}
