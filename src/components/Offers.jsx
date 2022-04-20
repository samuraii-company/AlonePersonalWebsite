import React from 'react'
import styled from 'styled-components'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


function Offers() {

    return (
        <Container id="offers">
            <div className="text-wrapper">
                <h1>What I Offer</h1>
                <h2>My Services</h2>
            </div>
            <div className="stack-wrapper">
                <div className="stack">
                    <div className="texts">
                        <i><CheckCircleOutlineIcon sx={{fontSize:20,color:"#FFA97A"}}/></i>
                        <h1>Freelance</h1>
                    </div>
                    <h1 className="about">You want to launch your website,
                    you need a new design for your future site?
                    Contact me and we will discuss your needs and desires. </h1>
                    <button>Contact Me</button>
                </div>
                <div className="stack">
                    <div className="texts">
                        <i><CheckCircleOutlineIcon sx={{fontSize:20,color:"#FFA97A"}}/></i>
                        <h1>In Company</h1>
                    </div>
                    <h1 className="about">You are looking for a developer to join the team,
                    i can develop both the server side and the client
                    Contact me and we will discuss your needs and desires.</h1>
                    <button>Contact Me</button>
                </div>
            </div>
        </Container>
    )
}

export default Offers

const Container = styled.div`
    padding-top: 100px;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;

    .text-wrapper{
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        h1{
            font-style: normal;
            font-weight: 800;
            font-size: 30px;
            color: #FFA97A;
        }
        h2{
            margin-top: 5px;
            font-style: normal;
            font-weight: 800;
            font-size: 15px;
            color: #767676;
        }
    }
    
    .stack-wrapper{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;
        @media(max-width:620px){
            flex-direction: column;
        }
        .stack{
            min-width: 300px;
            min-height: 250px;
            background: #182228;
            margin: 0 50px;
            border-radius: 20px;
            @media(max-width:769px){
                margin: 0 10px;
            }
            @media(max-width:620px){
                margin: 20px 0;
            }
            .texts{
                margin: 22px 0 0 21px;
                display: flex;
                flex-direction:row;
                justify-content: flex-start;
                align-items: center;
                h1{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 17px;
                    letter-spacing: 0.4px;
                    color: #FFFFFF;
                    margin-left: 15px;
                }
            }
            .about{
                font-style: normal;
                font-weight: 500;
                font-size: 13px;
                letter-spacing: 0.2px;
                color: #8B8B8B;
                max-width: 230px;
                margin-left: 15px;
                margin-top: 16px;
            }
            button{
                margin-top: 60px;
                margin-left: 15px;
                min-width: 138px;
                min-height: 35px;
                border-radius: 10px;
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                border: none;
                cursor: pointer;

                background: #17232B;
                border: 1px solid #FFA97A;
                color: white;
                &:hover{
                    background:#FFA97A;
                    color: black;
                }
            }
        }
    }
`

