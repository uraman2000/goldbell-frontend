import React from "react";
import { Image } from "../../../../components/Image";
import noUnreadIcon from "../../../../images/ManageStaff/No-unread.svg";
import styled from "styled-components";

const Containter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: -webkit-fill-available;
`;

const Text = styled.div`
  font-size: 0.375em;
  text-align: center;
  color: #707070;
  line-height: 2.7777777777777777vh;
  b {
    color: black;
  }
`;

export default function NoUnRead() {
  return (
    <Containter>
      <Image src={noUnreadIcon} width="30.034895833333334vw" height="auto" />
      <Text>
        <b>You’re all caught up!</b> <br />
        It looks like you have no unread messages.
      </Text>
    </Containter>
  );
}
