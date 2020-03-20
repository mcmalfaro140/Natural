import React from 'react';
//import FlatList from 'flatlist-react';
//import {List} from 'react-native-elements';
let foodMenu = [{food:"Breakfast"},{ food: "From the Grill"}, {food:"Salads"},{food:"Wraps"},{food: "Bowls"},{food:"Drinks"},];



class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            breakfast :[
                {path: "1",name: "Breakfast Sandwich", ingredients: "Eggs, parmesan cheese, tomato, basil, wheat bread", price: "$10.50 + tax"},
                {path: "2",name: "Lunch Sandwich", ingredients: "Eggs, parmesan cheese, tomato, basil,wheat bread", price: "$11.50 + tax"},
                {path: "3",name: "Dinner Sandwich", ingredients: "Eggs, parmesan cheese, tomato, basil,wheat bread", price: "$12.50 + tax"},
                {path: "3",name: "Breakfast Sandwich", ingredients: "Eggs, parmesan cheese, tomato, basil, wheat bread", price: "$10.50 + tax"},
                {path: "5",name: "Lunch Sandwich", ingredients: "Eggs, parmesan cheese, tomato, basil,wheat bread", price: "$11.50 + tax"},
                {path: "1",name: "Dinner Sandwich", ingredients: "Eggs, parmesan cheese, tomato, basil, wheat bread", price: "$12.50 + tax"}
            ]
        }
    
    }
    render(){

       const item = foodMenu.map((e, index) => {
           return(
               <div>
                 <ul>{e.food}</ul>
               </div>
           )
        })

        const dishes = this.state.breakfast.map((item) =>{
            return (
                <div className="img">
                    <img  src={require(`../images/breakfast${item.path}.jpg`)}/>
                    <ul>{item.name}</ul>
                    <ul>{item.ingredients}</ul>
                    <ul>{item.price}</ul>
                </div>
            )
        })

        return(
            <div  className="menu" >
                <h1>Menu</h1>
                <ul>{item}</ul>
                <div >
                  Dishes
                  <ul>{dishes}</ul>
                </div>
            </div>
            
        );
    }



}

export default Menu;