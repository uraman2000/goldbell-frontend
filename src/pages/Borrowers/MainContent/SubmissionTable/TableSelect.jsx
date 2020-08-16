import React from "react";
import styled from "styled-components";
import { compose, margin, typography, layout } from "styled-system";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectOptions = styled.select`
  border: none;
  background: #f7f7f7;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  position: relative;
  width: 95%;
  height: 4.166666666666666vh;
  text-indent: 1.0416666666666667vw;
  font-size: 2.3em;
  ${compose(margin, layout, typography)};
  :focus {
    outline: none;
  }
  ${layout}
`;

const AwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 6px;
  right: 14px;
  top: 10px;
  position: absolute;
  pointer-events: none;
  color: #707070;
  @media (min-width: 1500px) {
    font-size: 11px;
    top: 14px;
    right: 17px;
  }
`;

const SelectContainer = styled.div`
  font-size: 0.333em;
  position: relative;
  ${compose(margin, typography)}
`;

export default function TableSelect(props) {
  const { data, width, value, onChange } = props;
  return (
    <>
      <SelectContainer>
        <SelectOptions width={width} value={value} onChange={(e) => onChange(e)}>
          {data.map((item, key) => (
            <option key={key} value={item.value}>
              {item.label}
            </option>
          ))}
        </SelectOptions>
        <AwesomeIcon icon={faChevronDown} />
      </SelectContainer>
    </>
  );
}
