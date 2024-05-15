import { RiLogoutCircleLine } from "react-icons/ri";
import { useContext } from "react";

import { AuthContext } from "../../contexts/auth/AuthContext";
import Button from '../layout/Button';

import style from './Home.module.css';

function Home() {

    const auth = useContext(AuthContext);

    async function handleLogout(){
        await auth.signout();
        window.location.reload();
    }

    return (
        <section className={style.conteudo}>
            <h2>Sejá bem vindo {auth.user.nome}</h2>
            <div className="imgPerfil">
                <img src="https://placehold.co/100X100" alt={`Imagem de perfil de ${auth.user.name}`}/>
            </div>

            <ul>
                <li>
                    <span>Nome: </span>
                    <span>{auth.user.name}</span>

                </li>
                <li>
                    <span>Email: </span>
                    <span>{auth.user.email}</span>
                </li>
                <li>
                    <span>Senha: </span>
                    <span>{auth.user.password}</span>
                </li>
                <li>
                    <span>Token: </span>
                    <span>{localStorage.getItem('authToken')}</span>
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
