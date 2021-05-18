import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button/Button'


const Wrapper = styled.div`
    background: #2D232E;
    height: 80vh;
    position: relative;
    z-index: 1;
`
const LeftInfo = styled.div`
    background: white;
    top: 25%;
    height: 40vh;
    width: 55%;
    position: absolute;

    h3{
        text-align: center;
        margin-bottom: 1rem;
        margin-top: 1rem;
        font-size: 24px;
    }

    p{
        margin: 2rem;
        text-indent: 30px;
        letter-spacing: 0.7px;
        line-height: 1.4; 
    }
`
const RightInfo = styled.div`
    position: absolute; 
    top:15%;
    height: 60vh;
    width: 45%;
    right: 0;
   
    img{
        width: 100%;
        height: 100%;
        object-fit:cover;
        z-index: 999;
        

        @media screen and (max-width:768px){
            width: 90%;
            height: 90%;
        }
    }
`;


const Divider = ({heading,paragraphOne,buttonLabel,reverse,delay,Image3}) => {
    return (
        <Wrapper>
            	<LeftInfo>
                    <h3>{heading}</h3>
                    <p>{paragraphOne}</p>
                    <Button style={{marginLeft:"265px"}} to="/homes" primary="true">{buttonLabel}</Button>
                </LeftInfo>
                <RightInfo>
                    <img src={Image3} alt="image"/>
                </RightInfo>
        </Wrapper>
    )
}

export default Divider
