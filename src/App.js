import './App.css';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <main className="background-container">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </main>
  );
}

export default App;
