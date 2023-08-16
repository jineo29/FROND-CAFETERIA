import '../../assets/styles/Footer.css'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";

function Tabla() {
    return (
        <>
            <div id="footer">
                <div class="container">
                    <div class="row text-center text-xs-center text-sm-left text-md-left">
                        <div class="col-xs-12 col-sm-4 col-md-4">
                            <h5>Ubicacion</h5>
                            <ul class="list-unstyled quick-links">
                                <li><a href="https://goo.gl/maps/vqoTEATpJRtFUKgH6"><i class="fa fa-angle-double-right"> Plaza Wompana sobre el Blvd. Belisario Domínguez</i></a></li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-4">
                            <h5>Horario</h5>
                            <ul class="list-unstyled quick-links">
                                <li><a><i class="fa fa-angle-double-right"></i>Lunes a viernes | 6 am a 11 pm</a></li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-4">
                            <h5>Ayuda</h5>
                            <ul class="list-unstyled quick-links">
                                <li><a><i class="fa fa-angle-double-right"></i>administracion@peko.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-7">
                            <ul class="list-unstyled list-inline social text-center">
                                <li class="list-inline-item"><a href="http://facebook.com"><div className='icon'><FaFacebook /></div></a></li>
                                <li class="list-inline-item"><a href="http://Twitter.com"><div className='icon'><FaTwitter /></div></a></li>
                                <li class="list-inline-item"><a href="http://instagram.com"><div className='icon'><RiInstagramFill /></div></a></li>
                                <li class="list-inline-item"><a href="http://web.whatsapp.com"><div className='icon'><RiWhatsappFill /></div></a></li>
                            </ul>
                            <hr/>
                        </div>
                        <hr/>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p id='foot'>Con amor y un buen cafe  [Peko]</p>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tabla;