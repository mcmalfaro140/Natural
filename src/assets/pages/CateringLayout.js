import React from 'react';

class CateringLayout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cater: [
                {
                    title:"Wrap Tray",
                    desc: "Six wraps of your choice cut on fourths. Serves eight to ten people.",
                    price: "54.95",
                    path: "cater1"
                },
                {
                    title:"Sandwich Tray",
                    desc: "Six sandwiches or burgers cut in half. Serves eight to ten people.",
                    price: "54.95",
                    path: "cater1"
                },
                {
                    title:"Salad Bowl",
                    desc: "Your choice of any of our salads. Serves eight to ten people. **ADD Protein for $8.00",
                    price: "30.95",
                    path: "cater1"
                },
                {
                    title:"Fruit Tray",
                    desc: "Your choice of any of our salads. Serves eight to ten people.",
                    price: "24.95",
                    path: "cater1"
                },
            ]
        }
    }
    
    render(){
        const plates = this.state.cater.map((item, index) =>{
            return (
                <div>
                    <img src={require(`../../assets/images/${item.path}.jpg`)}alt="cater_img"></img>
                    <div>{item.title}</div>
                    <div>{item.desc}</div>
                    <div><span>${item.price}</span> + tax.</div>
                </div>
            )
        })

        return(
            <div className="catering_style">
                <h1>Catering</h1>
                <div >
                  <div>{plates}</div>
                </div>
            </div>
        )
    }
}

export default CateringLayout;