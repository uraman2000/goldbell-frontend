import styled from "styled-components";
import { layout, variant } from "styled-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TableInput = styled.input`
  border: none;
  background-color: #f7f7f7;
  height: 4.166666666666666vh;
  text-indent: 0.78125vw;
  font-size: 11px;
  :focus {
    outline: none;
  }
  @media (min-width: 1500px) {
    font-size: 16px;
  }
  ${layout};
  ${variant({
    variants: {
      normal: {},
      date: {
        paddingRight: "1.09375vw",
      },
    },
  })}
`;
TableInput.defaultProps = {
  variant: "normal",
};
export const InputWraper = styled.div`
  position: relative;
`;
export const TableInputEndIcon = styled(FontAwesomeIcon)`
  font-size: 10px;
  top: 9px;
  right: 22px;
  color: #707070;
  position: absolute;
  @media (min-width: 1500px) {
    font-size: 12px;
    top: 15px;
    right: 30px;
  }
  ${layout}
`;
