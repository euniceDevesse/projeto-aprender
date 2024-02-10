import './cursos.css'
import tag from "../../assets/images/tag.svg"
import html from "../../assets/images/html.svg"
import css from "../../assets/images/css.svg"
export default function Cursos() {
    return (
        <div className='container-card'>
            <div className="boxes">
                <img src={tag} id='img'/>
                <h2 id='first'>Lógica de programação</h2>
            </div>
            <div className="boxes">
                <img src={html} />
                <h2>Introdução à HTML</h2>
            </div>
            <div className="boxes">
                <img src={css} />
                <h2>Introdução à CSS</h2>
            </div>

        </div>
    )
}