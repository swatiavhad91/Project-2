import React, { Component } from 'react';

 
  class AddImage extends Component {
  
   constructor() {
        super();
 
        this.state = {
            gender: ''
            
        };
      this.onRadioChange = this.onRadioChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      
    }
 
    onRadioChange = (e) => {
      this.setState({
        gender: e.target.value,
        
      });
         }
 
    onSubmit = (e) => {
      e.preventDefault();
      console.log("Selected gender is : ");
      console.log(this.state);

      
      }

     
  render() {
    return (
      <div>
      
        <div className="AddImage">
          
      <form onSubmit={this.onSubmit}>
          
        <label><b>UserName</b></label>
       <input type="text" name="username" placeholder="username" /><br></br><br></br>

       <label><b>Gender</b></label>
        <label>
        <input type="radio" id="Male" value="Male" checked={this.state.gender === "Male"}
      
      
         onChange={this.onRadioChange}   />
        <span>Male</span>
        </label>
        
 
        <label>
        <input type="radio" value="Female" checked={this.state.gender === "Female"} 
                
         onChange={this.onRadioChange} />
        <span>Female</span>
        </label><br></br><br></br>

 
       <button type="submit">submit</button> 
      {/* <button type="submit" >Check Gender</button> */}    
     
       </form> 
    </div>
   
    </div>

    );
  }
}

export default AddImage;