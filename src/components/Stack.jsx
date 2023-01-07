import React from "react";
import styled from "styled-components";

function Stack() {
  return (
    <Container id="stack">
      <div className="text-wrapper">
        <h1>My Experience</h1>
        <h2>My Abilities</h2>
      </div>
      <div className="stack-wrapper">
        <div className="stack">
          <div className="texts">
            <h1>Backend Developer</h1>
            <p>More than 3 years</p>
          </div>
          <div className="stack_tech">
            <div className="persent">
              <h1>Python</h1>
              <p>95%</p>
            </div>
            <input
              className="meter"
              type="range"
              min="0"
              max="100"
              id="r"
              step="1"
              value="95"
              disabled
            />
          </div>
          <div className="stack_tech">
            <div className="persent">
              <h1>FastAPI</h1>
              <p>95%</p>
            </div>
            <input
              className="meter"
              type="range"
              min="0"
              max="100"
              id="r"
              step="1"
              value="95"
              disabled
            />
          </div>
          <div className="stack_tech">
            <div className="persent">
              <h1>DRF</h1>
              <p>90%</p>
            </div>
            <input
              className="meter"
              type="range"
              min="0"
              max="100"
              id="r"
              step="1"
              value="90"
              disabled
            />
          </div>
        </div>

        <div className="stack">
          <div className="texts">
            <h1>Frontend Developer</h1>
            <p>More than 1 years</p>
          </div>
          <div className="stack_tech">
            <div className="persent">
              <h1>HTML</h1>
              <p>70%</p>
            </div>
            <input
              className="meter"
              type="range"
              min="0"
              max="100"
              id="r"
              step="1"
              value="70"
              disabled
            />
          </div>
          <div className="stack_tech">
            <div className="persent">
              <h1>CSS</h1>
              <p>80%</p>
            </div>
            <input
              className="meter"
              type="range"
              min="0"
              max="100"
              id="r"
              step="1"
              value="80"
              disabled
            />
          </div>
          <div className="stack_tech">
            <div className="persent">
              <h1>React</h1>
              <p>60%</p>
            </div>
            <input
              className="meter"
              type="range"
              min="0"
              max="100"
              id="r"
              step="1"
              value="60"
              disabled
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Stack;

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

  .stack-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    @media (max-width: 620px) {
      flex-direction: column;
    }
    .stack {
      min-width: 300px;
      min-height: 250px;
      background: #182228;
      margin: 0 50px;
      border-radius: 20px;
      @media (max-width: 769px) {
        margin: 0 10px;
      }
      @media (max-width: 620px) {
        margin: 20px 0;
      }
      .texts {
        margin: 22px 0 0 21px;
        h1 {
          font-style: normal;
          font-weight: 600;
          font-size: 17px;
          letter-spacing: 0.4px;
          color: #ffffff;
        }
        p {
          font-style: normal;
          font-weight: 500;
          font-size: 10px;
          letter-spacing: 0.2px;
          color: #767676;
        }
      }
      .stack_tech {
        margin: 10px 0 0 21px;
        display: flex;
        flex-direction: column;
        .persent {
          display: flex;
          justify-content: space-between;
          align-items: center;
          h1 {
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            letter-spacing: 0.4px;
            color: #ffa97a;
          }
          p {
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            letter-spacing: 0.2px;
            color: #767676;
            margin-right: 20px;
          }
        }
        .meter {
          max-width: 90%;
        }
      }
    }
  }
`;
