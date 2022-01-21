import Header from "../Header"
import Footer from "../Footer"

import { ResetStyle } from "../../assets/css/Reset"
import { GlobalStyle } from "../../assets/css"

export default function App() {
    return (
        <>
            <ResetStyle />
            <GlobalStyle />

            <Header />
            <h1>Estou Aqui</h1>
            <Footer />
        </>
    )
}