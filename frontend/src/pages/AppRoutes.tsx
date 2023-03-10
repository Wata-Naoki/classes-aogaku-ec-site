import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import { Header } from '../components/layouts/Header';
import { SignUp } from '../components/login/SignUp';
import { Login } from '../components/login/Login';
import { ProductsList } from './ProductsList';
import { AoyamaGakuinPage } from './AoyamaGakuinPage';
import { AllProductsSearchResult } from './AllProductsSearchResult';
import { SuccessUrlPage } from './SuccessUrlPage';

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
                {/* <Route path="/facultyId/:faculty" element={<ProductsList />} /> */}
                <Route path="/all-products" element={<AllProductsSearchResult />} />
                <Route path="/all-products-search-result" element={<AllProductsSearchResult />} />
                <Route path="/success" element={<SuccessUrlPage />} />
              </Route>
            </Routes>
          </Router>
        </RecoilRoot>
      </AuthProvider>
    </div>
  );
};
