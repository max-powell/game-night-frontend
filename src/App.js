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

  setUser = user => {this.setState({user})}

  render() {

    const {user} = this.state
    const {setUser} = this

    return (
      <div className="App">
        <Header />
        <MainContainer user={user} setUser={setUser}/>
      </div>
    )
  }
}

export default App;
