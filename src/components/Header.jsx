import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [burgerMenu, setBurgerMenu] = React.useState(false);
  return (
    <Container>
      <a href="#hero">Alone.</a>
      <nav>
        <a href="#about">About</a>
        <a href="#stack">Experience</a>
        <a href="#offers">Services</a>
        <a href="#works">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="https://t.me/Samuraiii143">
        <button className="contactbtn">Contact me</button>
      </a>
      <MenuWrapper>
        <CustomMenu onClick={() => setBurgerMenu(true)} />
      </MenuWrapper>
      <BurgerNav show={burgerMenu}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerMenu(false)} />
        </CloseWrapper>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#stack">Experience</a>
        </li>
        <li>
          <a href="#offers">Services</a>
        </li>
        <li>
          <a href="#works">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <a href="https://t.me/Samuraiii143">
          <button>Contact me</button>
        </a>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 80px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: #17232b;
  min-width: 100%;

  @media (max-width: 1060px) {
    nav {
      display: none;
    }
    .contactbtn {
      display: none;
    }
  }

  a {
    color: white;
    background: none;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    text-decoration: none;
  }

  nav {
    a {
      padding: 0 34px;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      text-decoration: none;
      color: white;

      &:hover {
        color: #ffa97a;
      }
    }
  }
  button {
    background: #ffa97a;
    color: black;
    min-width: 135px;
    min-height: 50px;
    border-radius: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    border: none;
    cursor: pointer;
    &:hover {
      background: #17232b;
      border: 1px solid #ffa97a;
      color: white;
    }
  }
`;

const MenuWrapper = styled.div`
  display: none;

  @media (max-width: 1060px) {
    display: block;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  color: white;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #17232b;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      text-decoration: none;
      color: white;
      padding-left: 10px;
    }

    &:hover {
      background: #091223;
      border-radius: 10px;
    }
  }
  button {
    margin-top: 20px;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  color: white;
`;
