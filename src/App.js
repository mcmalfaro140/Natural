import React, { Component, Suspense } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import { Modal, ModalHeader } from 'reactstrap';
import './assets/scss/App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Topbar from './assets/components/Topbar'
import Footer from './assets/components/Footer'
import Modalform from './assets/components/Modalform'
import { AnimatedSwitch } from 'react-router-transition';

import { routes } from './routes';

const loading = () => <div>Loading...</div>

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      showModal: false,
      isLogin: false,
      username: "Misael",
    }
    this.modalToggle = this.modalToggle.bind(this)
  }

  modalToggle(){
    this.setState({showModal: !this.state.showModal})
  }


  render() {
    return (
      <div>
        <BrowserRouter>
          <Topbar myState={this.state} open={this.modalToggle}/>
            { 
              routes.map((route, index) =>{
                return(
                  <Suspense fallback={loading()} key={index}>
                    <AnimatedSwitch
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                        className="switch-wrapper">
                          <Route path={route.path} render={() => <route.component myState={this.state}></route.component>}></Route>
                    </AnimatedSwitch>
                  </Suspense>
                )
              })
            }
          <Footer/>
      </BrowserRouter>
      <Modal isOpen={this.state.showModal} className="modal_form">
        <Modalform myState={this.state} open={this.modalToggle}/>
      </Modal>
     </div>
    );
  }
}
export default App;
