import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import styles from '../../styles/Home.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../globalState/storeSlices/counterSlice';

const Home = () => {
  
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className={styles.home}>
      <Button variant="outlined" >Hello world! - let build the fourth Unicorn 🚀</Button>
      <Link to="/login">
        <Button variant="contained" endIcon={<SendIcon />} >Go to Login</Button>
      </Link>
      {/* create a counter with increment and decrement button */}
      <Button variant="contained" color="success" onClick={() => dispatch(increment())} >Increment</Button>
      {/* text for counter */}
      <p>{count}</p>
      <Button variant="contained" color="error" onClick={() => dispatch(decrement())} >Decrement</Button>

    </div>
  )
}

export default Home