import { Route, Routes } from "react-router-dom";
import Login from "../pages/LoginPage";
import MusicPage from "../pages/MusicPage";
import { useEffect, useState } from "react";
import { api } from "../services/api";


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

        </Routes>
    );
}

export default Rotas;