import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField'
import Layout from '../../componenets/Layout'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {useDispatch,useSelector} from 'react-redux'
import {useHistory,Redirect} from 'react-router-dom'
import {signup} from '../../actions/actions'

import firebase from 'firebase'
import Footer from '../../campusCards/Footer/Footer';
toast.configure();
const useStyles = makeStyles({
    root: {
      maxWidth: 545,
      marginLeft:800,
      marginTop:20,
    },
    content:{
        margin:100,
        marginLeft:150
    },
    button:{
        marginLeft:50,
        marginTop:30,
        padding:15,
    }
  });
const RegisterPage = () => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [roll, setroll] = useState('');
    const [Branch, setBranch] = useState('');
    const dispatch=useDispatch();
    const classes = useStyles();
    const auth=useSelector(state=>state.auth);
    let history=useHistory()
   const registerContainer = (e) => {
    
    e.preventDefault();

    const user = {
      firstName,lastName,email,password,roll,Branch
    }
    if(firstName===""||lastName===""||email===""||password===""||roll===""||Branch===""){
      toast.warn('Please Provide All the Details ! ',{position:toast.POSITION.TOP_CENTER});
     }
    
    dispatch(signup(user))
  }


  if(auth.authenticated){
    return <Redirect to={`/`} />
  }
 
   
    return (
        <div className="bg-image">
        <Layout>
          <br/><br/> <br/> <br/> <br/> <br/> 
        <Card className={classes.root}>
      <CardActionArea>
       
        <CardContent className={classes.content}>
        <h2>Register Here</h2>
             <Typography variant="body2" color="textSecondary" component="p">
            College-InfoConnect
          <TextField id="standard-basic" label="FirstName"  name="firstname" type="text" 
               value={firstName} 
               onChange={(e)=>setfirstName(e.target.value)} />

<TextField id="standard-basic" label="LastName" type="text" 
               value={lastName} 
               onChange={(e)=>setlastName(e.target.value)} />

<TextField id="standard-basic" label="Email" type="text" 
               value={email} 
               onChange={(e)=>setemail(e.target.value)}/>

<TextField id="standard-basic" label="Password" type="password" value={password} 
               onChange={(e)=>setpassword(e.target.value)} />

<TextField id="standard-basic" label="RollNo" type="text" value={roll} 
               onChange={(e)=>setroll(e.target.value)} />
<br/><br/><br/>
<InputLabel htmlFor="age-native-simple">Branch</InputLabel>
        <Select
          native
          name="Branch" 
          type="text" 
          value={Branch} 
          onChange={(e)=>setBranch(e.target.value)} 
          inputProps={{
            name: 'Branch',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={'IT'}>IT</option>
          <option value={'CS'}>CS</option>
          <option value={'ECE'}>ECE</option>
          <option value={'EEE'}>EEE</option>
          <option value={'CIVIL'}>CIVIL</option>
          <option value={'Mecahnaical'}>Meach</option>
        </Select>
        </Typography>
          <CardActions>     
<Button variant="contained" color="primary" onClick={registerContainer}>Register </Button>
</CardActions>
<p style={{color:"#1D4975"}}>Already have an account <Link to ="/login">login</Link></p>
    </CardContent>
      </CardActionArea>
            </Card>
        </Layout>
        <br/>
        <Footer/>
        </div>

    )
}

export default RegisterPage
