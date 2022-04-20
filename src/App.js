import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer, toast, Slide } from 'react-toastify';
import {useSelector} from 'react-redux'
import Header from './components/commons/header/Header';
import Post from './components/feed/posts/Post';
import InfoCard from './components/feed/InfoCard/InfoCard';
import Login from './components/login/Login';
import EditProfile from './components/profile/myProfile/EditProfile';
import UserProfile from './components/profile/userProfile/UserProfile';

toast.configure();

function App() {
  const updateProfile = useSelector(state => state.login)
  const{
    loggedIn
  }=updateProfile

  return (
    <Router>
      <ToastContainer transition={Slide} />
      <Routes>
        <Route path='/buzz' element={
          <Login/>
        }>
        </Route>
      </Routes>
      <Routes>
        <Route path='/feed' element={
          <Header/>}>
        </Route>
        <Route path='/userProfile' element={
          <UserProfile userType="user"/>}/>
        <Route path='/editProfile' element={
          <UserProfile userType="self"/>}/>
        {/* <Route path='/editProfile' element={
          <EditProfile userType="self"/>}/> */}
      </Routes>
    </Router>    
    // <Post />
    // <InfoCard />
    // <Extra />
  );
}

export default App;
