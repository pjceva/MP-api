import MusicCard from "../../components/MusicCard";
import SideBar from "../../components/SideBar";
import { Background, Container } from "./styles";


const Recomendation = ({recomends}) =>{
    return (

        <Background>
            <SideBar/>
            <Container>
                <h1>Artistas</h1>
                {recomends.map((item, index) => (
                <MusicCard key={index} index={index} name={item.name} likes={item.likes} mainartist={item.mainartist}/>
            ))}
            </Container>
        </Background>

    );
}

export default Recomendation;