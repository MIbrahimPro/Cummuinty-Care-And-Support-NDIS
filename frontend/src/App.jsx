import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

// import Loader from './components/Loader';


import Old from './App/old/old';
import New from './App/new/new';

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
                    <Route path="/*" element={<New />} />
                    <Route path="/old" element={<Old />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;