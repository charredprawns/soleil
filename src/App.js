import React, { lazy, Suspense } from 'react'
import './App.css'
import pageSpecs from 'pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Theme, Navbar } from 'components'

const pages = pageSpecs.map(spec => ({
  Component: lazy(() => import(`pages/${spec.name}`)),
  spec: spec
}))

const App = () => {
  return (
    <Router>
      <Theme>
        <Navbar />
        <Suspense fallback={<div />}>
          <Switch>
            {pages.map(page => {
              return (
                <Route
                  key={page.spec.name}
                  component={page.Component}
                  path={page.spec.path === '/home' ? '/' : page.spec.path}
                  exact={!page.spec.isSubRouter}
                />
              )
            })}
          </Switch>
        </Suspense>
      </Theme>
    </Router>
  )
}

export default App
