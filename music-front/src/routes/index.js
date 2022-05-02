import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/LoginPage";
import MusicPage from "../pages/MusicPage";
import { useEffect, useState, useContext } from "react";
import { api } from "../services/api";
import Recomendacao from "../pages/Recomendacoes";
import { AuthProvider, AuthContext } from "../contexts/auth";  
import Artistas from "../pages/Artistas";
import Generos from "../pages/Genre";
import Recomendation from "../pages/Recomendation";


const Rotas = () =>{

    const userid = localStorage.getItem("id")
    console.log(userid)

    const [music, setMusic] = useState([]) 

    useEffect(()=>{
        api.get('/api/v1/music/order').then((response)=>{
            setMusic(response.data);
        })
    }, [])

    const [liked, setLiked] = useState([]) 

    useEffect(()=>{
        api.get(`/api/v1/music/favorites/${userid}`).then((response)=>{
            setLiked(response.data);
        })
    }, [])

    const [artists, setArtist] = useState([]) 

    useEffect(()=>{
        api.get(`/api/v1/music/artist`).then((response)=>{
            setArtist(response.data);
        })
    }, [])

    const [genres, setGenre] = useState([]) 

    useEffect(()=>{
        api.get(`/api/v1/music/genre`).then((response)=>{
            setGenre(response.data);
        })
    }, [])
    const [recomends, setRecomends] = useState([]) 

    useEffect(()=>{
        api.get(`/api/v1/music/recomendacao/${userid}`).then((response)=>{
            setRecomends(response.data);
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
                <Route exact path="/" element= {<Private><Recomendacao liked={liked}/></Private>}/>
                <Route exact path="/music" element= {<MusicPage music={music}/>}/>
                <Route exact path="/artistas" element= {<Private><Artistas artists={artists}/></Private>}/>
                <Route exact path="/genres" element= {<Private><Generos genres={genres}/></Private>}/>
                <Route exact path="/recomendation" element= {<Private><Recomendation recomends={recomends}/></Private>}/>
            </Routes>
        </AuthProvider>
    );
}

export default Rotas;