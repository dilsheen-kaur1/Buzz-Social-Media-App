import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Post from './components/feed/posts/Post';
import InfoCard from './components/feed/InfoCard/InfoCard';
import Login from './components/login/Login';
import SignIn from './components/login/SignIn';
function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path='/' element={
    //       <Login/>
    //     }>
    //     </Route>
    //   </Routes>
    // </Router>
    // <Post />
    <InfoCard />
  );
}

export default App;
