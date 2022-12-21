import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
// import { SignUp } from "./components/login/SignUp";
import { Home } from './Home';
import { AuthProvider } from '../context/AuthContext';
import { Header } from '../components/layouts/Header';
import { SignUp } from '../components/login/SignUp';
import { Login } from '../components/login/Login';
import { ProductsList } from './ProductsList';
import { AoyamaGakuinPage } from './AoyamaGakuinPage';
// import Home from "./home";
// import Main from "./main";
// import { Login } from "./components/login/Login";
// import { Card } from "./components/ui/Card";
// import { Cards } from "./components/ui/Cards";
// import { ProductsList } from "./ProductsList";

export const AppRoutes = () => {
  const layout = (
    <div className="flex flex-col m-0">
      <Header />
      <Outlet />
    </div>
  );
  return (
    <div>
      <AuthProvider>
        <RecoilRoot>
          <Router>
            <Routes>
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={layout}>
                {/* <Route path="/" element={<Home />} /> */}
                {/* <Route path="/aoyamagakuin" element={<AoyamaGakuinPage />} /> */}
                <Route path="/" element={<AoyamaGakuinPage />} />
                <Route path="/facultyId/:faculty" element={<ProductsList />} />
              </Route>
            </Routes>
          </Router>
        </RecoilRoot>
      </AuthProvider>
    </div>
  );
};
