/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import HomePage from '../pages/home/Home';
import Home from '../pages/home/Home';
import AdminBoard from '../pages/admin/Admin';
import HostBoard from '../pages/host/Host';
import PrivateRoute from './PrivateRoute';
import Profile from '../pages/profile/Profile';
import GuestBoard from '../pages/guest/Guest'
import Listing from '../components/Listings/Listing/Listing';
import ListingsFind from '../components/Listings/ListingsFind/ListingsFind'
import UsersList from '../components/Admin/UsersList' 

export default function Routes () {
  return (
    <Switch>
      <PrivateRoute exact path="/admin" component={UsersList} />     
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path={["/", "/home"]} component={Home} />
      <Route exact path="/admin/profile" component={Profile} />
      <Route path="/host" component={HostBoard} />
      <Route path="/guest" component={GuestBoard} />
      <Route path="/host/listings" component = {Listing} />
      <PrivateRoute exact path="/admin/users" component={AdminBoard} />
    </Switch>
  )
}