import Header from "../componentes/atomos/Header";
import Footer from "../componentes/atomos/footer";
import Land from "../componentes/moleculas/Landing"
import Carousel from "../componentes/moleculas/Carousel"
import Land2 from "../componentes/moleculas/Landing-bajo"
import Mapa from "../componentes/moleculas/mapas"
import InFooter from "../componentes/moleculas/infoFooter"


function Dashboard() {
    return (
        <div>
            <Header></Header>
            <Land></Land>
            <Carousel></Carousel>
            <Land2></Land2>
            <Mapa></Mapa>
            <InFooter></InFooter>
            <Footer></Footer>
        </div>
    );
}

export default Dashboard;