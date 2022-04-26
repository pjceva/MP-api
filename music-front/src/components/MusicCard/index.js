import { Container } from "./styles";

const MusicCard = ({name, likes, mainartist}) =>{
    return (
        <Container>
        
            <p>{name}</p>
            <p>{mainartist}</p>
            <p>likes:{likes}</p>
            <input class="like" type="checkbox"></input>
            
        </Container>
    );
}

export default MusicCard;