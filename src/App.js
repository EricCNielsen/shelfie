import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header'
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inventory:[]
    }
    this.getInventory=this.getInventory.bind(this)
  }
  
  componentDidMount() {
    this.getInventory()
  }

  getInventory() {
    axios.get('/api/inventory').then(res => { console.log(res.data)
      this.setState({
        inventory:res.data
      })
    })
  }

  render() {
    console.log(2222, this.state, this.props)
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory}/>
        <Form getInventory={this.getInventory} />
      </div>
    );
  }
}

export default App;
