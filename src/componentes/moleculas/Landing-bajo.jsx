import "../../assets/styles/Landing-bajo.css"
import decoration from "../../assets/images/Group.svg";
import img1 from "../../assets/images/td-i.jpg";
import img2 from "../../assets/images/td-o.jpg";

function LandingBajo() {
  return (
    <>
      <div className='fondos'>
        <div className="fondoimg" />
        <img src={decoration} className="imgDeco" />
        <div className="fondoimg2" />
      </div>

      <div className="td-eu">
        <div className="td-col">
          <div className="td-col-1">
            <div className="td-img"><img src={img1} alt="" /></div>
            <div className="td-img"><img src={img2} alt="" /></div>
          </div>
        </div>

        <div className="td-right">
          <div className="td-title"><p>PEKO CAFES</p></div>
          <div className="td-desc"><p>CONOCE NUESTRA GRAN CANTIDAD DE PRODUCTOS Y LOS DIFERENTES TIPOS DE CAFES DE LAS REGIONES MAS IMPORTANTES DEL PAIS </p></div>
        </div>
      </div>



    </>
  );
}

export default LandingBajo;