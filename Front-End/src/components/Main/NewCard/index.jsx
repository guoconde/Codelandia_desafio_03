import styled from "styled-components"

export default function NewCards({ setNewCard }) {
    return (
        <DivNewCard>
            <Form >
                <label>Escolha uma cor:</label>
                <input type="color" name="color" />
                <input type="text" name="color_name" placeholder="Nome da cor:" />
                <input type="text" name="color_description" placeholder="Descrição da cor:" />
                <input type="submit" value="Enviar" />
                <input type="submit" onClick={() => setNewCard(false)} value="Cancelar" />
            </Form>
        </DivNewCard>
    )
}

const DivNewCard = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

    input[type=color] {
        all: unset;

        height: 80px;
        border: none;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;

    padding: 30px;
`