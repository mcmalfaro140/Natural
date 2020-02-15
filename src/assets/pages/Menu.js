import React from 'react';
//import FlatList from 'flatlist-react';
//import {List} from 'react-native-elements';
let foodMenu = [{food:"Breakfast"},{ food: "From the Grill"}, {food:"Salads"},{food:"Wraps"},{food: "Bowls"},{food:"Drinks"},];
let Breakfast = [{srcs: './images/chickenWrap.jpg',name: "Breakfast Sandwich", ingredients: "Eggs, parmesan cheese, tomato, basil", price: "$10.50 + tax"},
                 {srcs: './images/chickenWrap.jpg',name: "Lunch Sandwich", ingredients: "Eggs, parmesan cheese, tomato, basil", price: "$11.50 + tax"},
                 {srcs: './images/chickenWrap.jpg',name: "Dinner Sandwich", ingredients: "Eggs, parmesan cheese, tomato, basil", price: "$12.50 + tax"},
                 {srcs: './images/chickenWrap.jpg',name: "Breakfast Sandwich", ingredients: "Eggs, parmesan cheese, tomato, basil", price: "$10.50 + tax"},
                 {srcs: './images/chickenWrap.jpg',name: "Lunch Sandwich", ingredients: "Eggs, parmesan cheese, tomato, basil", price: "$11.50 + tax"},
                 {srcs: './images/chickenWrap.jpg',name: "Dinner Sandwich", ingredients: "Eggs, parmesan cheese, tomato, basil", price: "$12.50 + tax"}];




class Menu extends React.Component {

    render(){

       const item = foodMenu.map((e, index) => {
           return(
               <div>
                 <ul>{e.food}</ul>
               </div>
           )
        })

        const dishes = Breakfast.map((e, index) =>{
            return (
                <div className="img">
                    <img  src={require('../images/chickenWrap.jpg')}/>
                    <ul>{e.name}</ul>
                    <ul>{e.ingredients}</ul>
                    <ul>{e.price}</ul>
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