import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #F9F9F9;
    }

    p {
        font-family: Lato;
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
    }

    div {
        font-family: Merriweather;
        font-size: 36px;
        font-weight: 400;
        line-height: 47px;
        color: #2b2b2b;
    }
    
    input,
    textarea {
        all: unset;
        
        box-sizing: border-box;

        width: 470px;

        padding: 20px 25px;

        border-radius: 6px;
        background-color: #F9F9F9;
        color: #2b2b2b;

        font-family: Lato;
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;

        ::placeholder {
            color: rgba(110, 114, 117, 0.74);
        }
    }

    button {
        all: unset;
        
        height: 50px;

        background-color: #6C63FF;
        box-shadow: 0px 5px 5px rgba(23, 23, 23, 0.1);
        border-radius: 5px;
        
        font-family: Lato;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        color: #FFF;
        
        cursor: pointer;

        :active {
            background-color: #4037dd;
        }
    }
`