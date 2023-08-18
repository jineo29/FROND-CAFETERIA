import "../../assets/styles/InfoFooter.css";

import { AiOutlineHeart } from "react-icons/ai";
function InFooter() {
    return (
        <>
            <div>
                <div className="td-im">
                    <p className="txt-im">
                        Para ti <AiOutlineHeart></AiOutlineHeart>
                    </p>
                    <p className="txt-im2" >
                        ¡Bienvenidos a nuestra cafetería! Nos complace tenerlos aquí y esperamos que disfruten de nuestro café y comida.
                        Nuestro objetivo es ofrecerles una experiencia única y memorable cada vez que nos visiten. Si tienen alguna pregunta o inquietud,
                        no duden en hacérnoslo saber.
                        ¡Gracias por elegirnos y esperamos verlos pronto!
                    </p>
                </div>
            </div>
        </>
    );
}

export default InFooter;