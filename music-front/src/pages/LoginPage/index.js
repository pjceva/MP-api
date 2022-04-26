import { Link } from "react-router-dom";
import { Container } from "./styles";

const Login = () => {
    return (
        
            <Container>
                <h1>Entrar com uma conta</h1>
                <input class="login" placeholder="USERNAME"></input>
                <input class="login" type="password" placeholder="PASSWORD"></input>
                <button>LOGIN</button>
                <h1>CRIAR UMA CONTA</h1>
                <input class="login" placeholder="USERNAME"></input>
                <input class="login" type="password" placeholder="PASSWORD"></input>
                <button>CRIAR</button>
                <h1>Entrar sem conta</h1>
                <button><Link to='/music'>CONVIDADO</Link></button>
                
            </Container>
        
    );
}

export default Login;