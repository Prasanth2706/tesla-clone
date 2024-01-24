import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../../features/Car/CarSlice';
import { useSelector } from 'react-redux';

const Header = () => {
    const [burgerStatus, setburgerStatus] = useState(false);
    const [shop, setShop] = useState(false);
    const cars = useSelector(selectCars)

    return (
        <Container>
            <a href="https://www.tesla.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car, index) =>
                    <a key={index} href="#">{car}</a>
                )}
            </Menu>

            <RightMenu>
                <a onMouseEnter={() => setShop(true)}
                    onMouseLeave={() => setShop(false)} href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
            </RightMenu>
            <CustomMenu onClick={() => setburgerStatus(true)} />
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setburgerStatus(false)} />
                </CloseWrapper>
                {cars && cars.map((car, index) =>
                    <li><a key={index} href="#">{car}</a></li>
                )}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">CyberTruck</a></li>
                <li><a href="#">Roadster</a></li>
            </BurgerNav>
            {shop &&
                <Discover display={shop} onMouseEnter={() => setShop(true)}
                    onMouseLeave={() => setShop(false)}>

                    <Charging>
                        <img src='/images/accessories.jpg' alt='' />
                        <p>Charging</p>
                    </Charging>
                    <VehicleAcc>
                        <img src='/images/tesla-wheel.jpg' alt='' />
                        <p>Vehicle Accessories</p>
                    </VehicleAcc>
                    <Apparel>
                        <img src='/images/tesla-cap.jpg' alt='' />
                        <p>Apparel</p>
                    </Apparel>
                    <LifeStyle>
                        <img src='/images/bag.jpg' alt='' />
                        <p>LifeStyle</p>
                    </LifeStyle>
                </Discover>
            }
        </Container>
    )
}

export default Header


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    padding: 0 20px;
    a{
        cursor: pointer;
    }

`
const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;

    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`

display: flex;
align-items: center;


a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
}

`

const CustomMenu = styled(MenuIcon)`
cursor: pointer;

`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;

    li{
        padding:15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);

        a{
            font-weight: 600;

        }

    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Discover = styled.div`
     img {
        height: 9rem;
        width:9rem;
    }

    p {
        font-weight: 600;
        font-size: 18px;
    }
    transform: ${props => props.display ? 'translateY(0)' : 'translateY(100%)'};

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    top: 0;
    bottom: 0;
    padding: 10px;
    left: 0;
    width: 100%;
    height: 14rem;
    background: white;
    z-index: 17;
    transition: transform 1s;

`
const Charging = styled.div`

`
const VehicleAcc = styled.div`

`
const Apparel = styled.div`

`
const LifeStyle = styled.div`

`