import MusicCard from "../../components/MusicCard";
import { Container } from "./styles";

const MusicPage = ({music}) => {

    return (
        <Container>
            <h1>Recomendações</h1>
            {music.map((item, index) => (
                <MusicCard key={index} index={index} name={item.name} likes={item.likes} mainartist={item.mainartist}/>
            ))}
            
        </Container>
    );
}

export default MusicPage;