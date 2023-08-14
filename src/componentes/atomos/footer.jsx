import '../../assets/styles/Footer.css'
import { FaFacebook, FaTwitter} from "react-icons/fa";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";
function Tabla() {
    return (
      <div className='footer'>
    <div className='redes'>
      <a href="http://facebook.com"><div className='icon'><FaFacebook/></div></a>
      <a href="http://Twitter.com"><div className='icon'><FaTwitter/></div></a>
      <div className='icon'><RiInstagramFill/></div>
      <div className='icon'><RiWhatsappFill/></div>
    </div>

      <div>
        <div className='tod'>
          <div className='titles'>
            <div className='footer-desc'>
              <span>Direccion</span>
              <h5>9a sur poniente col. penipak</h5>
            </div>

            <div className='footer-desc'>
              <h1>Peko</h1>
            </div>
            
            <div className='Con-Hor'>
              <div className='footer-desc2'>
                <span>Contactanos</span>
                <a href="">Facebook</a>
                <a href="">Twitter</a>
                <a href="">Instagram</a>
                <a href="">Whatsapp</a>
              </div>

             <div className='footer-desc2'>
              <span>Hoario</span>
              <p>Lunes a Viernes</p>
              <p>8 am a 6 pm</p>
             </div>

            </div>
          </div>

          <div className='term'>
            <div className='p'><p>Term Of Us</p></div>
            <div className='p'><p>Privace Police</p></div>
          </div>

        </div>
      </div>

      </div>
    );
}

export default Tabla;