import Header from "./components/Header/Header";
import Home from "./components/HomePage/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Catalog from "./components/Catalog/Catalog";
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";

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
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/details" element={<Details />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/edit" element={<Edit />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
