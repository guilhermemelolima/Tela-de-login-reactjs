import { useContext, useState } from 'react';
import { FaAngleRight } from "react-icons/fa";

import Button from '../layout/Button'

import style from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth/AuthContext';



function Login() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(){
        if(email && password){
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/');
            }else {
                alert("erro")
            }
        }
    }

    return (
        <section className={style.conteudo}>
            <h1>Login</h1>
                <ul>
                    <li>
                        <span>
                            <label htmlFor="email">E-mail: </label>
                        </span>
                        <span>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </span>
                    </li>
                    <li>
                        <span>
                            <label htmlFor="password">Passord: </label>
                        </span>
                        <span>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </span>
                    </li>
                </ul>
                <div className={style.buttons}>
                    <Button text="Entrar" className={style.btn} onClick={handleLogin}/>
                    <Button text="Cadastro" className={style.btn}>
                        <FaAngleRight  />
                    </Button>
                </div>
        </section>
    )
}

export default Login
