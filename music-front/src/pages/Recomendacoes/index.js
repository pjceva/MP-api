import React from "react";

import { Background, Container } from "./styles";
import MusicCard from "../../components/MusicCard";
import SideBar from "../../components/SideBar";

const Recomendacao = ({liked}) =>{

    return (
        <Background>
            <SideBar/>

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