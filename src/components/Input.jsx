import styled from "styled-components";
import { margin } from "styled-system";

export const Input = styled.input`
  height: ${(props) => props.height};
  // border: ${(props) => (props.withBorder ? "1px solid #C3C3C3;" : "")};
  border: ${(props) => (props.borderColor ? `1px solid ${props.borderColor}` : "none")};

  margin-top: 2.7777777777777777vh;
  width: -webkit-fill-available;
  font-size: 0.354em;
  text-indent: 1.40625vw;
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${(props) => (props.placeholderColor ? props.placeholderColor : "#8b8e99")};

    font-weight: ${(props) => (props.b ? "bold" : "")};
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${(props) => (props.placeholderColor ? props.placeholderColor : "#8b8e99")};

    font-weight: ${(props) => (props.b ? "bold" : "")};
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${(props) => (props.placeholderColor ? props.placeholderColor : "#8b8e99")};

    font-weight: ${(props) => (props.b ? "bold" : "")};
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: ${(props) => (props.placeholderColor ? props.placeholderColor : "#8b8e99")};
    font-weight: ${(props) => (props.b ? "bold" : "")};
  }
  ${margin}
`;
