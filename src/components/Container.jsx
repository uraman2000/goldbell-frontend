import styled from "styled-components";

export const HeaderContainer = styled.div`
  font-weight: bold;
  font-size: 0.625em;
`;

export const Container = styled.section`
  margin-left: 3.1vw;
  margin-right: 3.6vw;
  margin-top: ${(props) => props.mt};
  margin-bottom: 5.3vh;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 0.5208333333333334vw;
  span {
    font-size: 0.625em;
    font-weight: bold;
  }
`;
