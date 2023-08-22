import '../../assets/styles/Footer.css'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";
/* import Avatar from "../../assets/images/avatar.jpg" */
function Tabla() {
    return (
        <>
            <div id="footer" className='footer'>
                <div className="container">
                    <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-xs-12 col-sm-4 col-md-4"><br />
                            <h5>Ubicacion</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="https://goo.gl/maps/vqoTEATpJRtFUKgH6"><i className="fa fa-angle-double-right"></i>Plaza Wompana sobre el Blvd. Belisario Domínguez</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4"> <br />
                            <h5>Horario</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a><i className="fa fa-angle-double-right"></i>Lunes a viernes | 6 am a 11 pm</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4"> <br />
                            <h5>Ayuda</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a><i className="fa fa-angle-double-right"></i>administracion@peko.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-7">
                            <ul className="list-unstyled list-inline social text-center">
                                {/*                      <li className="list-inline-item"><a href="http://facebook.com"><i class="fab fa-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="http://Twitter.com"><div className='icon'><FaTwitter /></div></a></li>
                                <li className="list-inline-item"><a href="http://tiktok.com"><i class="fa-brands fa-tiktok"></i></a></li>
                                <li className="list-inline-item"><a href="http://web.whatsapp.com"><div className='icon'><RiWhatsappFill /></div></a></li>
                                <li className="list-inline-item"><a href="http://instagram.com"><i class="fab fa-instagram"></i></a></li> */}
                                <ul class="wrapper">
                                    <a href="http://facebook.com">
                                        <li class="icon facebook">
                                            <span class="tooltip">Facebook/@pekoOficial</span>
                                            <span><i class="fab fa-facebook-f"></i></span>
                                        </li></a>
                                    <a href="http://twitter.com">
                                        <li class="icon twitter">
                                            <span class="tooltip">Twitter/@pekoOficial</span>
                                            <span><i class="fab fa-twitter"></i></span>
                                        </li></a>
                                    <a href="http://tiktok.com">
                                        <li class="icon tiktok">
                                            <span class="tooltip">Tiktok/@pekoOficial</span>
                                            <span><i class="fab fa-tiktok"></i></span>
                                        </li></a>
                                    <a href="http://instagram.com">
                                        <li class="icon instagram">
                                            <span class="tooltip">Instagram/@pekoOficial</span>
                                            <span><i class="fab fa-instagram"></i></span>
                                        </li></a>
                                    <a href="http://web.whatsapp.com"> <li class="icon whatsapp">
                                        <span class="tooltip">Whatsapp</span>
                                        <span><i class="fab fa-whatsapp"></i></span>
                                    </li></a>
                                </ul>

                            </ul>
                        </div>

                        {/* <div className='body'>
                            <div class="compartir">
                                <div><img src={Avatar} alt="" className='avatar'/></div>
                                <span>Contactanos - 967 121 7878</span>
                                <nav>
                                    <a href="#"><i class="fab fa-whatsapp"></i></a>
                                    <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-facebook"></i></a>
                                </nav>
                            </div>
                            
                        </div> */}
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p id='foot'>Con amor y un buen cafe  [Peko]</p>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>


        </>
    );
}

export default Tabla;