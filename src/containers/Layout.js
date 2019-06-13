import React, { Fragment } from 'react'

import Header from './Header'

const Layout = ({routerProps, child}) => (
  <Fragment>
    <Header routerProps={routerProps} />
    {child}
  </Fragment>
)

export default Layout
