import Header from './Components/Header';
import Home from './Components/Home';
import CartPage from './Components/CartPage';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
         <Header />
         <div>
          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/cart" element={<CartPage />} /> 
          </Routes>
         </div>
     </BrowserRouter>
  );
}

export default App;
