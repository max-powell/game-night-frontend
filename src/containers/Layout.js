import React, {Fragment} from 'react'
import Header from './Header'
import Login from './Login'
import Dashboard from './Dashboard'

const Layout = ({routerProps, display}) => (
  <Fragment>
    <Header {...routerProps} />
    {
      (() => {
        switch (display) {
        case 'dashboard':
          return <Dashboard {...routerProps} />
        default:
          return <Login {...routerProps} />
        }
      })()
    }
  </Fragment>
)

export default Layout
