import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    //BEM
    <BrowserRouter>
      <div className="app">
        <AllRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
