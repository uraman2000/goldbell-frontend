import styled from "styled-components";
import { margin, flexbox } from "styled-system";

// export const FlexContainer = styled.div((props) => ({
//   display: "flex",
//   justifyContent: props.justifyContent,
//   alignItems: props.align,
//   //   height: "100%",
//   //   width: "100%",
// }));
export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.align};
  ${margin}
  ${flexbox}
`;
