import "../../styles/Home.scss";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
} from "../../globalState/storeSlices/counterSlice";
import { useEffect } from "react";
import Topbar from "../Header";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // sample API call from the JSON-Server
  useEffect(() => {
    fetch("http://localhost:5173/api/products")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  // API Call code End
  return (
    <div className="home">
      {/**
Renders the Topbar component with the specified restaurant name and table number.
Example usage:
@component
@param {string} restroName - The name of the restaurant.
@param {number} tableNum - The table number.
<Topbar restroName={"Haldiram's"} tableNum={1} />
*/}
      <Button variant="outlined">
        Hello world! - let build the fourth Unicorn 🚀
      </Button>
      <Link to="/login">
        <Button variant="contained" endIcon={<SendIcon />}>
          Go to Login
        </Button>
      </Link>
      {/* create a counter with increment and decrement button */}
      <Button
        variant="contained"
        color="success"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      {/* text for counter */}
      <p>{count}</p>
      <Button
        variant="contained"
        color="error"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
      </div>
  );
};

export default Home;
