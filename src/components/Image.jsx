import styled from "styled-components";
import { margin } from "styled-system";

export const Image = styled.img(
  (props) => ({
    cursor: props.onClick ? "pointer" : "",
    width: props.width ? props.width : props.onClick ? "fit-content" : "100%",
    height: props.height ? props.height : "100%",
    marginTop: props.mt,
    marginLeft: props.ml,
    float: props.pullRight ? "right" : props.pullLeft ? "left" : "",
  }),
  margin
);
