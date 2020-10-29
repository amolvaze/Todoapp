// Code Developed by Amol

import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends React.Component {
 
  constructor() {
    super();
    this.state = {
      newItem: "" ,
      list: []
    };
    this.addItem = this.addItem.bind(this);
  }
 
// function to respond change input  
updateInput = (key, value) => {
   
  this.setState({
    
    [key]: value 

  });
   
}

//function to remove an item from the list.
deleteItem = (id) =>{
  const list = [...this.state.list];
  const updatedList = list.filter( item => item.id !== id );
  this.setState({list: updatedList});

}

// deleteItem = (id) => {
//   const list = [...this.state.list];
//   list.splice(id,1);
//   this.setState({list:list});
//   //console.log(id);
// }

// function to add new item 
  addItem() {
    //console.log(this.state.newItem.length);
  if(this.state.newItem === ''){
    alert("Please enter input: ");
    return;
  }
 const newItem = {
    id: 1 +  Math.random(),
    value : this.state.newItem.slice()
 };

  // addding new item to the list and then clearing the input box
  const list = [...this.state.list];
  list.push(newItem);
  this.setState({
    list,
    newItem: ""
  });

  }

render() {
  return (
    <div>
           <div>
             Please add your Item in list..
             <br />
             <input 
              type = "text"
              placeholder = " Please add your item here.."
              value = {this.state.newItem}
              onChange = {e => this.updateInput("newItem" , e.target.value)}
             />
             <button  
               onClick = { ()=> {this.addItem()}}

             >

              Add Item </button> 
              <br/>
               <ul>
                 {this.state.list.map(item => {
                    return(
                      <li key = {item.id}> 
                       {item.value}
                      <button onClick = { ()=> {this.deleteItem(item.id)}}>DELETE</button>
                      </li>
                    )
                 })}
               </ul>
              
           </div>
    </div>
  );
}
}

export default App;
