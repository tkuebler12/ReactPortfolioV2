import logo from './logo.svg';
import './App.css';
import Container from './Components/Container/index';
import Footer from './Components/Footer/index';
import Header from './Components/Header/index';
import Navbar from './Components/Navbar/index';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
