// Code by Amol Vaze on 22 June 2020

// Sample to do app for addding and deleting items to the list from UI.

import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component() {
 
  constructor(props) {
    super(props);
    this.state = {
      newItem: "" ,
      list: []
    };
  }
 
// function to respond change input  
updateInput(key, value) {
   
  this.setState({
    
    [key]: value 

  });
   
}

// function to remove an item from the list.
deleteItem(id) {
  const list = [...this.state.list];
  const updatedList = list.fliter( item => item.id !== id );
  this.setState({list: updatedList});
}

// function to add new item 
  addItem() {
 const newItem = {
    id: 1 +  Math.random(),
    value : this.state.newItem.slice()
 };

  // addding new item to the list and then clearning the input box
  const list = [...this.state.list];
  list.push(newItem);
  this.setState({
    list,
    newItem: " "
  });

  }

render() {
  return (
    <div className="App">
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
               onClick = {  () => this.addItem() }

             >

              Add Item </button> 
              <br/>
               <ul>
                 {this.state.list.map(item => {
                    return(
                      <li key = {item.id}> 
                       {item.value}
                       <button> 
                      onClick = { () => this.deleteItem(item.id) }
                        X
                       </button>
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
