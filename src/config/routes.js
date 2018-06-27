import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../components/Home.js'


export default (
   <Switch>
      <Route exact path='/' component={ Home }/>

      <Route path='*' render={() => (<Redirect to='/' />)} />

   </Switch>
)
