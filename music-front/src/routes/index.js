import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/LoginPage";
import MusicPage from "../pages/MusicPage";
import { useEffect, useState, useContext } from "react";
import { api } from "../services/api";
import Recomendacao from "../pages/Recomendacoes";
import { AuthProvider, AuthContext } from "../contexts/auth";  


const Rotas = () =>{

    const [music, setMusic] = useState([]) 

    useEffect(()=>{
        api.get('/music').then((response)=>{
            setMusic(response.data);
        })
    }, [])

    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading) {
            return <div className="loading">Carregando...</div>
        }
        if(!authenticated) {
            return <Navigate to="/login"/>;
        }

        return children;
    }

    return (
        <AuthProvider>
            <Routes>
                <Route exact path="/login" element= {<Login/>}/>
                <Route exact path="/" element= {<Private><Recomendacao/></Private>}/>
                <Route exact path="/music" element= {<MusicPage music={music}/>}/>
            </Routes>
        </AuthProvider>
    );
}

export default Rotas;