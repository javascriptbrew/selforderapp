import '../../../styles/Home.scss'
import { Button, TextField } from '@mui/material'

const Home = () => {

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