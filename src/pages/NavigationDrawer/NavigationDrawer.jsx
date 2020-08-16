import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../components/Logo";
import { NavLink } from "react-router-dom";
import { Image } from "../../components/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

let large = "20.052083333333336vw";
let small = "6.770833333333334vw";
const Container = styled.div`
  transition: all 0.2s ease;
  display: flex;
  flex-direction:row;
  /* grid-template-areas: "nav content";
  grid-template-columns: ${(props) => (props.isShrink ? small : large)} 5fr; */
  grid-gap: 2px;
`;

const SideBar = styled.section`
  background-color: white;
  transition: width 0.2s ease;
  width: ${(props) => (props.isShrink ? small : large)};
  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.16);
  margin-right: 2px;
`;

const MainContent = styled.section`
  background-color: #fdf9f4;
  width: 100vw;
  /* height: -webkit-fill-available; */
`;

const Root = styled.div`
  padding-top: 5.555555555555555vh;
  padding-left: 2.2395833333333335vw;
  padding-right: 1.7708333333333335vw;
`;

const User = styled.div`
  font-weight: bold;
  font-size: 0.542em;
  margin-top: 5.7407407407407405vh;
  ${(props) => (props.isShrink ? `visibility: hidden; opacity: 0; margin:0; height:0;` : "")}

  transition: all 0.1s ease-in-out;
`;

const NavContainer = styled.div`
  padding: 0px;
  margin-top: 5.462962962962963vh;
  display: flex;
  flex-direction: column;
`;

const AccountNavContainer = styled.div`
  padding: 0px;
  margin-bottom: 5.472vh;
  display: grid;
  // bottom: 0;
  // position: absolute;
  margin-top: 32.657vh;
  display: flex;
  flex-direction: column;

  a:last-child {
    color: #ff3c3c;
  }
`;

const NavItem = styled(NavLink)`
  list-style: none;
  float: left;
  font-size: 0.396em;
  width: -webkit-fill-available;
  text-decoration: none;
  color: #000000;
  display: grid;
  grid-template-columns: 0.3fr 1.7fr;
  grid-template-rows: 1fr;
  gap: 1px 1px;
  grid-template-areas: "icons labels";
  &:not(:first-child) {
    margin-top: 2.87vh;
  }
  &.active {
    color: #fab323;
    img {
      content: url("${(props) => props.active}");
    }
  }
`;

const Icon = styled(Image)`
  width: auto;
  grid-area: icons;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  height: ${(props) => (props.isShrink ? "3.7037037037037033vh" : "2.2037037037037037vh")};
  transition: all 0.2s ease-in-out;
`;

const Label = styled.div`
  grid-area: labels;
  opacity: ${(props) => (props.isShrink ? "0" : "100")};
  text-indent: 0.5208333333333334vw;
  /* transition: all 0.2s ease-in-out; */
`;

const CheveronLeft = styled(FontAwesomeIcon)`
  margin: auto;
`;
const ChevronContainer = styled.div`
  font-size: 0.417em;
  left: ${(props) => (props.isShrink ? "6.770833333333334vw" : "16.666666666666668vw")};
  background-color: white;
  position: absolute;
  height: 4.62962962962963vh;
  width: 1.9270833333333335vw;
  color: #707070;
  display: flex;
  cursor: pointer;
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  transition: all 0.2s ease;
  svg {
    transition: all 0.3s ease;
    transform: rotate(${(props) => (props.isShrink ? "540deg" : "")});
  }
`;

const CoverUp = styled.div`
  width: 0.5208333333333334vw;
  height: -webkit-fill-available;
  background-color: white;
  position: absolute;
  left: -5px;
`;
export default function NavigationDrawer(props) {
  const { children, navList, collapsed } = props;
  const [shrink, setShrink] = useState(false);

  const handlleShrink = () => {
    setShrink(!shrink);
  };
  return (
    <Container>
      <SideBar isShrink={shrink}>
        <Root>
          {collapsed ? (
            <ChevronContainer onClick={handlleShrink} isShrink={shrink}>
              <CoverUp />
              <CheveronLeft icon={faChevronLeft} />
            </ChevronContainer>
          ) : null}

          <Logo coloured isShrink={shrink} h="fit-content" w="100%" />

          <User isShrink={shrink}>Hi, Chloe</User>
          <NavContainer>
            {navList.top.map((item, key) => (
              <NavItem key={key} active={item.activeIcon} to={item.link} activeClassName="active">
                <Icon isShrink={shrink} src={item.icon} />
                <Label isShrink={shrink}>{item.label}</Label>
              </NavItem>
            ))}
          </NavContainer>
          <AccountNavContainer>
            {navList.bottom.map((item, key) => (
              <NavItem key={key} active={item.activeIcon} to={item.link} activeClassName="active">
                <Icon isShrink={shrink} src={item.icon} />
                <Label isShrink={shrink}>{item.label}</Label>
              </NavItem>
            ))}
          </AccountNavContainer>
        </Root>
      </SideBar>
      <MainContent>{children}</MainContent>
    </Container>
  );
}
