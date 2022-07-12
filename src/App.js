import Header from "./components/Header/Header";
import Home from "./components/HomePage/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import { Route, Routes } from "react-router-dom";
import './styles/styles.css'

function App() {
    return (
        <div className="all">

            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    
                </Routes>
            </main>
        </div>
    );
}

export default App;
