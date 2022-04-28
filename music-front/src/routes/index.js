import { Route, Routes } from "react-router-dom";
import Login from "../pages/LoginPage";
import MusicPage from "../pages/MusicPage";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import Recomendacao from "../pages/Recomendacoes";


const Rotas = () =>{

    const [music, setMusic] = useState([]) 

    useEffect(()=>{
        api.get('/music/order').then((response)=>{
            setMusic(response.data)
        })
    }, [])

    return (
        <Routes>
            <Route exact path="/" element= {<Login/>}/>
            <Route exact path="/music" element= {<MusicPage music={music}/>}/>
            <Route exact path="/recomendacao" element= {<Recomendacao/>}/>

        </Routes>
    );
}

export default Rotas;