import React, {Component} from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiceD20, faUser, faCalendarPlus, faPlus, faSort } from '@fortawesome/free-solid-svg-icons'

import Header from './containers/Header'
import MainContainer from './containers/MainContainer';

import './css/App.css';

library.add(faDiceD20, faUser, faCalendarPlus, faPlus, faSort)

class App extends Component {

  state = {
    user: null
  }

  render() {

    const {user} = this.state

    return (
      <div className="App">
        <Header />
        <MainContainer user={user} />
      </div>
    )
  }
}

export default App;
