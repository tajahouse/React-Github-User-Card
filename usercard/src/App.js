import React from 'react';
import './App.css';
import UserData from "./components/UserData";
import axios from "axios";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      users:[]
    };
  }
    componentDidMount() {
      fetch("https://api.github.com/users/tajahouse")
      .then(res => res.json())
      .then(profile => this.setState({users: profile}))
      .catch(err=> console.log("Naw girl", err));
    
    };


    render() {
      console.log(this.state.users);
       return (
    <div className="App">
      <UserData users={this.state.users}/>     

    </div>  
       );
       }
  }


export default App;
