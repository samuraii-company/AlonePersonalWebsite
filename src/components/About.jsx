import React from 'react'
import styled from 'styled-components'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TaskIcon from '@mui/icons-material/Task';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Experience from '../components/Experience'


function About() {
  return (
    <Container>
        <div className="text-wrapper">
            <h1>About me</h1>
            <h2>My Intro</h2>
        </div>
        <div className="about">
            <div className="img-wrapper">
                <img src="images/about.webp" alt="" />
            </div>
            <div className="rigth-side">
                <h1>Full-Stack developer,
                with extensive knowledge and years of experience,
                working in web technologies</h1>
                <div className="exp-wrapper">
                    <Experience
                        title="Experience"
                        about="3+ years"
                        icon={<BusinessCenterIcon sx={{color:"#FFA97A"}}/>}
                    />
                    <Experience
                        title="Projects"
                        about="50+"
                        icon={<TaskIcon sx={{color:"#FFA97A"}}/>}
                    />
                    <Experience
                        title="Companys"
                        about="2+"
                        icon={<ApartmentIcon sx={{color:"#FFA97A"}}/>}
                    />
                </div>
                <button>Contact Me</button>
            </div>
        </div>
    </Container>
  )
}

export default About

const Container = styled.div`
    margin-top: 150px;
    background: #111A20;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .text-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h1{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 800;
            font-size: 30px;
            color: #FFA97A;
        }
        h2{
            padding-top: 5px;
            font-style: normal;
            font-weight: 800;
            font-size: 15px;
            color: #767676;
        }
    }
    .about{
        margin-top: 70px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        @media(max-width: 900px) {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .img-wrapper{
            position: relative;
            background:#D7A58C;
            width: 275px;
            height: 275px;
            border-radius: 50px;
            img{
                position: absolute;
                bottom: 0;
                left:0;
                right: 0;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }
        }
        .rigth-side{
            display: flex;
            flex-direction: column;
            margin-left: 100px;

            @media(max-width: 900px) {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 30px 0;
            }

            h1{
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                letter-spacing: 0.2px;
                color: #959595;
                max-width: 400px;
                @media(max-width: 470px) {
                    max-width: 350px;
                }
            }
            .exp-wrapper{
                margin-top: 60px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                .exp{
                    display: flex;
                    justify-content:center;
                    flex-direction: column;
                    align-items: center;
                    min-width: 130px;
                    min-height: 100px;
                    background: #151F25;
                    border-radius: 10px;
                    margin: 0 20px;

                    @media(max-width: 470px) {
                        margin: 0 5px;
                        min-width: 110px;
                    }

                    i{
                        margin-top: 10px;
                    }
                    h1{
                        font-style: normal;
                        font-weight: 700;
                        font-size: 14px;
                        letter-spacing: 0.6px;
                        color: #FFFFFF;
                        
                    }
                    h2{
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 10px;
                        letter-spacing: 0.6px;
                        color: #959595;

                    }
                }
            }
            button{
                margin-top: 60px;
                max-width: 145px;
                background:#FFA97A;
                color: black;
                min-width: 135px;
                min-height: 50px;
                border-radius: 10px;
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                border: none;
                cursor: pointer;
                &:hover{
                    background: #17232B;
                    border: 1px solid #FFA97A;
                    color: white;
                }
            }
        }
    }
`