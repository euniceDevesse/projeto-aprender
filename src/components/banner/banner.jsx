import './banner.css'
import Button from "../button/button";
import coffee from "../../assets/images/coffee.png"

export default function Banner(){
    return(
        <div className="container">
            <div className="description">
                <h1>Desenvolva soluções incríveis</h1>
                <h2>Uma plataforma de aprendizado para alcançar seu próximo nível como programador(a)</h2>
                <Button title="Quero me cadastrar" />
            </div>
            <div className="pc">
                <img src={coffee}/>
            </div>
        </div>
    )
}