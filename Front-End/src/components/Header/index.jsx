import styled from 'styled-components'
import Logo from '../../assets/images/logo.png'

export default function Header() {
    return (
        <DivHeader>
            <div className='left-group'>
                <div>Meus Cards!</div>
                <p>É assim em tudo na vida. É assim com a chegada da morte, com os relacionamentos e também com os negócios.</p>
                <button>Adicionar cartão</button>
            </div>
                <img src={Logo} alt="Logo" />
        </DivHeader>
    )
}

const DivHeader = styled.div`
    width: 100%;
    height: 560px;

    background-color: #D7D4FF;

    display: flex;
    align-items: center;
    justify-content: space-around;

    .left-group {
        width: 390px;

        div {
            margin-bottom: 20px;
        }

        button {
            width: 220px;

            text-align: center;

            margin-top: 45px;
        }
    }

    img {
        max-width: 500px;
        max-height: 360px;
    }
`