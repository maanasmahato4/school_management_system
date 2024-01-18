import { Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';

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
