import React from 'react'
import styled from 'styled-components'
import Section from './Section'
const Home = () => {
    return (

        <Container>
            <Section
                title='Modal S'
                description="Order Online for Touchless Delivery"
                backgroundImg='model-s.jpg'
                leftBtnText='Custom order'
                rightBtnText="Existing Inventory"
            />
            <Section
                title='Modal Y'
                description="Order Online for Touchless Delivery"
                backgroundImg='model-y.jpg'
                leftBtnText='Custom order'
                rightBtnText="Existing Inventory" />
            <Section
                title='Modal 3'
                description="Order Online for Touchless Delivery"
                backgroundImg='model-3.jpg'
                leftBtnText='Custom order'
                rightBtnText="Existing Inventory" />
            <Section
                title='Modal X'
                description="Order Online for Touchless Delivery"
                backgroundImg='model-x.jpg'
                leftBtnText='Custom order'
                rightBtnText="Existing Inventory" />
            <Section
                title='Lowest Cost Solar Panel in America'
                description="Money-back gurantee"
                backgroundImg='solar-panel.jpg'
                leftBtnText='order now'
                rightBtnText="learn more" />
            <Section
                title='Solar New Roof'
                description="Solar Roof Costs Less Than a New Roof Plus Panels"
                backgroundImg='solar-roof.jpg'
                leftBtnText='order now'
                rightBtnText="learn more" />
            <Section
                title='Accessories'
                description="Solar Roof Costs Less Than a New Roof Plus Panels"
                backgroundImg='accessories.jpg'
                leftBtnText='order now'
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`