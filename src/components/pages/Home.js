import { RiLogoutCircleLine } from "react-icons/ri";
import { useContext } from "react";

import { AuthContext } from "../../contexts/auth/AuthContext";
import Button from '../layout/Button';

import style from './Home.module.css';
// import { useNavigate } from "react-router-dom";

function Home(props) {

    const auth = useContext(AuthContext);
    // const navigate = useNavigate()

    async function handleLogout(){
        await auth.signout();
        window.location.reload();
        // navigate('/login')
    }

    return (
        <section className={style.conteudo}>
            {/* {console.log('form')}
			{console.log('auth: ')}
			{console.log(auth)}
            {console.log('user: ')}
            {console.log(auth.user)}
            {console.log('token: ' )}
            {console.log(auth.token)} */}
            <h2>Sejá bem vindo {auth.user.nome}</h2>
            <div className="imgPerfil">
                <img src="https://placehold.co/100X100" alt={`Imagem de perfil de ${auth.user.nome}`}/>
            </div>

            <ul>
                <li>
                    <span>Nome: </span>
                    <span>{auth.user.nome}</span>

                </li>
                <li>
                    <span>Email: </span>
                    <span>{auth.user.nome}</span>
                </li>
                <li>
                    <span>Senha: </span>
                    <span>{auth.user.nome}</span>
                </li>
                <li>
                    <span>Token: </span>
                    <span>{auth.token}</span>
                </li>
                {/* <li>
                    <span>Role: </span>
                    <span>{auth.user.nome}</span>
                </li> */}
            </ul>
            <Button text={"Sair"} onClick={handleLogout}>
                <RiLogoutCircleLine/>
            </Button>
        </section>
    )
}

export default Home
