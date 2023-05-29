import React,{ FC } from 'react';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import store, {RootState} from './redux/store';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login/Index';
import Home from './pages/Home/Index';
import Products from './pages/Products/Index';
import PrivateRoutes from './route/PrivateRoutes';

const App = () => {
  const user = useSelector((state: RootState) => state.authentication.isAuthenticated);
  console.log(user)
  return (
    <Router>
        <Routes>
          <Route element={<PrivateRoutes/>}>
              <Route path='/' element={<Home/>} />
              <Route path='/products' element={<Products/>} />
          </Route>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </Router>
  );
};

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default RootApp;