import Landing from "../../assets/images/Land.jpg"
import '../../assets/styles/Landing.css'
function DescripcionGeneral() {

    return (
        <>
        <div className="rectangle">
            <div className="rectangle-container">
                <img className="image" src={Landing} alt="land"/>
            </div>
        </div>
        <div className="inf1">
            <h1>Ven a disgustar de nuestro delicioso cafe de Hoy!</h1>
            
        </div>

        <div className="carousel">
            
        </div>
        </>
    );
}

export default DescripcionGeneral;
