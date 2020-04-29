import React from 'react';
import {Container, Row, Col,  Form,Button} from 'reactstrap';


class ContactLayout extends React.Component {
    
    render(){
        return(
           
            <Container fluid={true} className="contact">
                <Row>
                    <Col>  
                        <img 
                          width='100%'
                         src={require(`../images/map.png`)}/>
                    </Col>
                     <Col>
                         <Col>
                            <div>Contact.</div>
                            <div>Get In Touch.</div>
                            Leave us a message
                         </Col>
                         <br/>
                        <Form>
                            <Col>  
                               <input type="text" name="name" 
                                placeholder="Full Name*:"
                                User="Name"/>
                            </Col>
                           
                            <Col>
                                  <input type="text" name="email" placeholder="Email*:"/>
                                
                            </Col>
                            
                            <Col>
                                <label>
                                    Message:
                                </label>

                            </Col>
                            <Col>
                                <textarea type="text" name="name"  rows={6} />
                            </Col>
                          
                            <Col>  <Button color="primary">Send Message</Button></Col>
                            
                        </Form>
                     </Col>
                </Row>
                <Row>
                <div className="home_hours_style">
                    <div>HOURS OF OPERATION</div>
                    <div>Mon – Fri 8 am-7pm | </div>
                    <div>Sat 9am – 4pm | </div>
                    <div>Sun Closed</div>
                </div>
                </Row>
            </Container>
        )
    }
}

export default ContactLayout;