import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from 'axios';
import { useState } from "react";

function HomePage() {
  const [text,setText] = useState('');

  const handleSubmit = () => {
    axios.post('http://localhost:5000/api/data',{text})
    .then(
      res => {
        console.log(res.data.message);
      }
    )
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <>
      <Box autoComplete="off" style={{margin:"10px"}}>
        <TextField
          id="standard-multiline-static"
          label="Create a post"
          multiline
          rows={4}
          placeholder="Eg : Layoffs are everywhere :)"
          variant="standard"
          style={{width:"80%"}}
          type="text"
          value={text}
          onChange={e => {
            setText(e.target.value)
          }}
        />
      </Box>
      <Button 
      variant="contained"
      style={{margin:"10px"}}
      onClick={handleSubmit}
      >Post</Button>
    </>
  );
}

export default HomePage;


