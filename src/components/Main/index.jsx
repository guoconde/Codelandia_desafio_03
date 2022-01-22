import styled from "styled-components"

import Cards from "./Cards"

export default function Main() {

    return (
        <DivMain>
            <Cards />
        </DivMain>
    )
}

const DivMain = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    row-gap: 65px;
    column-gap: 110px;
    justify-content: center;

    padding: 150px 0;
`