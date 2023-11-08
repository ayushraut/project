import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Details() {

  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleForm = (e) =>{
    const name =e.target.name;
    const value=e.target.value;
    console.log(inputs)
    setInputs(values => ({...values, [name]: value}))


  }
  const Handleclick=()=>{

    navigate("/Alertmessage")  
  
}


const handleclick=()=>{

navigate(`/Generatecertificate/${inputs.FirstName}`)

}



  return (
    

    
    <div>
      

      <div class="p-2 g-col-6">
      
      <p class="p-3 mb-3 bg-body-tertiary">
        
      
            <form className="row g-3" onSubmit={handleclick}>
           <div className="col-md-6 position-relative">
          
           
          <label className="required-field" for="validationTooltip01" class="form-label"><b>First Name</b></label>
          <input type="text" class="form-control" id="validationTooltip01" name="FirstName" value={inputs
          .FirstName || ""} onChange={handleForm} required/>
          <div class="valid-tooltip">
            Looks good!
          </div>
        </div>
       
      
      
        <div class="col-md-6 position-relative">
        
          <label className="required-field" for="validationTooltip02" class="form-label"><b>Middle Name</b></label>
       
        
          <input type="text" class="form-control" id="validationTooltip02" name="MiddleName" value={inputs
          .MiddleName || ""} onChange={handleForm} required/>
          <div class="valid-tooltip">
            Looks good!
          </div>
        </div>
       
        
      
      
        <div class="col-md-6 position-relative">
          <label className="required-field" for="validationTooltip02" class="form-label"><b>Last Name</b></label>
          <input type="text" class="form-control" id="validationTooltip02" name="LastName" value={inputs
          .LastName || ""} onChange={handleForm} required/>
          <div class="valid-tooltip">
            Looks good!
          </div>
        </div>
       

       <div class="col-md-6 position-relative">
          <label className="required-field" for="validationTooltip02" class="form-label"><b>PRN NO.</b></label>
          <input type="text" class="form-control" id="validationTooltip02" name="LastName" value={inputs
          .LastName || ""} onChange={handleForm} required/>
          <div class="valid-tooltip">
            Looks good!
          </div>
        </div>
      
      
        <div class="col-md-6 position-relative">
          <label className="required-field" for="validationTooltipUsername" class="form-label"><b>Email Id</b></label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
            <input type="text" class="form-control" id="validationTooltipUsername"  aria-describedby="validationTooltipUsernamePrepend" 
            value={inputs
          .Username || ""} onChange={handleForm} name="Username" required/>
            <div class="invalid-tooltip">
              Please choose a unique and valid username.
            </div>
          </div>
        </div>
      
      
      
        <div class="col-md-6 position-relative">
          <label className="required-field" for="validationTooltip02" class="form-label"><b>Address</b></label>
          <input type="text" class="form-control" onChange={handleForm} id="validationTooltip02"  name="Address" value={inputs
          .Address || ""}  required/>
          <div class="valid-tooltip">
            Looks good!
          </div>
        </div>
      
        <div class="col-md-6 position-relative">
          <label className="required-field" for="validationTooltip02" class="form-label"><b>Phone Number</b></label>
          <input type="text" class="form-control" onChange={handleForm} id="validationTooltip02" name="PhoneNumber" value={inputs
          .PhoneNumber || ""}  required/>
          <div class="valid-tooltip">
            Looks good!
          </div>
        </div>
        
        
      
        <div class="col-md-4 position-relative">
          <label className="required-field" for="validationTooltip01" class="form-label"><b>Roll No</b></label>
          <input type="text" class="form-control" onChange={handleForm} id="validationTooltip01" name="RollNo" value={inputs
          .RollNo || ""} required/>
          <div class="valid-tooltip">
            Looks good!
          </div>
        </div>
        
      
      
        <div class="col-md-4 position-relative">
          <label className="required-field" for="validationTooltip01" class="form-label"><b>Year</b></label>
          <input type="text" class="form-control" onChange={handleForm} id="validationTooltip01" name="Year" value={inputs
          .Year || ""} required/>
          <div class="valid-tooltip">
            Looks good!
          </div>
          <div class="invalid-tooltip">
            Please select a valid state.
          </div>
        </div>
       
      
      
        <div class="col-md-4 position-relative">
          <label className="required-field" for="validationTooltip01" class="form-label"><b>Division</b></label>
          
          <select class="form-select" id="validationTooltip04" onChange={handleForm} name="Division" value={inputs
          .Division || ""} required>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
          <div class="invalid-tooltip">
            Please select a valid state.
          </div>
          </div>
        
        
      
       
        <div class="col-md-4 position-relative">
          <label className="required-field" for="validationTooltip04" class="form-label"><b>Category</b></label>
          <select class="form-select" id="validationTooltip04" onChange={handleForm} name="Category" value={inputs
          .Category || ""} required>
            <option value="Cultural">Cultural</option>
            <option value="Technical">Technical</option>
            <option value="Sports">Sports</option>
          </select>
          <div class="invalid-tooltip">
            Please select a valid state.
          </div>
        </div>
       
      
      
        <div class="col-md-4 position-relative">
          <label className="required-field" for="validationTooltip01" class="form-label"><b>Activity Organizer</b></label>
          <input type="text" class="form-control" id="validationTooltip01" onChange={handleForm} name="ActivityOrganizer" value={inputs
          .ActivityOrganizer || ""} required/>
          <div class="valid-tooltip">
            Looks good!
          </div>
        </div>
       
      
      
        <div class="col-md-4 position-relative">
          <label className="required-field" for="validationTooltip01" class="form-label"><b>Activity Name</b></label>
          <input type="text" class="form-control" id="validationTooltip01" onChange={handleForm} name="AcitivityName" value={inputs
          .AcitivityName || ""} required/>
          <div class="valid-tooltip">
            Looks good!
          </div>
        </div>
        
      
      
        <div class="col-md-4 position-relative">
          <label className="required-field" for="validationTooltip04" class="form-label"><b>Position</b></label>
          <select class="form-select" id="validationTooltip04" onChange={handleForm} name="Position" value={inputs
          .Position || ""} required>
            <option value="1st Place">1st Place</option>
            <option value="2nd Place">2nd Place</option>
            <option value="3rd Place">3rd Place</option>
          </select>
          <div class="invalid-tooltip">
            Please select a valid state.
          </div>
        </div>
        
      
      
        <div class="col-md-4 position-relative">
          <label className="required-field" for="validationTooltip01" class="form-label"><b>Date</b></label>
          <input type="text" class="form-control" id="validationTooltip01" onChange={handleForm} name="Date" value={inputs
          .Date || ""} required/>
          <div class="valid-tooltip">
            Looks good!
          </div>
        </div>
        
      
      
        <div class="col-md-4 position-relative">
          <label className="required-field" for="validationTooltip04" class="form-label"><b>Level</b></label>
          <select class="form-select" id="validationTooltip04" onChange={handleForm} name="Level" value={inputs
          .Level || ""} required>
            <option value="National">National</option>
            <option value="International">International</option>
            <option value="Local">Local</option>
          </select>
          <div class="invalid-tooltip">
            Please select a valid state.
          </div>
        </div>
       
        <div id="myAlert" class="alert alert-success hide">
      
        
      
      
         <div className="text-center">
          <button onClick={Handleclick} className="btn btn-outline-success" type="submit">Submit & Generate Certificate </button>
          


           </div>
              </div>
             
              
              
            </form>
      
            </p>
            </div>


    </div>
  )
}
