import MusicCard from "../../components/MusicCard";
import SideBar from "../../components/SideBar";
import { Container } from "../LoginPage/styles";
import { Background } from "./styles";

const MusicPage = ({music}) => {

    return (
        <Background>
        <SideBar/>
        <Container>
            <h1>Recomendações</h1>
            {music.map((item, index) => (
                <MusicCard key={index} index={index} name={item.name} likes={item.likes} mainartist={item.mainartist}/>
            ))}
            
        </Container>
        </Background>
    );
}

export default MusicPage;