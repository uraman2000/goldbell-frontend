import React, { useState } from "react";
import StatusCount from "../../../components/StatusCount";
import { Container } from "../../../components/Container";
import { FlexContainer } from "../../../components/FlexContainer";
import PendingIcon from "../../../images/Navigation/pending.svg";
import ApprovedIcon from "../../../images/Navigation/approved.svg";
import RejectedIcon from "../../../images/Navigation/rejected.svg";
import BorrowerIcon from "../../../images/Navigation/borrower.svg";
import styled from "styled-components";
import PendingTable from "../Pending/PendingTable";
import ApprovedTable from "../Approved/ApprovedTable";
import RejectedTable from "../Rejected/RejectedTable";

const PannelTitle = styled.div`
  width: 6.25vw;
  height: 5.555555555555555vh;
  font-size: 0.333em;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.0416666666666667vw;
  font-weight: bold;
  cursor: pointer;

  ${(props) => (props.isActive ? `color: white; background-color:${props.background} ` : "")}
`;
const PanelContainer = styled(FlexContainer)`
  border-bottom: 5px solid ${(props) => ` ${props.background}`};
`;

export default function Dashboard() {
  const [panelState, setPanelState] = useState({
    heading: [
      { title: "Pending", color: "#FFAC2E", isActive: true, component: <PendingTable lite /> },
      { title: "Approved", color: "#05CD33", isActive: false, component: <ApprovedTable lite /> },
      { title: "Rejected", color: "#FF3C3C", isActive: false, component: <RejectedTable lite /> },
    ],
    currentColor: "#FFAC2E",
    activeComponent: <PendingTable lite />,
  });

  const togglePanelHandler = (e) => {
    const text = e.currentTarget.textContent;
    const oldState = { ...panelState };
    oldState.heading.map((element) => {
      element.isActive = false;
      if (text === element.title) {
        element.isActive = true;
        oldState.currentColor = element.color;
        oldState.activeComponent = element.component;
      }
    });

    setPanelState(oldState);
  };
  return (
    <Container mt={"6vh"}>
      <FlexContainer justifyContent={"space-between"}>
        <StatusCount title="Total Pending" icon={PendingIcon} count={7} />
        <StatusCount title="Total Approved" icon={ApprovedIcon} count={30} />
        <StatusCount title="Total Rejected" icon={RejectedIcon} count={1} />
        <StatusCount title="Total Borrower" icon={BorrowerIcon} count={6} />
      </FlexContainer>

      <PanelContainer mt="2.7777777777777777vh" background={panelState.currentColor}>
        {panelState.heading.map((item, key) => (
          <PannelTitle
            key={key}
            background={item.color}
            isActive={item.isActive}
            onClick={(e) => togglePanelHandler(e)}
          >
            {item.title}
          </PannelTitle>
        ))}
      </PanelContainer>
      {panelState.activeComponent}
    </Container>
  );
}
