import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/ShareComponents/Navbar/Navbar';
// import MessengerFs from './Components/ShareComponents/MessengerFs/MessengerFs';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Router>
      {/* <MessengerFs/> */}
    </div>
  );
}

export default App;
