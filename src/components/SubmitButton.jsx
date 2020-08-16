import styled from "styled-components";
import { margin } from "styled-system";

const shadow = `
-webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
-moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);`;

const primaryColor = "#FAB323";

export const SubmitButton = styled.button`
  ${(props) => ` 
  ${props.pullRight ? "float:right;" : ""}

  border:${props.border};
  background:${props.bg};
 ${
   props.primary
     ? `
    background-color: ${primaryColor};
    border:${primaryColor};`
     : ""
 }
background-color: ${props.color};
  border: ${props.color};
  color: ${props.fontColor};
  font-weight: bold;
  width: ${props.width ? props.width : "-webkit-fill-available"};
  height : 5.555555555555555vh;
  cursor: pointer;
  font-size: 0.375em;
  ${props.isBlock ? "display:block" : ""};
  ${props.withShadow ? shadow : ""}
  
 `}

  :focus {
    outline: none;
  }
  ${margin}
`;
