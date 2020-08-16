import React, { useState } from "react";
import { Content, Card } from "../../../../components/Card";
import { Container, HeaderContainer } from "../../../../components/Container";
import { Image } from "../../../../components/Image";
import { Table, THead, Th } from "../../../../components/Table";
import { UseDelete } from "../../../../utils/UseDelete";
import deleteIcon from "../../../../images/Table/delete-icon.svg";
import editIcon from "../../../../images/Table/edit-icon.svg";
import Checkbox from "../../../../components/Checkbox";
import { ImageButton } from "../../../../components/ImageButton";
import { TableInput } from "../SubmissionTable/TableInput";
import styled from "styled-components";
import SubmitModal from "./SubmitModal";
import DeleteConfirmation from "../../../../components/DeleteConfirmation";

const data = [
  {
    staff_name: "Chloe",
    staff_email: "asd@jkl.com",
    isAdmin: true,
    isEdit: false,
  },
  {
    staff_name: "Chloe2",
    staff_email: "asd@jkl.com",
    isAdmin: false,
    isEdit: false,
  },
  {
    staff_name: "Chloe3",
    staff_email: "asd@jkl.com",
    isAdmin: false,
    isEdit: false,
  },
  {
    staff_name: "Chloe4",
    staff_email: "asd@jkl.com",
    isAdmin: false,
    isEdit: false,
  },
  {
    staff_name: "Chloe5",
    staff_email: "asd@jkl.com",
    isAdmin: false,
    isEdit: false,
  },
];

const AddButton = styled.td`
  color: #05ccce;
  text-align: center;
  cursor: pointer;
`;

export default function ManageStaff() {
  const [state, setstate] = useState(data);
  const [submitModal, setSubmitModal] = useState(false);
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
  const addHandler = () => {
    const data = [...state];
    data.push({
      staff_name: "",
      staff_email: "",
      isAdmin: false,
      isEdit: true,
    });

    console.log(data);
    setstate(data);
  };

  const TD = (key, item, keyData, width) => {
    if (item.isEdit) {
      return (
        <td>
          <TableInput
            value={item[keyData]}
            width={width}
            onChange={(e) => {
              let oldState = [...state];
              oldState[key] = { ...item, [keyData]: e.target.value };
              setstate(oldState);
            }}
          />
        </td>
      );
    }
    return <td>{item[keyData]}</td>;
  };

  return (
    <Container mt="5.7407407407407405vh">
      <HeaderContainer>Manage staff</HeaderContainer>

      <Card mt="2.4074074074074074vh" width={"100%"} Mheight="81.48148148148148vh">
        <Content mt="4.814814814814815vh" ml="1.5885416666666667vw" mr="1.484375vw">
          <Table allBorder pt={"1.39vh"} pb={"1.7vh"}>
            <THead pb={"2.23vh"}>
              <tr>
                <Th w="12.239583333333334vw">Staff name</Th>
                <Th w="46.25vw">Staff email</Th>
                <Th w="9.114583333333334vw">Admin</Th>
                <Th></Th>
                <Th></Th>
              </tr>
            </THead>
            <tbody>
              {state.map((item, key) => (
                <tr key={key}>
                  {TD(key, item, "staff_name", "9.635416666666668vw")}
                  {TD(key, item, "staff_email", "13.541666666666668vw")}

                  <td>
                    <Checkbox
                      checked={item.isAdmin}
                      onClick={() => {
                        let oldState = [...state];
                        oldState.forEach((element) => {
                          element.isAdmin = false;
                        });
                        oldState[key] = { ...item, isAdmin: !item.isAdmin };
                        setstate(oldState);
                      }}
                    />
                  </td>
                  {item.isEdit ? (
                    <AddButton
                      colSpan={2}
                      onClick={() => {
                        let oldState = [...state];
                        oldState[key] = { ...item, isEdit: !item.isEdit };
                        setstate(oldState);
                        setSubmitModal(!submitModal);
                      }}
                    >
                      + Add
                    </AddButton>
                  ) : (
                    <>
                      <td>
                        <Image
                          width="auto"
                          height="4.518518518518518vh"
                          src={editIcon}
                          onClick={() => {
                            let oldState = [...state];
                            oldState[key] = { ...item, isEdit: !item.isEdit };
                            setstate(oldState);
                          }}
                        />
                      </td>
                      <td>
                        <Image
                          width="auto"
                          height="4.518518518518518vh"
                          src={deleteIcon}
                          onClick={() => {
                            modalHandler(key);
                          }}
                        />
                      </td>
                    </>
                  )}
                </tr>
              ))}
              <tr>
                <td colSpan="11">
                  <ImageButton onClick={(e) => addHandler()}> Add staff</ImageButton>
                </td>
              </tr>
            </tbody>
          </Table>
        </Content>
      </Card>
      {submitModal ? (
        <SubmitModal
          onClick={() => {
            setSubmitModal(!submitModal);
          }}
        />
      ) : null}

      {modal.isShow ? (
        <DeleteConfirmation
          type="staff"
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
