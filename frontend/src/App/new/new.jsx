import Home from './pages/Home';
import Contact from './pages/Contact';
import { Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './pages/Services';
import ServicesDetail from './pages/ServiceDetail';
import About from './pages/AboutUs';
import Testimonials from './pages/Testimonials';


export default function New() {
    return (
        <>

            <Topbar />

            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services/:serviceSlug" element={<ServicesDetail />} />
                <Route path="/services" element={<Services />} />
                <Route path='/about' element={<About />} />
                <Route path='/testimonials' element={<Testimonials />} />
                <Route path="*" element={<Home />} />
            </Routes>

            <Footer />
        </>
    )
}



