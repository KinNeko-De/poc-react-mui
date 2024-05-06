import Greeting from './layout/header';
import Footer from './layout/footer';
import logo from './logo.svg';
import './App.css';

function App() {
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
      </header>
    </div>
  );
}

export default App;
