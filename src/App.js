import './App.css';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import { Route, Switch } from 'react-router-dom';
// import { ReactDOM } from 'react-dom';
// import Home from './components/home/Home';
// import { BrowserRouter } from 'react-router-dom';
import ColorPicker from './components/colorPicker/ColorPicker';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Switch>
        <h1>
          <Route path="/rgb/:r/:g/:b" component={ColorPicker} />
        </h1>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
