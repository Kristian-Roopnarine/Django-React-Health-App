import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { Provider } from 'react-redux';
import store from '../store'
import Alerts from './Alerts.js'
import Register from './accounts/Register'
import Login from './accounts/Login'
import {loadUser,getProfileData} from '../actions/auth'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './home/Home'
import NavBar from './NavBar'
import PrivateRoute from './common/PrivateRoute'

// Alert options
const alertOptions =  {
  timeout:3000,
  position:'top center'
}

function App() {
  useEffect(() =>{
    store.dispatch(loadUser())
    store.dispatch(getProfileData())
  })

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <NavBar />
          <Alerts />
          <PrivateRoute path="/" exact component={Home}/>
          <Route path="/register" component= {Register}/>
          <Route path="/login" component = {Login}/>
        </AlertProvider>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
