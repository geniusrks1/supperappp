
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import NotPageFound from './pages/NotPageFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>

<Route path="/" element={<RegisterPage/>}/>
<Route path="/" element={<RegisterPage/>}/>
<Route path="/pagenotfound" element={<NotPageFound/>}/>
<Route path="/" element={<RegisterPage/>}/>
<Route path="/" element={<RegisterPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
