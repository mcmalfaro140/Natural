import React from 'react';
import{ Button } from 'reactstrap'

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
                            <Button color="primary">View Menu</Button>{' '}
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
                <div className="home_menu_style">
                    <h1>About Us</h1>
                </div>
            </div>
        )
    }
}

export default HomeLayout;