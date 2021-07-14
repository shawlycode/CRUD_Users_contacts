import React, { Component } from "react";

class States extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "orlando",
      email: "orlando@gmail.com",
      age: "32",
    };
  }
   changeName = ()=>{
      this.setState({name:"micky", age:2, email:"micky@19.com"});
  }
  changeAge = (e)=>{
      e.preventDefault();
      alert("success");
      this.setState({age:0});
  }
  render() {
    return (
      <div>
        <h1>
          My name is {this.state.name} and you can contact me on  
          {this.state.email} and i am {this.state.age}
        </h1>
        <button type="button" onClick={this.changeName}>click me</button>
        <button type="submit" onClick={this.changeAge}>submit form</button>
      </div>
    );
  }
}
export default States;
