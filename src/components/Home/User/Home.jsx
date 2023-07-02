import '../../../styles/Home.scss'
import { Button, TextField } from '@mui/material'
import { useEffect } from "react";

const Home = () => {

  // sample API call from the JSON-Server
  useEffect(() => {
    fetch("http://localhost:5173/api/products")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  // API Call code End

  return (
    <div className='home'>
      <div className="homeContainer">
        <div className="containerHeading">
          <h2 className="headingText">Welcome to JS Brew</h2>
        </div>
        <div className="containerBody">
          <div className="bodyInput">
            <p className="inputText">Enter your details to get started</p>
            <TextField id="outlined-basic" label="Your name" variant="outlined" />
            <TextField id="outlined-basic" label="Mobile" variant="outlined" />
            <TextField id="outlined-basic" label="Table Id" variant="outlined" />
          </div>
          <div className="containerButton">
            <Button variant="contained" color="primary">
              ORDER NOW
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home