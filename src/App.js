import 'normalize.css';
import 'assets/css/global.css';
import Home from 'screens/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from 'screens/Contact/Contact';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
