import React from 'react';
import './App.css';
import UserData from "./UserData";

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
      console.log(this.state.users.login);
       return (
    <div className="App">
      <UserData users={this.state.users}/>     

    </div>  
       );
       }
  }


export default App;
