import React from 'react';
import { useParams } from 'react-router-dom';


export default function GC() {

  const {FirstName} = useParams();

  
  return (
    <div>
      
      <div class="outer-border">
     
<center>
    <nav className="navbar navbar-expand-lg bg-body-tertiary text-center">
  
    <div className="container justify-content-center">
      <a className="navbar-brand" href="#">
      
  
  <b>   <img style={{
    position:"absolute",
    top:'0',
    left:'0'
  }} src="logo2.jpeg" alt=""></img>   </b>
  
      </a>
  
    
      
      <div className="grid">
  
  <div className="row text-center">
      <div className=" ">  <center><h6>PROGRESSIVE EDUCATION SOCIETY'S</h6></center>  </div>
      </div>
  
      <div className="row">
      <div className="text-black"> <center><h3><b>MODERN COLLEGE OF ENGINEERING, PUNE-05</b></h3></center></div>
      </div>
  
  <div className="row">
      <div className=" "> <center><h6>Approved by AICTE, Affiliated to Savitribai Phule Pune University</h6> </center></div>
  </div>

  <div className="row">
      <div className=" "> <center><h6>NAAC Accredited with "A++" Grade</h6> </center></div>
  </div>

  <div className="row">
      <div className="text-black"> <center><h3><b>MCA Department</b></h3></center></div>
      </div>

      <div className="row">
      <div className="text-danger" > <center><h3><b>Certificate of Appreciation</b></h3></center></div>
      </div>

      <div className="row">
      <div className="text-success" > <center><h4><b>M-Technophilia 2K23</b></h4></center></div>
      </div>

      <div className="row">
      <div className=" "> <center> <p>    <u>    <b>     <h5>   {FirstName}  </h5> </b>   </u>   </p>  </center></div>
  </div>

<b/>    <b/>
  <div className="row">
      <div className=" "> <center>
        
        <h6>We appreciate you for your exceptional volunteer efforts!</h6>
        <h6>for <b>M-Technophilia under</b> under <b> M-Pulse </b> held on 28th & 29th April 2023 </h6>
        <h6>organised by <b> PES Modern College of Engineering,MCA department</b> in </h6>
        <h6>association with <b> Society for Data Science.</b> </h6>
        
         </center></div>
  </div>



  <div className="row">

  <div class="col-4">   <br/>
  
  <b> <img src="logo4.png" alt=""></img>  </b>
  <h6 style={{
    borderTop:"solid 1px"
  }}> Prof.Mrs A.Garkhedkar</h6>
      <h6>Co-ordinator(M-pulse)</h6>
      </div>



      <div class="col-4">    <br/>

       <img src="logo4.png" alt=""></img>   
         <h6 style={{
    borderTop:"solid 1px"
  }}> Prof.Dr.Mrs P.Mulay</h6>
      <h6>H.O.D(MCA)</h6>
       </div>

      <div class="col-4">    <br/>

       <b>   <img src="logo4.png" alt=""></img>   </b>
       <h6 style={{
    borderTop:"solid 1px"
  }}> Prof.Dr.Mrs K.R.Joshi</h6>
      <h6>Principal,MCOE</h6>
       </div>



      </div>
  </div>
  </div>
    
     
      

  </nav>
  </center> 

        </div>


    </div>
  )
}
