import styled from "styled-components";
import AddIcon from "../images/Table/add-icon.svg";

export const ImageButton = styled.button`
  background: none;
  border: none;
  color: #05ccce;
  margin-top: 1.3888888888888888vh;
  font-size: 1em;
  cursor: pointer;
  height: 3.518518518518518vh;
  background-image: url(${AddIcon});
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  text-indent: 2.0833333333333335vw;
  vertical-align: middle;
  :focus {
    outline: none;
  }
`;
