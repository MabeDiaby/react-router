import './App.css';
import Nav from './components/Nav'
import { Route, Link } from "react-router-dom";
import Home from './components/Home';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
  return (
    <div>
    <div className="app-Navbar">
      <Nav />
      </div>
      <div className="app-Main">
        <Route exact path="/" component={Home}/>
        <Route exact path="/A" component={ComponentA}/>
        <Route exact path="/B" component={ComponentB}/>
      </div>
    </div>
  );
}

export default App;
