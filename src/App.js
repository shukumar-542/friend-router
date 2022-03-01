
import './App.css';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import FriendDetails from './components/Friend/FriendDetails/FriendDetails';

function App() {
  return (
    <Router >
      <Switch>
        <Route path='/home'>
            <Home/>

        </Route>
        <Route exact path='/'><Home/></Route>
        <Route path='/friend/:id'><FriendDetails/></Route>
        <Route path='*'><NotFound/></Route>
      </Switch>
    </Router>
  );
}

export default App;
