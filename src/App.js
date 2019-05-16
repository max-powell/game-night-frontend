import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'

import Header from './containers/Header'
import MainContainer from './containers/MainContainer';

import './App.css';

library.add(faDiceD20)

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
