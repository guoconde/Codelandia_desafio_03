import styled from "styled-components"

export default function Cards() {

    const arr = [
        {
            color: '#FF6363',
            title: 'Pessego',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.'
        },
        {
            color: '#63ECFF',
            title: 'Ciano',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.'
        },
        {
            color: '#F363FF',
            title: 'Magenta',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.'
        },
        {
            color: '#63FF73',
            title: 'Verde',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.'
        },
        {
            color: '#FFDD63',
            title: 'Amarelo',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.'
        },
        {
            color: '#6663FF',
            title: 'Azul',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.'
        },
    ]

    return (
        <>
            {arr.map(a =>
                <DivCards>
                    <DivColor bgColor={a.color}></DivColor>
                    <h1>{a.title}</h1>
                    <p>{a.description}</p>
                </DivCards>

            )}
        </>
    )
}

const DivCards = styled.div`
    width: 340px;
    height: 423px;

    background-color: #FFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

    h1 {
        font-size: 24px;
        font-weight: 700;

        padding-left: 30px;
        margin: 20px 0;
    }

    p {
        padding: 0 30px;
    }
`

const DivColor = styled.div`
    width: 100%;
        height: 222px;

        background-color: ${props => props.bgColor};
`