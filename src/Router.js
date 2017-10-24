import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmpleadosList from './components/EmpleadosList';


const RouterComponent = () => {
  return(
    <Router>
    <Scene key='root' hideNavBar>
      <Scene key='auth'>
        <Scene key='login' component={LoginForm} title='Inicia Sesión' />
      </Scene>

      <Scene key='main'>
        <Scene key='empleados' component={EmpleadosList} title='Empleados' />
      </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
