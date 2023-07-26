import styled from "styled-components";
import React from "react";
import WebIcon from "@mui/icons-material/Web";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloudDoneIcon from '@mui/icons-material/CloudDone';

function RecentWorks() {
  function web_works() {
    const web = document.getElementById("web");
    const backend = document.getElementById("backend");
    const bots = document.getElementById("bots");
    web.style.display = "grid";
    bots.style.display = "none";
    backend.style.display = "none";
  }

  function backend_works() {
    const web = document.getElementById("web");
    const backend = document.getElementById("backend");
    const bots = document.getElementById("bots");
    backend.style.display = "grid";
    web.style.display = "none";
    bots.style.display = "none";
  }

  function bots_works() {
    const web = document.getElementById("web");
    const backend = document.getElementById("backend");
    const bots = document.getElementById("bots");
    web.style.display = "none";
    bots.style.display = "grid";
    backend.style.display = "none";

  }

  return (
    <Container id="works">
      <div className="text-wrapper">
        <h1>Recent Works</h1>
        <h2>My Portfolio</h2>
      </div>
      <div className="btn-wrapper">
        <button onClick={() => web_works()}>Frontend</button>
        <button onClick={() => backend_works()}>Backend</button>
        <button onClick={() => bots_works()}>Other</button>
      </div>
      <div className="works-wrapper-1" id="web">
        <div className="work">
          <i>
            <WebIcon sx={{ fontSize: 50, color: "#FFA97A" }} />
          </i>
          <h1>Factory website</h1>
          <a href="http://185.43.4.205">
            <button>View</button>
          </a>
        </div>
        <div className="work">
          <i>
            <WebIcon sx={{ fontSize: 50, color: "#FFA97A" }} />
          </i>
          <h1>Tour Travel website</h1>
          <a href="https://bear-angle.ru/">
            <button>View</button>
          </a>
        </div>
        <div className="work">
          <i>
            <WebIcon sx={{ fontSize: 50, color: "#FFA97A" }} />
          </i>
          <h1>Clothing constructor</h1>
          <a href="https://outerkit.shop">
            <button>View</button>
          </a>
        </div>
      </div>
      <div className="works-wrapper-2" id="backend">
        <div className="work">
          <i>
            <CloudDoneIcon sx={{ fontSize: 50, color: "#FFA97A" }} />
          </i>
          <h1>Blog API</h1>
          <a
            className="git"
            href="https://github.com/samuraii-company/BlogProject"
          >
            <i>
              <GitHubIcon sx={{ fontSize: 40, color: "#FFA97A" }} />
            </i>
          </a>
        </div>
        <div className="work">
          <i>
            <CloudDoneIcon sx={{ fontSize: 50, color: "#FFA97A" }} />
          </i>
          <h1>Ecommerce API</h1>
          <a
            className="git"
            href="https://github.com/samuraii-company/EcommerceAPI"
          >
            <i>
              <GitHubIcon sx={{ fontSize: 40, color: "#FFA97A" }} />
            </i>
          </a>
        </div>
        <div className="work">
          <i>
            <CloudDoneIcon sx={{ fontSize: 50, color: "#FFA97A" }} />
          </i>
          <h1>Coffee House API</h1>
          <a
            className="git"
            href="https://github.com/samuraii-company/Coffee_Project_backend"
          >
            <i>
              <GitHubIcon sx={{ fontSize: 40, color: "#FFA97A" }} />
            </i>
          </a>
        </div>
        <div className="work">
          <i>
            <CloudDoneIcon sx={{ fontSize: 50, color: "#FFA97A" }} />
          </i>
          <h1>School API</h1>
          <a
            className="git"
            href="https://github.com/samuraii-company/SchoolAPI"
          >
            <i>
              <GitHubIcon sx={{ fontSize: 40, color: "#FFA97A" }} />
            </i>
          </a>
        </div>
      </div>

      <div className="works-wrapper-3" id="bots">
      <div className="work">
          <i>
            <WebIcon sx={{ fontSize: 50, color: "#FFA97A" }} />
          </i>
          <h1>Password Generator</h1>
          <a
            className="git"
            href="https://github.com/samuraii-company/PasswordGenerator"
          >
            <i>
              <GitHubIcon sx={{ fontSize: 40, color: "#FFA97A" }} />
            </i>
          </a>
        </div>
        <div className="work">
          <i>
            <SmartToyIcon sx={{ fontSize: 50, color: "#FFA97A" }} />
          </i>
          <h1>Bot Moderator</h1>
          <a
            className="git"
            href="https://github.com/samuraii-company/ChatModeratorbot"
          >
            <i>
              <GitHubIcon sx={{ fontSize: 40, color: "#FFA97A" }} />
            </i>
          </a>
        </div>
        <div className="work">
          <i>
            <SmartToyIcon sx={{ fontSize: 50, color: "#FFA97A" }} />
          </i>
          <h1>Bot assistant</h1>
          <a
            className="git"
            href="https://github.com/samuraii-company/Telegram-assistant"
          >
            <i>
              <GitHubIcon sx={{ fontSize: 40, color: "#FFA97A" }} />
            </i>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default RecentWorks;

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
  .btn-wrapper {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      min-width: 100px;
      min-height: 35px;
      background: #ffa97a;
      color: black;
      border-radius: 10px;
      margin: 0 20px;
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
      border: none;
      cursor: pointer;
      @media (max-width:450px){
        margin: 0 10px;
      }
      &:hover {
        background: #17232b;
        color: white;
        border: 1px solid #ffa97a;
      }
    }
  }
  .works-wrapper-1 {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 620px) {
      grid-template-columns: 1fr;
    }
    .work {
      display: flex;
      padding: 20px 0;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      min-width: 250px;
      min-height: 276px;
      background: #182228;
      margin: 0 20px;
      border-radius: 10px;
      @media (max-width: 1200px) {
        margin: 20px;
      }
      @media (max-width: 620px) {
        margin-top: 30px;
      }
      h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        letter-spacing: 0.4px;
        color: #ffffff;
      }
      button {
        margin-top: 60px;
        min-width: 138px;
        min-height: 35px;
        border-radius: 10px;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        border: none;
        cursor: pointer;

        background: #17232b;
        border: 1px solid #ffa97a;
        color: white;
        &:hover {
          background: #ffa97a;
          color: black;
        }
      }
    }
  }
  .works-wrapper-2 {
    margin-top: 30px;
    display: none;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 620px) {
      grid-template-columns: 1fr;
    }
    .work {
      display: flex;
      padding: 20px 0;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      min-width: 250px;
      min-height: 250px;
      background: #182228;
      margin: 0 20px;
      border-radius: 10px;
      @media (max-width: 1200px) {
        margin: 20px;
      }
      @media (max-width: 620px) {
        margin-top: 30px;
      }
      h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        letter-spacing: 0.4px;
        color: #ffffff;
      }
      .git {
        margin-top: 40px;
        cursor: pointer;
      }
    }
  }
  .works-wrapper-3 {
    margin-top: 30px;
    display: none;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 620px) {
      grid-template-columns: 1fr;
    }
    .work {
      display: flex;
      padding: 20px 0;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      min-width: 250px;
      min-height: 250px;
      background: #182228;
      margin: 0 20px;
      border-radius: 10px;
      @media (max-width: 1200px) {
        margin: 20px;
      }
      @media (max-width: 620px) {
        margin-top: 30px;
      }
      h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        letter-spacing: 0.4px;
        color: #ffffff;
      }
      .git {
        margin-top: 40px;
        cursor: pointer;
      }
    }
  }
`;
