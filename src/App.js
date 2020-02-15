import React, { Component, Suspense } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import './assets/scss/App.scss';
import Menu from './assets/pages/Menu'
import { routes } from './routes';

const loading = () => <div>Loading...</div>

class App extends Component {


  render() {
    return (

      <BrowserRouter>
        { 
          routes.map((route, index) =>{
            return(
              <Suspense fallback={loading()}>
                <Route path={route.path} component={route.component}></Route>
              </Suspense>
            )
          })
        }
     </BrowserRouter>
    );
  }
}
export default App;
