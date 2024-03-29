import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <Container id="contact">
      <div className="text-wrapper">
        <h1>Contact me</h1>
        <h2>get in touch</h2>
      </div>
      <div className="social-wrapper">
        <a href="https://t.me/samuraii143">
          <i>
            <TelegramIcon sx={{ fontSize: 40, color: "#FFA97A" }} />
          </i>
        </a>
        <a href="https://github.com/samuraii-company">
          <i>
            <GitHubIcon sx={{ fontSize: 40, color: "#FFA97A" }} />
          </i>
        </a>
        <a href="https://www.linkedin.com/in/just-alone/">
          <i>
            <LinkedInIcon sx={{ fontSize: 40, color: "#FFA97A" }} />
          </i>
        </a>
      </div>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 800;
      font-size: 30px;
      color: #ffa97a;
    }
    h2 {
      margin-top: 5px;
      font-style: normal;
      font-weight: 800;
      font-size: 15px;
      color: #767676;
    }
  }
  .social-wrapper {
    margin-top: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
    a {
      padding: 30px 30px;
      margin: 0 50px;
      background: #182228;
      border-radius: 30px;
      cursor: pointer;
      &:hover {
        background: #17232b;
      }
      @media (max-width: 520px) {
        margin: 0 15px;
        padding: 25px 25px;
      }
    }
  }
`;
