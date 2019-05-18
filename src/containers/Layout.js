import React, {Fragment} from 'react'
import Header from './Header'
import Login from './Login'
import Dashboard from './Dashboard';

const Layout = ({routerProps, display}) => (
  <Fragment>
    <Header />
    {
      (() => {
        switch (display) {
        case 'login':
          return <Login {...routerProps} />
        case 'dashboard':
          return <Dashboard {...routerProps} />
        }
      })()
    }
  </Fragment>
)

export default Layout
