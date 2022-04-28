import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/LoginPage";
import MusicPage from "../pages/MusicPage";
import HomePage from "../pages/HomePage"
import { useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { AuthProvider, AuthContext } from "../contexts/auth";  

const Rotas = () =>{

    const [music, setMusic] = useState([]) 

    useEffect(()=>{
        api.get('/music/order').then((response)=>{
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
                <Route exact path="/" element= {<Private><HomePage/></Private>}/>
                <Route exact path="/music" element= {<MusicPage music={music}/>}/>
            </Routes>
        </AuthProvider>
    );
}

export default Rotas;