import React from 'react';
import{ Button } from 'reactstrap'
import {Link} from 'react-router-dom'
import logo from '../images/big_logo.png'

class HomeLayout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menu:[
                {
                    label:"Breakfast",
                    btntxt: "Go to breakfast",
                    path: "1",
                    desc: "Breakfast burritos, breakfast wraps, and omelets."
                },
                {
                    label:"From the Grill",
                    btntxt: "See from the grill",
                    path: "2",
                    desc: "Burritos, wraps, salads, hamburgers, and rice bowls."
                },
                {
                    label:"Drinks",
                    btntxt: "See juices",
                    path: "4",
                    desc: "Smart juices, smoothies, shakes, and cooffee."
                }
            ]
        }
    }
    render(){
        const menu_items = this.state.menu.map((item) => {
            return(
                <li>
                    <div>
                        <img src={require(`../../assets/images/menu_item${item.path}.jpg`)}></img>
                    </div>
                    <h3>{item.label}</h3>
                    <h5>{item.desc}</h5>
                    <div>
                        <Button color="primary">{item.btntxt}</Button>
                    </div>
                </li>
            )
        })
        return(
            <div>
                <div className="homeStyle">
                    <ul>
                        <li>
                            <img src={require('../../assets/images/slogan.png')}></img>
                        </li>
                        <li>
                            <div>Be Healthy, Live Well</div>
                        </li>
                        <li>
                            <div>Eat Natural.</div>
                        </li>
                        <li>
                            <Link to='/Menu'><Button color="primary">View Menu</Button></Link>{' '}
                            <Button color="primary">Order Online</Button>{' '}
                        </li>
                    </ul>
                </div>
                <div className="home_menu_style">
                    <h1>Menu</h1>
                    <ul>
                        {menu_items}
                    </ul>
                </div>
                <div className="home_about_style">
                    <h1>About Us</h1>
                    <div>
                        <img src={logo} alt="logo"></img>
                        <div>NATURAL SELECTION is committed to being an essential part of your health by providing you with fresh, wholesome and delicious food.</div>
                        <div>Every meal that we serve is made of the highest quality and freshest ingredients. We are as passionate about taste as we are about serving you with quality food you can trust.</div>
                        <div>We use cage free organic eggs.We only serve ORGANIC, in-season vegetables, fruits and grains. We craft our signature dressings individually to create the perfect balance in every bite.</div>
                    </div>
                </div>
                <div className="home_hours_style">
                    <div>HOURS OF OPERATION</div>
                    <div>Mon – Fri 8 am-7pm | </div>
                    <div>Sat 9am – 4pm | </div>
                    <div>Sun Closed</div>
                </div>
            </div>
        )
    }
}

export default HomeLayout;