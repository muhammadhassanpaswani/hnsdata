import React from "react";
import Header from "../js/component/Header"
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Name : "",
        info: "",
        FEE :"",
        Students: []
      }
      this.handleInput = this.handleInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

    handleInput(event) {
      this.setState(
        {...this.state, [event.target.name]: event.target.value}
      );
    }
    
    handleSubmit(event) {
      event.preventDefault();
      const Students = { Name: event.target.Name.value, info: event.target.info.value,FEE: event.target.FEE.value }
      this.setState({...this.state, Students: [...this.state.Students,Students]});
    }
  
    render() {
      return (
        <div>
        <Header />
        <form className="form" onSubmit={this.handleSubmit}>
        
        <label>
            Student :
            <div>
            <input className="in" type="text" name="Name"   onChange={this.handleInput} />
             </div>         
            </label>
    
          <div>
          <label >
            class:
          </label>
          </div>
          <input className="in" type="number" name="info" onChange={this.handleInput} ></input> 
          <div className="radio">
          <label >
            FEE:
          </label>
        
          <input  type="radio" name="FEE" value="Paid" onChange= {this.handleInput} ></input>  Paid  
          <input  type="radio" name="FEE" value="Unpay" onChange= {this.handleInput} ></input>    Unpay
          
          </div>
          <div>
          <input className="btn" type="submit" value="Submit" />
          </div>
          </form>
        <div className="information">
          {this.state.Students.map(Students=> (
            <div className="main">
            
              <h1>Student name :<h3>{Students.Name}</h3></h1>
              <h2>Class:<p> {Students.info}</p></h2>
              <h2>FEE:<p>{Students.FEE}</p></h2>
            </div>
  
          ))}  
        </div>
        </div>
      );
    }
  }
  export default App;