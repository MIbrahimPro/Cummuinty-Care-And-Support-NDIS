import Home from './pages/Home';
import Contact from './pages/Contact';
import { Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './pages/Services';
import ServicesDetail from './pages/ServiceDetail';
import Locations from './pages/Locations';
import LocationsDetail from './pages/LocationsDetail';


export default function New() {
    return (
        <div className="relative overflow-x-hidden min-h-screen">


            <Navbar />




            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/services/:serviceSlug" element={<ServicesDetail />} />
                <Route path="/services" element={<Services />} />

                {/* <Route path="/locations" element={<Locations />} />
                <Route path="/locations/:locationSlug/:serviceSlug" element={<LocationsDetail />} /> */}

                <Route path="/locations" element={<Home />} />
                <Route path="/locations/:locationSlug/:serviceSlug" element={<Home />} />



                <Route path="*" element={<Home />} />
            </Routes>

            <Footer />

        </div>
    )
}



