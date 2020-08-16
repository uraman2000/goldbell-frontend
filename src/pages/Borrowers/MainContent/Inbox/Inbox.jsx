import React, { useState } from "react";
import { Container, HeaderContainer } from "../../../../components/Container";
import { Card, Content } from "../../../../components/Card";
import styled from "styled-components";
import TrashIcon from "../../../../images/Inbox/trash.svg";
import InboxCheckBox from "./InboxCheckBox";
import { UseDeleteBulk } from "../../../../utils/UseDelete";
import NoUnRead from "./NoUnRead";

const HeadContent = styled.div`
  background-color: #f8f8f8;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  height: 7.4074074074074066vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #ff3c3c;
  font-size: 0.333em;
  cursor: pointer;
  height: fit-content;
  background-image: url(${TrashIcon});
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  text-indent: 1.3020833333333335vw;
  vertical-align: middle;
  :focus {
    outline: none;
  }
  margin-top: 2.5925925925925926vh;
  margin-right: 1.4583333333333335vw;
  font-weight: bold;
`;

const Mail = styled.div`
  margin-top: 4.0740740740740735vh;
  padding-bottom: 2.5925925925925926vh;
  :not(:last-child) {
    border-bottom: 1px solid #eff0f2;
  }
`;
const Subject = styled.div`
  font-size: 0.375em;
  font-weight: bold;
  margin-top: 2.685185185185185vh;
  margin-left: 2.5520833333333335vw;
`;
const Message = styled.div`
  font-size: 0.375em;
  line-height: 2.7777777777777777vh;
  margin-top: 0.18518518518518517vh;
  margin-left: 2.5520833333333335vw;
`;

const initialState = [
  {
    isDelete: false,
    date: "07/30/2016",
    subject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    message: ` Sed pulvinar magna sem, id tincidunt felis facilisis eu. Praesent arcu eros, pellentesque eu odio a,
              faucibus tincidunt nulla. Praesent in ligula a risus auctor finibus in vitae ipsum. Sed vitae ligula
              at lacus viverra dapibus at ac nisl. Maecenas a ligula mauris. Sed dapibus quam ex, non iaculis
              tortor rhoncus id.`,
  },
  {
    isDelete: false,
    date: "07/30/2017",
    subject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    message: ` Sed pulvinar magna sem, id tincidunt felis facilisis eu. Praesent arcu eros, pellentesque eu odio a,
              faucibus tincidunt nulla. Praesent in ligula a risus auctor finibus in vitae ipsum. Sed vitae ligula
              at lacus viverra dapibus at ac nisl. Maecenas a ligula mauris. Sed dapibus quam ex, non iaculis
              tortor rhoncus id.`,
  },
  {
    isDelete: false,
    date: "07/30/2018",
    subject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    message: ` Sed pulvinar magna sem, id tincidunt felis facilisis eu. Praesent arcu eros, pellentesque eu odio a,
              faucibus tincidunt nulla. Praesent in ligula a risus auctor finibus in vitae ipsum. Sed vitae ligula
              at lacus viverra dapibus at ac nisl. Maecenas a ligula mauris. Sed dapibus quam ex, non iaculis
              tortor rhoncus id.`,
  },
  {
    isDelete: false,
    date: "07/30/2019",
    subject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    message: ` Sed pulvinar magna sem, id tincidunt felis facilisis eu. Praesent arcu eros, pellentesque eu odio a,
              faucibus tincidunt nulla. Praesent in ligula a risus auctor finibus in vitae ipsum. Sed vitae ligula
              at lacus viverra dapibus at ac nisl. Maecenas a ligula mauris. Sed dapibus quam ex, non iaculis
              tortor rhoncus id.`,
  },
];
export default function Inbox() {
  const [state, setstate] = useState(initialState);
  const handleDelete = () => {
    setstate(UseDeleteBulk(state, "isDelete"));
  };

  const handleClickAll = (e) => {
    const isChecked = e.target.checked;
    const stateTemp = state.map((item) => ({
      ...item,
      isDelete: isChecked,
    }));

    setstate(stateTemp);
    console.log(state);
  };
  return (
    <Container mt="5.7407407407407405vh">
      <HeaderContainer>Inbox</HeaderContainer>

      <Card mt="2.4074074074074074vh" width={"100%"} Mheight="81.48148148148148vh">
        {state.length === 0 ? (
          <NoUnRead />
        ) : (
          <>
            <HeadContent>
              <InboxCheckBox mt="1.4583333333333335vw" ml="4.351851851851851vh" onClick={(e) => handleClickAll(e)} />
              <DeleteButton
                onClick={() => {
                  handleDelete();
                }}
              >
                Delete
              </DeleteButton>
            </HeadContent>
            <Content ml="1.5625vw" mr="1.484375vw">
              {state.map((item, key) => (
                <Mail key={key}>
                  <InboxCheckBox
                    checked={item.isDelete}
                    ml="0.8854166666666667vw"
                    label={item.date}
                    onClick={(e) => {
                      let oldState = [...state];
                      oldState[key] = {
                        ...item,
                        isDelete: !item.isDelete,
                      };
                      setstate(oldState);
                    }}
                  />
                  <Subject>{item.subject}</Subject>
                  <Message>{item.message}</Message>
                </Mail>
              ))}
            </Content>
          </>
        )}
      </Card>
    </Container>
  );
}
