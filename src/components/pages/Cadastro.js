
import style from './Cadastro.module.css'

import Button from '../layout/Button'

import { FaAngleLeft } from "react-icons/fa";

function Cadastro() {
  return (
    <section className={style.conteudo}>
        <h1>Cadastro</h1>
        <form action="" method='POST'>
            <ul>
                <li>
                    <span>
                        <label htmlFor="nome">Nome: </label>
                    </span>
                    <span>
                        <input type="text" name="nome" id="nome" />
                    </span>
                </li>
                <li>
                    <span>
                        <label htmlFor="email">E-mail: </label>
                    </span>
                    <span>
                        <input type="email" name="email" id="email" />
                    </span>
                </li>
                <li>
                    <span>
                        <label htmlFor="password">Passord: </label>
                    </span>
                    <span>
                        <input type="password" name="password" id="password" />
                    </span>
                </li>
                <li>
                    <span>
                        <label htmlFor="role">Role: </label>
                    </span>
                    <span>
                        <select name="role" id="role">
                            <option value="" selected></option>
                            <option value="admin">Administrador</option>
                            <option value="cliente">Cliente</option>
                        </select>

                    </span>
                </li>
            </ul>
            <div className={style.btn}>
                <Button text="Cadastrar" className={style.botao}/>
                <Button text="Entrar" className={style.botao}>
                    <FaAngleLeft />
                </Button>
            </div>
        </form>
    </section>
)
}

export default Cadastro
