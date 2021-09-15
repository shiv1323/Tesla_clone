import React, { useState } from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import LanguageIcon from '@material-ui/icons/Language';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/CarSlice';
import side from './side'
import { useSelector } from 'react-redux';

function Header() {
    const [burgerOpen, setburgerOpen] = useState(false);
    const cars = useSelector(selectCars)
    const x = side.map((name) => {
        return (<li > <a href="#">{name}</a></li>)
    })
    console.log(x);
    return (

        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a key={index} href="#">{car}</a>
                ))}
                <a href="#solar_roof">Solar Roof</a>
                <a href="#solar_panel">Solar panels</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
            </RightMenu>
            <CustomMenu onClick={() => setburgerOpen(true)}>
                <MenuIcon />
            </CustomMenu>
            <BurgerNav show={burgerOpen}>
                <CloseWrapper>
                    <CustomClose onClick={() => setburgerOpen(false)} />
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                    <li key={index}> <a href="#">{car}</a></li>
                ))}

                <div className="div">{x}</div>


                <li><a href="#solar_roof">Solar Roof</a></li>
                <li><a href="#">More<ExpandMoreIcon style={{ fontSize: "15px" }} /></a></li>
                <li><LanguageIcon style={{ fontSize: "16px" }} /><a href="#">United States</a></li>
                <li><a href="#">English</a></li>

            </BurgerNav>
        </Container >
    )
}

export default Header
const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
padding:0 20px;
justify-content:space-between;
top:0;
left:0;
right:0;
z-index:1;
`
const Menu = styled.div`
display:flex;
align-items:center;
flex:1;
justify-content:center;
a{
    font-weight:500;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:no-wrap;
}
@media(max-width:768px){
    display:none;
}
`
const RightMenu = styled.div`
display:flex;
align-items:center;
a{
    font-weight:500;
    text-transform:uppercase;
    margin:10px;
}
@media(max-width:768px){
    display:none;
}
`

const CustomMenu = styled.div`
cursor:pointer;

`
const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background-color:#fff;
width:300px;
display:flex;
flex-direction:column;
padding:20px;
margin-left:20px;
text-align:start;
    z-index: 16;
    height:100vh;
    transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition:transform 0.2s;
li{
    padding:5px 0;
    a{
        font-weight:600px;
    }
}
@media(max-width:768px){
    width:450px;

}
`
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`
const CustomClose = styled(CloseIcon)`
cursor:pointer;`