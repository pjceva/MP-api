import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import { AuthContext } from "../../contexts/auth"

const Login = () => {

    const { authenticated, login } = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        login(username, password);

        console.log('submit', {username, password});
    }

    return (
        
            <Container>
                <h1>Entrar com uma conta</h1>
                <p>Loged: {String(authenticated)}</p>
                <form className="form" onSubmit={handleSubmit}>
                        <label className="label">Username:</label>
                        <input 
                            type="text"
                            placeholder="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <label className="label">Senha:</label>
                        <input 
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button className="button" type="submit">Entrar</button>
                </form>

                <h1>Criar Conta</h1>
                <form className="form">
                <label className="label">Username:</label>
                        <input type="text" placeholder="username"></input>

                        <label className="label">Senha:</label>
                        <input type="password" placeholder="password"></input>

                        <button className="button" type="submit">Entrar</button>
                </form>
                <h1>Entrar sem conta</h1>
                <Link to='/music' style={{textDecoration: 'none',margin:'auto auto'}}><button className="button">Convidado</button></Link>
                
            </Container>
        
    );
}

export default Login;