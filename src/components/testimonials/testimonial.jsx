import './testimonial.css'
export default function Testimonial() {
    return (
        <div className="container-testimonial">
            <div className="testimonial">
                <div className='picture'></div>
                <div className="sentence">
                    <p id='name'>Fernanda Pimentel</p>
                    <p id='experience'>A plataforma é incrível e a
                        metodologia dos cursos são de alcance para quem está começando
                        ou quem já está avançado em alguma tecnologia.</p>
                </div>
            </div>

            <div className="testimonial">
                <div className='picture'></div>
                <div className="sentence">
                    <p id='name'>Pedro Ferreira</p>
                    <p id='experience'>Com muitos exercícios práticos e a ajuda da comunidade do Aprender,
                        consegui passar em um processo seletivo</p>
                </div>
            </div>
        </div>
    )
}