import Button from '../button/button'
import './pricing.css'
export default function Pricing (){
    return (
        <div className="container-pricing">
            <div className="card starter">
                <h1>Starter</h1>
                <h2>Grátis</h2>
                <p>Acesso à cursos gratuitos</p>
                <p>Acesso à comunidade</p>
                <button id='assinar-starter'>Iniciar</button>
            </div>

            <div className="card pro">
                <h1>PRO</h1>
                <h2>R$20,00 mês</h2>
                <p>Funcionalidades do Starter</p>
                <p>Acesso à cursos premium</p>
                <button id='assinar-pro'>Assinar pro</button>
            </div>

            <div className="card business">
                <h1>Business</h1>
                <h2>R$100,00 mês</h2>
                <p>Funcionalidades do PRO</p>
                <p>Suporte técnico</p>
                <p>Treinamentos</p>
                <button id='assinar-business'>Assinar</button>
            </div>
        </div>
    )
}