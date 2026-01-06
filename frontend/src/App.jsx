import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

// import Loader from './components/Loader';


import Old from './App/old/old';
import New from './App/new/new';
import New2 from './App/new2/new2';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <Router>
            <>
                <Routes>
                    <Route path="/*" element={<New2 />} />
                    <Route path="/old" element={<New />} />
                    <Route path="/old2" element={<Old />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;