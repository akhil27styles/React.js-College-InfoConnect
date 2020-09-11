import React,{useEffect} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import HomePage from './containers/HomePage'
import LoginPage from './containers/LoginPage'
import Detail from './campusCards/Deatil'
import RegisterPage from './containers/RegisterPage'
import Profile from './componenets/Profile/Profile'
import PrivateRoute from './componenets/PrivateRoute'
import Charts from './campusCards/Charts/LineChart'
import Contact from './containers/Contact/Contact'
import {useDispatch,useSelector} from 'react-redux';
import {isLoggedInUser} from './actions/actions'
import About from './containers/About/About'
import  './App.css'
import EditProfile from './componenets/Profile/EditProfile'
import Error from './componenets/Error404/index'
import Relevent from './campusCards/Relevent'
import PlacementNotice from './campusCards/PlacementNotice'
const App = () => {
const auth = useSelector(state => state.auth)
  const dispatch=useDispatch()
  useEffect(() => {
    if(!auth.authenticated){
        dispatch(isLoggedInUser())
    }
  }, []);
  return (
    <div>
      
      <Router>
        {/* only log in user can see */}
        <Switch>  
        <PrivateRoute path="/" exact component={HomePage}></PrivateRoute>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/signup" component={RegisterPage}></Route>
        <Route exact path="/detail/:id" component={Detail}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/charts" component={Charts}></Route>
        <Route exact path="/About" component={About}></Route>
        <Route exact path="/relevent" component={Relevent}></Route>
        <Route exact path="/placement" component={PlacementNotice}></Route>
        <Route  component={Error}/>
        </Switch>  
      </Router>
    
    </div>
  )
}

export default App
