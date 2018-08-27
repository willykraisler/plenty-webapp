import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Library imports
import React from 'react';
import { createStore } from 'redux'
//Components
import NavBar from '../navbar/NavBar'
import ShowUs from '../showUs/ShowUs'
import Counter from '../body/redux-tuto/Counter'

//Reducers
import RedCounter from '../../reducers/RedCounter'

const store = createStore(RedCounter);
store.subscribe(Counter);

const App = () => (
  <div>
    <header>
      <NavBar></NavBar>
    </header>
    <body>
      <ShowUs></ShowUs>
      <Counter
        value={store.getState()}
        onInc={() => store.dispatch({ type: 'INCREMENT' })}
        onDec={() => store.dispatch({ type: 'DECREMENT' })}>
      </Counter>
    </body>
  </div>
);

export default App;
