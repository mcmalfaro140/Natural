import React, { Component, Suspense } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import './assets/scss/App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Topbar from './assets/components/Topbar'
import Footer from './assets/components/Footer'
import { AnimatedSwitch } from 'react-router-transition';

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
                    <AnimatedSwitch
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                        className="switch-wrapper">
                      <Route path={route.path} component={route.component}></Route>
                    </AnimatedSwitch>
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
