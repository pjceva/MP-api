import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Link } from "react-router-dom";
import { Background, Container, SideBar } from "./styles";

const Recomendacao = () =>{

    const {authenticated, logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }
    return (
        <Background>
            <SideBar>
                <h2>Bem vindo, nome!</h2>
                <p>Loged: {String(authenticated)}</p>
                <button onClick={handleLogout}>Logout</button>
                <p><Link to='/music'>MUSICAS CURTIDAS</Link></p>
                <p>FAVORITOS</p>
                <p>GENEROS</p>
                <p>ARTISTAS</p>
            </SideBar>
            <Container>
                <h1>Recomendações</h1>
            </Container>
        </Background>
    );
}

export default Recomendacao;