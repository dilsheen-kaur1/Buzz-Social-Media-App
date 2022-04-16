import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
    <SignIn />
    
  );
}

export default App;
