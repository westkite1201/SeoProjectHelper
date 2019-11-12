import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
//import Login from './pages/Signin';
import PrivateRoute from './components/PrivateRouter';
import { inject, observer } from 'mobx-react';
//import autobind from 'autobind-decorator';
import dashboardRoutes from './routes/dashboard'
import { PAGE_PATHS, STORES } from './constants';
import Cards from './components/Cards/Cards'
@inject(STORES.AUTH_STORE)
@observer
//@autobind
export default class App extends Component {
   switchRoutes = (
    <Switch>
      {dashboardRoutes.map((prop : any, key : number) => {
        if (prop.redirect){
          return <Redirect from={prop.path} to={prop.to} key={key} />;
        }
        if(prop.exact){
          return  <Route exact path={prop.path} component={prop.component} key={key}  />;
        }

        /*path로 설정했지만 다른 것으로 전환하는게 좋을듯  */
        if(prop.path){
          return <Route path={prop.path} component={prop.component} key={key} />;
        }
        if(prop.private) {
          return <PrivateRoute
                    path={prop.path}
                    redirectTo={PAGE_PATHS.SIGNIN}
                    component={prop.component}
                  />
        }else{
          return  <Route exact path={prop.path} component={prop.component} key={key}  />;
        }
      })}
    </Switch>
  );
   
  render() {
    return (
      <Router>
          <Switch>
          <Route path={PAGE_PATHS.MAIN} component={Cards} />
        </Switch>
        {/*this.switchRoutes*/}
        {/*
        <Switch>
          <Route path={PAGE_PATHS.SIGNIN} component={Login} />
          <Route path={PAGE_PATHS.SIGNUP} component={Singup} />
          <PrivateRoute
            path={`${PAGE_PATHS.PRODUCT}/:id`}
            redirectTo={PAGE_PATHS.SIGNIN}
            component={ProductDetail}
          />
          <Redirect from="/" to={PAGE_PATHS.PRODUCT_LISTS} />
        </Switch>
        */}
      </Router>
    );
  }
}
