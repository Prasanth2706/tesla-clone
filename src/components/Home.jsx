import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import { Images } from '../images'
const Home = () => {
    return (

        <Container>
            <Section
                title='Modal S'
                description="Order Online for Touchless Delivery"
                backgroundImg={Images.modal_s}
                leftBtnText='Custom order'
                rightBtnText="Existing Inventory"
            />
            <Section
                title='Modal Y'
                description="Order Online for Touchless Delivery"
                backgroundImg={Images.modal_y}
                leftBtnText='Custom order'
                rightBtnText="Existing Inventory" />
            <Section
                title='Modal 3'
                description="Order Online for Touchless Delivery"
                backgroundImg={Images.modal_3}
                leftBtnText='Custom order'
                rightBtnText="Existing Inventory" />
            <Section
                title='Modal X'
                description="Order Online for Touchless Delivery"
                backgroundImg={Images.modal_x}
                leftBtnText='Custom order'
                rightBtnText="Existing Inventory" />
            <Section
                title='Lowest Cost Solar Panel in America'
                description="Money-back gurantee"
                backgroundImg={Images.solar_panels}
                leftBtnText='order now'
                rightBtnText="learn more" />
            <Section
                title='Solar New Roof'
                description="Solar Roof Costs Less Than a New Roof Plus Panels"
                backgroundImg={Images.solar_roof}
                leftBtnText='order now'
                rightBtnText="learn more" />
            <Section
                title='Accessories'
                description="Solar Roof Costs Less Than a New Roof Plus Panels"
                backgroundImg={Images.accessories}
                leftBtnText='order now'
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`