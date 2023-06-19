import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import styles from "../../styles/Login.module.css"

const Login = () => {
  return (
    <div className={styles.login}>
      <Button variant="outlined" >Login page bolte...</Button>
      <Link to="/">
        <Button variant="contained" endIcon={<SendIcon />} >go back</Button>
      </Link>
    </div>
  )
}

export default Login