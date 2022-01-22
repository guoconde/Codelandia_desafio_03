import Header from "../Header"
import Footer from "../Footer"
import Main from "../Main"

import { ResetStyle } from "../../assets/css/Reset"
import { GlobalStyle } from "../../assets/css"

export default function App() {
    return (
        <>
            <ResetStyle />
            <GlobalStyle />

            <Header />
            <Main />
            <Footer />
        </>
    )
}