import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Layout from '../../componenets/Layout'
import {useDispatch,useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { signin} from '../../actions/auth.actions'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './style.css'
import Footer from '../../campusCards/Footer/Footer';
const useStyles = makeStyles({
    root: {
      maxWidth: 545,
      marginLeft:800,
      marginTop:15,
    },
    content:{
        margin:110,
        marginLeft:150
    },
    button:{
        marginLeft:50,
        marginTop:30,
        padding:5,
    }
  });
  toast.configure();
const LoginPage = (props) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
     const dispatch = useDispatch();
     const auth=useSelector(state=>state.auth);
    const userLogin=(e)=>{
        e.preventDefault();
        if(email===""){
          toast.warn('Email is Require! ',{position:toast.POSITION.TOP_CENTER});
            return;
        }
        if(password===""){
          toast.warn('Password is Require! ',{position:toast.POSITION.TOP_CENTER});
            return;
        }
        dispatch(signin({email,password}));
    }

    if(auth.authenticated){
        return <Redirect to={"/"}/>
    }
    return (
        <>
        <div className="bg-image">

        <Layout/>
        <br/>  <br/><br/> <br/> <br/>  
        <Card className={classes.root}>
      
      <CardActionArea>
       
        <CardContent className={classes.content}>
        <h2>Login Here</h2>
          <Typography variant="body2" color="textSecondary" component="p">
          College-InfoConnect
             Login 
          {/* <form onSubmit={userLogin}> */}
          <TextField id="standard-basic" name="email" label="Email" type="email" value={email} 
               onChange={(e)=>setEmail(e.target.value)} />
               <br/>
           <TextField id="standard-basic" label="Password" name="password" type="password" 
               value={password} 
               onChange={(e)=>setPassword(e.target.value)} />
               {/* </form> */}
          </Typography>
          <CardActions>
        <Button className={classes.button} size="small" color="primary"  variant="contained" onClick={userLogin}>Log In</Button>
      </CardActions>
      <p style={{color:"#1D4975"}}>Didn't Have an Account?<Link to ="/signup">Register</Link></p>
    </CardContent>
      </CardActionArea>
     
    </Card>
      <br/><br/>  <br/><br/>  <br/><br/>  <br/><br/>  <br/>
     </div>
     <Footer/>
     </>
    )
}

export default LoginPage
