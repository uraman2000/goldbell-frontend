import React, { useState } from "react";
import { Container, HeaderContainer } from "../../../components/Container";
import { Card } from "../../../components/Card";
import { THead, Table, Th } from "../../../components/Table";
import { Link } from "react-router-dom";
import { Image } from "../../../components/Image";
import { UseDelete } from "../../../utils/UseDelete";
import editIcon from "../../../images/Table/edit-icon.svg";
import deleteIcon from "../../../images/Table/delete-icon.svg";
import { ImageButton } from "../../../components/ImageButton";
import { EDITOR } from "../../../utils/Links";
import DeleteConfirmation from "../../../components/DeleteConfirmation";
const initialState = [
  {
    company: "Company A",
    email: "Qwerty@asd.com",
  },
  {
    company: "Company B",
    email: "Qwerty@asd.com",
  },
  {
    company: "Company C",
    email: "Qwerty@asd.com",
  },
  {
    company: "Company D",
    email: "Qwerty@asd.com",
  },
  {
    company: "Company E",
    email: "Qwerty@asd.com",
  },
];

export default function Borrower() {
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
    <Container mt="5.7407407407407405vh">
      <HeaderContainer>Borrower</HeaderContainer>
      <Card width={"100%"} Mheight={"893px"} mt="2.4074074074074074vh">
        <Table allBorder pt={"1.39vh"} pb={"1.7vh"} mt="5.092592592592593vh" ml="1.640625vw" mr="1.484375vw">
          <THead pb={"2.23vh"}>
            <tr>
              <Th w={"200px"}>Company</Th>
              <Th w={"56.51041666666667vw"}>Admin email </Th>
              <Th w={"2.82vw"}></Th>
              <Th></Th>
            </tr>
          </THead>
          <tbody>
            <tr>
              <td colSpan="5">
                <Link
                  to={{
                    pathname: EDITOR,
                    state: { title: "Add Company" },
                  }}
                >
                  <ImageButton>Add Company</ImageButton>
                </Link>
              </td>
            </tr>
            {state.map((item, key) => (
              <tr key={key}>
                <td>{item.company}</td>
                <td>{item.admin_email}</td>
                <td>
                  <Link
                    to={{
                      pathname: EDITOR,
                      state: { title: "Edit Company", data: item },
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
          </tbody>
        </Table>
      </Card>

      {modal.isShow ? (
        <DeleteConfirmation
          type="company"
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
