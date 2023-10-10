
import { Button, Stack, TextField } from '@mui/material';

import './App.css';
import { useState } from 'react';


function App() {

  // state for principle amount //onChange={e=>setRate(e.target.value)}  getting value
  const [principle,setPrinciple]=useState("")

  // state for year
  const [rate,setRate]=useState("")

  // state for year
  const [year,setYear]=useState("")

  // state for interest
  const [interest,setInterest]=useState(0)


  
  const calculateInterest = (e)=>{
    // form submit ==> just showing the output and page is relooading   so  give an argument to arrow function  and use the preventDefault function
      // e.preventDefault()
       

      e.preventDefault()
      console.log(principle,rate,year);
      if(!principle || !rate || !year){
        alert("fill the Form conpletely !!!")
      }
      else{
        setInterest(principle*rate*year/100)
      }

  }
   const resetForm = ()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setInterest(0)
   }






  
  return (
    <>
      <div className="app">

        <div className='container'>
          <div className='heading-text'>
            {/* heading */}
            <h3 className='title'>SIMPLE <br /> CALCULATOR</h3>
            {/* <p className='title-para'>CALCULATE YOUR SIMPLE INTEREST</p> */}

          </div>

          <div className='amount-card'>

            <div className='card-text'>

              <h3 className='total-amount'>₹{interest}</h3>
              <p className='total-para'>total simple interest</p>

            </div>

          </div>
          <form onSubmit={calculateInterest}>
            {/* to hold text field */}
            <div className='text-fields'>
              {/* principle amount */}
              <div className='input'>
                <TextField  value={principle || ""} onChange={e=>setPrinciple(e.target.value)}
                className='outlined-basic' id="outlined-basic" label="Principle amount" variant="outlined" />
              </div>
              {/* interest */}
              <div className='input'>
                <TextField value={rate || ""} onChange={e=>setRate(e.target.value)} 
                className='outlined-basic' id="outlined-basic" label="Rate of interest (p.a)%" variant="outlined" />
              </div>
              {/* year */}
              <div className='input'>
                <TextField value={year || ""} onChange={e=>setYear(e.target.value)} 
                className='outlined-basic' id="outlined-basic" label="Time Period (yr)" variant="outlined" />
              </div>


            </div>
            <div  className='btn-group'>
              <Stack direction="row" spacing={2}>

                  <Button type='submit' className='btn' style={{backgroundColor:'black'}} variant="contained">Calculate</Button>
                  <Button onClick={resetForm} className='btn' variant="outlined">Rest</Button>
                    
              </Stack>
            </div>

          </form>

        </div>

      </div>

    </>

  );

}

export default App;
