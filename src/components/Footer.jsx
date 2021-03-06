import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <Container>
      <div className="social-wrapper">
        <a href="https://github.com/samuraii-company/AlonePersonalWebsite">
          <i>
            <GitHubIcon sx={{ fontSize: 40, color: "black" }} />
          </i>
        </a>
      </div>
      <nav>
        <a href="#about">About</a>
        <a href="#stack">Experience</a>
        <a href="#offers">Services</a>
        <a href="#works">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      <h2>© Alone. All right reserved </h2>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  min-height: 250px;
  min-width: 100%;
  background: #ffa97a;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 1;
  h1 {
    margin-top: 20px;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    color: black;
  }
  nav {
    margin-top: 23px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
    a {
      padding: 0 36px;
      text-decoration: none;
      color: black;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      &:hover {
        text-decoration: underline;
      }
      @media (max-width: 700px) {
        padding: 0 20px;
      }
      @media (max-width: 530px) {
        padding: 0 10px;
      }
      @media (max-width: 460px) {
        font-size: 14px;
      }
    }
  }
  .social-wrapper {
    margin-top: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      margin: 0 30px;
      cursor: pointer;
      @media (max-width: 520px) {
        margin: 0 15px;
        padding: 25px 25px;
      }
    }
  }
  h2 {
    margin-bottom: 10px;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    color: black;
  }
`;
