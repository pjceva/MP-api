import MusicCard from "../../components/MusicCard";
import SideBar from "../../components/SideBar";
import { Background, Container } from "./styles";


const Generos = ({genres}) =>{
    return (

        <Background>
            <SideBar/>
            <Container>
                <h1>Generos</h1>
                {genres.map((item, index) => (
                <MusicCard key={index} index={index} name={item.name} likes={item.likes} mainartist={item.mainartist}/>
            ))}
            </Container>
        </Background>

    );
}

export default Generos;