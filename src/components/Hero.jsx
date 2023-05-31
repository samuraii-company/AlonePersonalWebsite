import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Hero() {
  return (
    <Container id="hero">
      <div className="wrapper">
        <div className="hero_text">
          <h1>Hello, I'm</h1>
          <h2>Nikita Bataev</h2>
          <h3>Full-Stack Developer</h3>
        </div>
        <div className="social-wrapper">
          <a href="https://github.com/samuraii-company">
            <i>
              <GitHubIcon sx={{ fontSize: 30, color: "white" }} />
            </i>
          </a>
          <a href="https://t.me/samuraii143">
            <i>
              <TelegramIcon sx={{ fontSize: 30, color: "white" }} />
            </i>
          </a>
          <a href="https://www.linkedin.com/in/just-alone/">
            <i>
              <LinkedInIcon sx={{ fontSize: 30, color: "white" }} />
            </i>
          </a>
        </div>
        <div className="image-wrapper">
          <img src="images/main.webp" alt="" />
        </div>
      </div>
    </Container>
  );
}

export default Hero;

const Container = styled.div`
  padding-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .wrapper {
    .hero_text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 17px;
        letter-spacing: 0.4px;
        color: #ffffff;
      }
      h2 {
        margin-top: 10px;
        font-style: normal;
        font-weight: 800;
        font-size: 40px;
        letter-spacing: 2.2px;
        color: #ffffff;
      }
      h3 {
        margin-top: 10px;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.6px;
        color: #ffa97a;
      }
    }
    .social-wrapper {
      margin-top: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      i {
        padding: 0 10px;
        cursor: pointer;
      }
    }
    .image-wrapper {
      margin-top: 26px;
      position: relative;
      width: 275px;
      height: 275px;
      background: #e9a886;
      border-top-left-radius: 70px;
      border-top-right-radius: 70px;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      img {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
`;
