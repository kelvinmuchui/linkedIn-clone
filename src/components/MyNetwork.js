import React from 'react'
import styled from 'styled-components'
import NetworkMain from './NetworkMain'
import NetworkSidebar from './NetworkSidebar'

function MyNetwork() {
    return (
        <Container>
            <Layout>
                <NetworkSidebar/>
                <NetworkMain/>
            </Layout>
        </Container>
    )
}
const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
`
const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main";
    grid-template-columns: minmax(0,0.5fr) minmax(0,1fr);    column-gap: 25px;
    row-gap: 25px;

    margin: 20px 0;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
`
export default MyNetwork
