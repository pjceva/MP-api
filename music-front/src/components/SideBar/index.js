import { AuthContext } from "../../contexts/auth";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import { useContext } from "react";

const SideBar = () =>{

    const {authenticated, logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    return (
        <Container>
            <h2>Bem vindo!</h2>
            <p>Loged: {String(authenticated)}</p>
            <button onClick={handleLogout}>Logout</button>
            <p><Link to='/music'>CURTIDAS</Link></p>
            <p><Link to='/music'>FAVORITAS</Link></p>
            <p>GENEROS</p>
            <p><Link to='/artistas'>ARTISTAS</Link></p>
        </Container>
        
    );
}
export default SideBar;