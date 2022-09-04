import './App.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    //BEM
    <BrowserRouter>
      <div className="app">
        <Header />
        <AllRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
