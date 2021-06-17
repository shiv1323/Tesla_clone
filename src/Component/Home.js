import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section
                id="model_s"
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                LeftBtnText="Custom order"
                RightBtnText="EXISTING INVENTORY"
            />
            <Section
                id="model_y"
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                LeftBtnText="Custom order"
                RightBtnText="EXISTING INVENTORY"
            />
            <Section
                id="model_3"
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                LeftBtnText="Custom order"
                RightBtnText="EXISTING INVENTORY" />
            <Section
                id="model_x"
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                LeftBtnText="Custom order"
                RightBtnText="EXISTING INVENTORY" />
            <Section
                id="solar_panel"
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                LeftBtnText="Order Now"
                RightBtnText="Learn More"
            />
            <Section
                id="solar_roof"
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                LeftBtnText="Order Now"
                RightBtnText="Learn More"
            />
            <Section
                id="accessories"
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                LeftBtnText="Shop Now"
                RightBtnText=""
            />
        </Container>
    )
}

export default Home
const Container = styled.div`
    height:100vh;

`
