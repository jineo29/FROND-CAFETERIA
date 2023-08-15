import '../../assets/styles/Landing.css'
import conocenos from "../../assets/images/img1-conoce.png"
function DescripcionGeneral() {
    return (
        <>
            <div className="inf1">

                <div class="hero-image">
                    <div className="hero-text">
                        <div class="box">
                            <p>Peko</p>
                        </div>
                        <p>Combina a la perfección el exquisito sabor del café con repostería regional, esto en un ambiente con estilo propio y de total confort a través de la combinación de colores, texturas iluminación y formas plásticas para asegurar una experiencia inolvidable.</p>
                    </div>
                </div>
            </div>

            <div className='conoce'>
                <div className='color1'><p className='conoce-peko'>Peko?</p>
                    <div className='img1'><img src={conocenos} alt="" /></div>
                </div>


            </div>
            <div>
                <div className='back-cards'>
                    <p className='text-inf'>NUESTRAS ESPECIALIDADES</p>
                    <div className='text2-inf'>
                        <p>En nuestra sección de especialidades, encontrarás una selección de los mejores cafés del mundo, preparados con maestría y pasión por nuestros baristas. 
                            Disfruta de aromas y sabores únicos, desde el intenso espresso hasta el cremoso capuchino, 
                            pasando por el exótico café turco. Ven y descubre el arte del buen café en nuestra sección de especialidades.</p>
                    </div>

                    <div className='container-cafe'>
                        <div className='card-landing'>
                            <div className='number'><p>1</p></div>
                            <div className='title'><p>Capuccino</p></div>
                            <div className='description'><p>Es una bebida de origen italiano que se prepara con café expreso y leche montada con vapor para darle cremosidad. Suele llevar cacao o canela por encima. Es un café dulce y espumoso.</p></div>
                        </div>
                        <div className='card-landing2'>
                            <div className='number2'><p>2</p></div>
                            <div className='title2'><p>Caribeño</p></div>
                            <div className='description2'><p>Es una bebida que se prepara mezclando un café negro cargado con ron y nata montada o crema chantilly. Suele llevar azúcar morena o sirope. Es un café dulce y alcohólico</p></div>
                        </div>
                        <div className='card-landing3'>
                            <div className='number3'><p>3</p></div>
                            <div className='title2'><p>Americano</p></div>
                            <div className='description2'><p> Es una bebida que se prepara diluyendo un café expreso con agua caliente. Es un café más suave y ligero que el expreso, con menos cafeína y más ácido</p></div>
                        </div>
                    </div>
                    <div>
                        <a href="/card"><h4>ver mas</h4></a>
                    </div>
                </div>


                <div className='conocenos'>
                    <div className='mision'>
                        <div className='titles'><p>Mision</p></div>
                        <div className='descrip-txt'><p>Ofrecer a nuestros clientes una experiencia única de degustación de cafés de alta calidad, acompañados de deliciosos productos de repostería y bollería, en un ambiente acogedor y sofisticado.</p></div>
                    </div>

                    <div className='vision'>
                        <div className='titles'><p>Vision</p></div>
                        <div className='descrip-txt'><p>Ser la cafetería de referencia en nuestra ciudad, reconocida por la excelencia de nuestro servicio, la variedad de nuestra oferta y la satisfacción de nuestros clientes.</p></div>
                    </div>
                </div>
                <div className='descrip-txt2'>
                    <p>En Peko, queremos que cada día sea una oportunidad para disfrutar de lo que más te gusta. Por eso, te ofrecemos los mejores cafés del mundo, preparados con maestría y pasión por nuestros baristas. Ven a Peko y regálate un momento de placer, de relax y de energía. Porque tú te lo mereces.</p>
                </div>
            </div>
        </>
    );
}

export default DescripcionGeneral;
