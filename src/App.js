import Header from "./components/Header/Header";
import Home from "./components/HomePage/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Catalog from "./components/Catalog/Catalog";
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";
import Profile from "./components/Profile/Profile";

import Edit from "./components/Edit/Edit";
import Logout from "./components/Logout/Logout";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";

import GuardedRoute from "./components/GuardedRoute/GuardedRoute";
import GuestRoute from "./components/GuardedRoute/GuestRoute";

import { AuthProvider } from "./contexts/AuthContext";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <AuthProvider>
            <div className="all">
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/details/:animalId" element={<Details />} />

                        <Route element={<GuestRoute />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Route>

                        <Route element={<GuardedRoute />}>
                            <Route path="/create" element={<Create />} />
                            <Route path="/edit/:animalId" element={<Edit />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/profile" element={<Profile />} />
                        </Route>

                        <Route path="/*" element={<ErrorPage />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
