import { Routes, Route } from 'react-router-dom';
import DashBoard from './pages/dashboard/DashBoard';
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';
import Profile from './pages/profile/Profile';

function App() {
	return (
  <Routes>
    <Route path='/' element={<DashBoard/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/profile' element={<Profile/>}/>
  </Routes>
  );
}

export default App;
