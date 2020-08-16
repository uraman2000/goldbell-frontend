import React from "react";
import styled from "styled-components";
import { Card } from "../../../../components/Card";
import { Image } from "../../../../components/Image";
import { useHistory } from "react-router-dom";
import { INVOICE_ACCOUNT, INVOICE_UPLOAD } from "../../../../utils/Links";

const Title = styled.div`
  font-size: 0.375em;
`;
const CustomCard = styled(Card)`
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  cursor: pointer;
`;

const UploadManuallly = styled.div`
  background-color: #fab323;
  height: 100%;
  font-size: 0.583em;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
  display: flex;
  color: black;
  div {
    margin: auto;
  }
`;

export default function AccountCard(props) {
  let { img, title } = props;
  const history = useHistory();
  const handleSubmit = () => {
    if (!img) {
      history.push(INVOICE_UPLOAD);
      return;
    }
    history.push({
      pathname: INVOICE_ACCOUNT,
      state: { title: title, img: img },
    });
  };
  if (!img && !title) {
    title = "Do not have Zero or QuickBook account?";
  }

  const content = (img) => {
    if (img) {
      return <Image src={img} />;
    }
    return (
      <UploadManuallly>
        <div>
          UPLOAD
          <br /> MANUALLY
        </div>
      </UploadManuallly>
    );
  };

  return (
    <div>
      <Title>{title}</Title>
      <CustomCard
        width="16.927083333333336vw"
        height="13.888888888888888vh"
        mt="0.9259259259259258vh"
        onClick={() => {
          handleSubmit();
        }}
      >
        {content(img)}
      </CustomCard>
    </div>
  );
}
