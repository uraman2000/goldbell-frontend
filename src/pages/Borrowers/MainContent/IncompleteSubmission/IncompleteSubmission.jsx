import React, { useState } from "react";
import { Container, HeaderContainer } from "../../../../components/Container";
import { Card } from "../../../../components/Card";
import { Table, THead, Th } from "../../../../components/Table";
import deleteIcon from "../../../../images/Table/delete-icon.svg";
import editIcon from "../../../../images/Table/edit-icon.svg";
import { Image } from "../../../../components/Image";
import { UseDelete } from "../../../../utils/UseDelete";
import { Link } from "react-router-dom";
import { INVOICE_SUBMISSION, INCOMPLETE_ITEM_DATA } from "../../../../utils/Links";
import { ImageButton } from "../../../../components/ImageButton";
import DeleteConfirmation from "../../../../components/DeleteConfirmation";

const initialState = [
  { id: 0, lastUpdated: "10/30/2020", staffName: "ABC1", totalAmount: "12,345" },
  { id: 1, lastUpdated: "12/02/2019", staffName: "ABC2", totalAmount: "12,345" },
];

export default function IncompleteSubmission() {
  const [state, setstate] = useState(initialState);

  const [modal, setModal] = useState({
    key: "",
    isShow: false,
  });

  const deleteHandler = () => {
    setModal({ key: "", isShow: !modal.isShow });
    setstate(UseDelete(state, modal.key));
  };

  const modalHandler = (key) => {
    setModal({ key: key, isShow: !modal.isShow });
  };

  return (
    <Container mt={"5.75vh"}>
      <HeaderContainer>Incomplete submission</HeaderContainer>
      <Card mt={"2.314814814814815vh"} width={"100%"} height="82.77777777777777vh">
        <Table allBorder pt={"1.39vh"} pb={"1.7vh"} mt="5.092592592592593vh" ml="1.640625vw" mr="1.484375vw">
          <THead pb={"2.23vh"}>
            <tr>
              <Th w={"8.1vw"}>Last updated</Th>
              <Th w={"52.1vw"}>Staff name</Th>
              <Th w={"8vw"}>Total amount</Th>
              <Th w={"2.82vw"}></Th>
              <Th></Th>
            </tr>
          </THead>
          <tbody>
            {state.map((item, key) => (
              <tr key={key}>
                <td>{item.lastUpdated}</td>
                <td>{item.staffName}</td>
                <td>${item.totalAmount}</td>
                <td>
                  <Link
                    to={{
                      pathname: INCOMPLETE_ITEM_DATA,
                      state: item,
                    }}
                  >
                    <Image src={editIcon} />
                  </Link>
                </td>
                <td>
                  <Image
                    src={deleteIcon}
                    onClick={() => {
                      modalHandler(key);
                    }}
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="5">
                <Link to={INVOICE_SUBMISSION}>
                  <ImageButton> Submit new invoice </ImageButton>
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>

      {modal.isShow ? (
        <DeleteConfirmation
          type="submission"
          onClose={() => {
            setModal({ ...modal, isShow: !modal.isShow });
          }}
          onConfirm={() => {
            deleteHandler();
          }}
        />
      ) : null}
    </Container>
  );
}
