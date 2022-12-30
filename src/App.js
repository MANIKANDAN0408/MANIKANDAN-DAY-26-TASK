import { Button, TextField } from '@mui/material';
import './App.css';


function App() {

  return (
    <div className="App">
          <CreateUser />
    </div>
  );
}

 
function CreateUser() {

  return (
    <div>
      <h1 class="heading">ACCOUNT DETAILS</h1>

      <div className='text-box'>

        <TextField id="outlined-basic" label="Name"/>
        <TextField id="outlined-basic" label="Father Name"/>
        <TextField id="outlined-basic" label="Contact Number"/>
        <TextField id="outlined-basic" label="Email id"/>
        <TextField id="outlined-basic" label="District"/>
        <TextField id="outlined-basic" label="State"/>

        <Button variant="contained">Submit</Button>

      </div>

    </div>
  )
}

export default App;