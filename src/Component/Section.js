import React from 'react'
import styled from 'styled-components'

import Fade from 'react-reveal/Fade';
function Section({ title, description, RightBtnText, LeftBtnText, backgroundImg, id }) {
    return (
        <Wrap bgImage={backgroundImg}>

            <Fade bottom>
                <ItemText>
                    <h1 id={id} >{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Button>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {LeftBtnText}
                        </LeftButton>
                        {RightBtnText &&
                            <RightButton>
                                {RightBtnText}
                            </RightButton>
                        }

                    </ButtonGroup>
                    <DownArrow src="./images/down-arrow.svg" />
                </Fade>
            </Button>
        </Wrap>
    )
}

export default Section
const Wrap = styled.div`
    width:100vw;
    z-index:10;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;//for vertical alignment
    align-items:center;//horizontal
    background-image:${props => `url("/images/${props.bgImage}")`}
`
const ItemText = styled.div`
padding-top:15vh;
text-align:center;
`
const Button = styled.div``
const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
@media(max-width:768px){
    flex-direction:column;

}
`
const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:#fff;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
cursor:pointer;
font-weight:600;
font-size:12px;
margin:8px;
@media(max-width:768px){
    width:433.2px;

}
`
const RightButton = styled.div`
background-color: hsla(0,0%,100%,.65);
height:40px;
width:256px;
font-weight:600;
color:#000poei;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
cursor:pointer;
font-size:12px;
margin:8px;
@media(max-width:768px){
    width:433.2px;

}
`
const DownArrow = styled.img`
height:40px;
animation:animation infinite 1.5s;
`
// 40