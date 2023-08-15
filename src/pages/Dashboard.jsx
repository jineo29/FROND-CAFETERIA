import Header from "../componentes/atomos/Header";
import Footer from "../componentes/atomos/footer";
import Land from "../componentes/moleculas/Landing"
import Carousel from "../componentes/moleculas/Carousel"

function Dashboard() {
    return (
        <div>
            <Header></Header>
            <Land></Land>
            <Carousel></Carousel>
            <Footer></Footer>
        </div>
    );
}

export default Dashboard;