
import './App.css';
import "leaflet/dist/leaflet.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/home';
import CityPage from "./components/city_page"

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/city_page' element = {<CityPage />}/> 
                    {/* <Route path="/contact" element={< />} /> */}
                </Routes>
            </Router>
        </>
    )
}
export default App
