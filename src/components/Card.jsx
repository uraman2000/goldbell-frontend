import styled from "styled-components";
import { margin, space, padding } from "styled-system";
export const Card = styled.div`
  background: #fff;
  // border-radius: 2px;
  display: inline-block;
  min-height: ${(props) => props.Mheight};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin-top: ${(props) => props.mt};
  // margin: 1rem;
  position: relative;
  // padding: 86px 60px 119px 60px;
  -webkit-box-shadow: 0px 1px 3px 0px
    rgba(0, 0, 0, ${(props) => (props.shadowPercent ? props.shadowPercent : "0.10")});
  -moz-box-shadow: 0px 1px 3px 0px
    rgba(0, 0, 0, ${(props) => (props.shadowPercent ? props.shadowPercent : "0.10")});
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, ${(props) => (props.shadowPercent ? props.shadowPercent : "0.10")});
  ${margin}
  ${padding}
`;

export const Content = styled.div`
  ${margin}
`;
