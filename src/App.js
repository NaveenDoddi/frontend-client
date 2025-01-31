import './App.css';
import "leaflet/dist/leaflet.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Change here

import Home from './components/home';
import CityPage from "./components/city_page";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/city_page' element={<CityPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;