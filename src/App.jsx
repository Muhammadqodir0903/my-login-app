import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import  Home  from './pages/Home/Home';
import Login from './pages/Login/Login';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
  
function App() {
  const navigate = useNavigate()
  const location = useLocation().pathname
  useEffect(()=>{
    let token = window.localStorage.getItem('token')
    if(token != 'muhammadqodir'){
      navigate('/login/signin' || '/login.signup')
    }
  },[location])
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login/:slug' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
