import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiceD20, faUser } from '@fortawesome/free-solid-svg-icons'

import Header from './containers/Header'
import MainContainer from './containers/MainContainer';

import './css/App.css';

library.add(faDiceD20, faUser)

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
