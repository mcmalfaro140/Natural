import React from 'react';
import { Button, Form, FormGroup, Input, Label, Col} from 'reactstrap';
import strawb from '../images/fresas.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import CancelIcon from '@material-ui/icons/Cancel';

class Modalform extends React.Component {
    constructor(props){
        super(props)
        this.state={
            register: false
        }
        this.changeView = this.changeView.bind(this)
    }
    changeView(){
        this.setState({register: !this.state.register})
    }
    render(){
        return(
            <div>
                <div>
                    <div>
                        <div>
                            <div><FacebookIcon/></div>
                            <div><InstagramIcon/></div>
                            <div><TwitterIcon/></div>
                        </div>
                        <div>{!this.state.register ? "Don't have an account?" : "Already an user?"}</div>
                        <div onClick={this.changeView}>{!this.state.register ? "SignUp" : "LogIn"}</div>
                    </div>
                </div>
                {!this.state.register ? 
                    (
                    <div className="login">
                        <div onClick={this.props.open} className="close-x"><CancelIcon/></div>
                        <img src={strawb}></img>
                        <div className="name_mod">Natural Selection</div>
                        <div className="follow_text">Welcome Back!!!</div>
                        <Form>
                            <FormGroup>
                                <PersonIcon/><Input placeholder="Email"></Input>
                            </FormGroup>
                            <FormGroup>
                                <VpnKeyIcon/><Input placeholder="Password"></Input>
                            </FormGroup>
                            <Button color="primary" onClick={this.props.open}>Login</Button>
                            <div className="no_showing">Don't have an account? <span onClick={this.changeView}>Register</span></div>
                        </Form>
                    </div>
                    ):
                    (
                    <div className="register">
                        <div onClick={this.props.open} className="close-x"><CancelIcon/></div>
                        <img src={strawb}></img>
                        <div className="name_mod">Natural Selection</div>
                        <div className="follow_text">Welcome to the  family!</div>
                        <Form>
                            <FormGroup>
                                <Input placeholder="First Name"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Last Name"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Email"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Phone Number"></Input>
                            </FormGroup>
                            <Button color="primary" onClick={this.props.open}>Register</Button>
                            <div className="no_showing">Already an user? <span onClick={this.changeView}>Login</span></div>
                        </Form>
                    </div>
                    )
                }                
            </div>
        )
    }
}

export default Modalform;