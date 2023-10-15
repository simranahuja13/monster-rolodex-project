import React, { Component } from 'react'
import './App.css'
import { CardList } from './components/card-list/card-list.component'
import {SearchBox} from './components/serach-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  //  this.handleChange = this.handleChange.bind(this)

  }


  componentDidMount() { // renders on the DOM for the first time
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
handleChange=(e)=>{
  this.setState(({searchField:e.target.value}))
} 
// bind automatically attaches with arrow functions
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    // monsters = this.state.monsters
    return (
      <div className="App">
           <h1>Monsters Rolodex</h1>
         < SearchBox 
         placeholder= 'Search monsters'
         handleChange={this.handleChange}
         />
              {/* // target gives html elem */ }
              < CardList monsters = { filteredMonsters} >
              {/* <h1>Simmy</h1> Anything in between component is called children */ }

        </CardList >

      </div >
    );

  }
}


export default App;
