import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import NavBar2 from './Components/Navbar/NavBar2';
import Pdfviewer from './Components/Pdfviewer/Pdfviewer';

function App() {
  return (
    <BrowserRouter>
    <NavBar2/>
    <Pdfviewer/>
    </BrowserRouter>
  );
}

export default App;
