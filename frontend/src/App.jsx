import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import CustomCursor from './components/CustomCursor';
// import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Services from './pages/Services';
// import ServiceDetails from './pages/ServiceDetails';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <Router basename="/phase1">
            {/* {loading ? ( */}
            {/* <Loader /> */}
            {/* ) : ( */}
            <>
                <CustomCursor />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/about" element={<About />} /> */}
                    {/* <Route path="/contact" element={<Contact />} /> */}
                    {/* <Route path="/services" element={<Services />} /> */}
                    {/* <Route path="/services/:id" element={<ServiceDetails />} /> */}
                </Routes>
                <Footer />
            </>
            {/* )} */}
        </Router>
    );
}

export default App;