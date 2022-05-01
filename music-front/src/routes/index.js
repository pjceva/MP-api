import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/LoginPage";
import MusicPage from "../pages/MusicPage";
import HomePage from "../pages/HomePage"
import { useContext, useEffect, useState } from "react";
import { api } from "../services/api";
AutenticaUser
import { AuthProvider, AuthContext } from "../contexts/auth";  

import Recomendacao from "../pages/Recomendacoes";

main

const Rotas = () =>{

    const [music, setMusic] = useState([]) 

    useEffect(()=>{
        api.get('/music').then((response)=>{
            setMusic(response.data);
        })
    }, [])

AutenticaUser
    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading) {
            return <div className="loading">Carregando...</div>
        }

    return (
        <Routes>
            <Route exact path="/" element= {<Login/>}/>
            <Route exact path="/music" element= {<MusicPage music={music}/>}/>
            <Route exact path="/recomendacao" element= {<Recomendacao/>}/>
main

        if(!authenticated) {
            return <Navigate to="/login"/>;
        }

        return children;
    }

    return (
        <AuthProvider>
            <Routes>
                <Route exact path="/login" element= {<Login/>}/>
                <Route exact path="/" element= {<Private><HomePage/></Private>}/>
                <Route exact path="/music" element= {<MusicPage music={music}/>}/>
            </Routes>
        </AuthProvider>
    );
}

export default Rotas;