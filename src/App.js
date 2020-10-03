import React from 'react';
import Overview from './views/Overview';
import Cow from './views/Cow';
import Swine from './views/Swine';
import Poultry from './views/Poultry';
import {NavLink,Switch,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <ul>
        <li><NavLink to="/overview">Overview</NavLink></li>
        <li><NavLink to="/poultry">Poultry</NavLink></li>
        <li><NavLink to="/swine">Swine</NavLink></li>
        <li><NavLink to="/cow">Cow</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/">First Page</Route>
        <Route exact path="/overview"><Overview/></Route>
        <Route exact path="/poultry"><Poultry/></Route>
        <Route exact path="/swine"><Swine/></Route>
        <Route exact path="/cow"><Cow/></Route>
      </Switch>
    </div>
  );
}

export default App;
