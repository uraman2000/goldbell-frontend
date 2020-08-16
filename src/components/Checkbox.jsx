import React from "react";
import styled from "styled-components";
import { Image } from "./Image";
import CheckBoxCheckedIcon from "../images/Table/check-box-checked.svg";
import CheckBoxIcon from "../images/Table/check-box.svg";
import { layout } from "styled-system";

const MImage = styled(Image)`
  cursor: ${(props) => props.cursor};
  height: 3.518518518518518vh;
  width: auto;
  ${layout}
`;

export default function Checkbox(props) {
  const { checked, onClick, height } = props;
  let icon = checked ? CheckBoxCheckedIcon : CheckBoxIcon;

  return <MImage src={icon} onClick={onClick} height={height} />;
}
