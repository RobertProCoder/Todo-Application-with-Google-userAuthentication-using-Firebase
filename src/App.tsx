import React from 'react';
import './css/App.css';
import './css/post.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { Login } from './pages/Login';
import { Main } from './pages/main-post/Main';
import { Navbar } from './components/Navbar';
import { CreatePost } from './pages/create-post/CreatePost';


function App(){
  return (
    <div className="App">
      <Router>
<Navbar/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Main/>}/>
      <Route path='/createpost' element={<CreatePost/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
