import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Link } from "react-router-dom";
import { Background, Container, SideBar } from "./styles";
import MusicCard from "../../components/MusicCard";

const Recomendacao = ({liked}) =>{

    const {authenticated, logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }
    return (
        <Background>
            <SideBar>
                <h2>Bem vindo!</h2>
                <p>Loged: {String(authenticated)}</p>
                <button onClick={handleLogout}>Logout</button>
                <p><Link to='/music'>CURTIDAS</Link></p>
                <p><Link to='/music'>FAVORITAS</Link></p>
                <p>GENEROS</p>
                <p>ARTISTAS</p>
            </SideBar>
            <Container>
                <h1>Suas Curtidas</h1>
                {liked.map((item, index) => (
                <MusicCard key={index} index={index} name={item.name} likes={item.likes} mainartist={item.mainartist}/>
            ))}
            </Container>
        </Background>
    );
}

export default Recomendacao;