import './banner.css'
import Button from "../button/button";

export default function Banner(){
    return(
        <div className="container">
            <div className="description">
                <h1>Desenvolva soluções incríveis</h1>
                <h2>Uma plataforma de aprendizado para alcançar seu próximo nível como programador(a)</h2>
                <Button />
            </div>
            <div className="pc">
                <img src="images/coffe 1.png"/>
            </div>
        </div>
    )
}