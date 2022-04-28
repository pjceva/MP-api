import { Link } from "react-router-dom";
import { Background, Container, SideBar } from "./styles";

const Recomendacao = () =>{
    return (
        <Background>
            <SideBar>
                <h2>Bem vindo, nome!</h2>
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