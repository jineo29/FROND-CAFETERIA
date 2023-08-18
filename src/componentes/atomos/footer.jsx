import '../../assets/styles/Footer.css'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";

function Tabla() {
    return (
        <>
            <div id="footer" className='footer'>
                <div className="container">
                    <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Ubicacion</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="https://goo.gl/maps/vqoTEATpJRtFUKgH6"><i className="fa fa-angle-double-right"> Plaza Wompana sobre el Blvd. Belisario Domínguez</i></a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Horario</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a><i className="fa fa-angle-double-right"></i>Lunes a viernes | 6 am a 11 pm</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Ayuda</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a><i className="fa fa-angle-double-right"></i>administracion@peko.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-7">
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item"><a href="http://facebook.com/peko"><div className='icon'><FaFacebook /></div></a></li>
                                <li className="list-inline-item"><a href="http://Twitter.com"><div className='icon'><FaTwitter /></div></a></li>
                                <li className="list-inline-item"><a href="http://instagram.com"><div className='icon'><RiInstagramFill /></div></a></li>
                                <li className="list-inline-item"><a href="http://web.whatsapp.com"><div className='icon'><RiWhatsappFill /></div></a></li>
                            </ul>
                            <hr />
                        </div>
                        <hr />
                    </div>
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