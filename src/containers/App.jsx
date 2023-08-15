import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import CardsCafe from "../pages/Cards"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/card" element={<CardsCafe />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;