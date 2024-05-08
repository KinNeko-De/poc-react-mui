import Greeting from './layout/header';
import Footer from './layout/footer';
import logo from './logo.svg';
import './App.css';
import { DarkModeToggle } from './layout/darkmode';
import { useNavigate, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Greeting name={"Nils"}></Greeting>
          <Footer name={"React"}></Footer>
        </a>
        <DarkModeToggle></DarkModeToggle>
        <Button variant="contained" color="primary" onClick={() => navigate('/poc-react-mui/ghost')}>
  Go to Ghost
</Button>
<Outlet /> 
      </header>

    </div> 
    
    );
}

export default App;
