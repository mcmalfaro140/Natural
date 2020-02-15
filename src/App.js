import React, { Component, Suspense } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import './assets/scss/App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Topbar from './assets/components/Topbar'
import Footer from './assets/components/Footer'

import { routes } from './routes';

const loading = () => <div>Loading...</div>

class App extends Component {


  render() {
    return (
      <div>
        <BrowserRouter>
          <Topbar/>
            { 
              routes.map((route, index) =>{
                return(
                  <Suspense fallback={loading()}>
                    <Route path={route.path} component={route.component}></Route>
                  </Suspense>
                )
              })
            }
          <Footer/>
      </BrowserRouter>
     </div>
    );
  }
}
export default App;
