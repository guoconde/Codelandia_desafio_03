import styled from "styled-components"

export default function Footer() {
    return (
        <DivFooter>
            <div>Entre em contato</div>
            <form>
                <input type="text" name="nome" placeholder="Nome"/>
                <input type="email" name="email" placeholder="Email"/>
                <input type="tel" name="telefone" placeholder="Telefone"/>
                <textarea name="Mensagem" cols="30" rows="3" placeholder="Mensagem..."></textarea>
            </form>
            <button>Enviar mensagem</button>
        </DivFooter>
    )
}

const DivFooter = styled.div`
    width: 100%;
    height: 750px;

    background-color: #D7D4FF;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 85px;

    div {
        font-size: 32px;
        margin-bottom: 60px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;

        margin-bottom: 30px;
    }

    button {
        width: 470px;
        text-align: center;
    }
`