import React, { Component } from 'react';
import Female_Card from '../Cards/Female_Card.png';
 
  class AddImage extends Component {
  
   constructor() {
        super();
 
        this.state = {
            gender: ''
            
        };
      this.onRadioChange = this.onRadioChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.AddImage=this.AddImage.bind(this);
    }
 
    onRadioChange = (e) => {
      this.setState({
        gender: e.target.value
      });
    }
 
    onSubmit = (e) => {
      e.preventDefault();
      console.log("Selected gender is : ");
      console.log(this.state);
        
    
    }

    AddImage=(e)=>{
       
        this.setState(
            <div className="container">
            <img src={Female_Card} alt=""/>
        </div>
        );
    }
  render() {
    return (
    <div className="AddImage">
      <form onSubmit={this.onSubmit}>
      
 
      <ul>
          <li>
              <input type="text" name="username" placeholder="username" />
          </li>
        <li>
        <label>
        <input type="radio" value="Male" checked={this.state.gender === "Male"} onChange={this.onRadioChange} />
        <span>Male</span>
        </label>
        </li>
 
        <li>
        <label>
        <input type="radio" value="Female" checked={this.state.gender === "Female"} onChange={this.onRadioChange} />
        <span>Female</span>
        </label>
        </li>
 
       </ul>
 
      {/* <button type="submit">Check selected gender on Console</button> */}
      <button type="submit" >Check Gender</button>
      <button type="submit" onClick={this.AddImage}> Add Cards</button>
      
      </form>
    </div>
    );
  }
}

export default AddImage;