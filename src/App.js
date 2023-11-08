
import './Appa.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Details from './Pages/Details';
import Alert from './components/Alert';
import GC from './components/GC';

function App() {
  return (
    <>

  <div>
  <Navbar/>
  </div>

<BrowserRouter>

<Routes>


<Route path='/' element={<Login />}></Route>
 <Route path='/signup' element={<Signup />}></Route>
 <Route path='/StudentDetails' element={<Details />}></Route>
 <Route path='/Alertmessage' element={<Alert />}></Route>
 <Route path='/Generatecertificate' element={<GC />}></Route>


</Routes>

</BrowserRouter>


 </>
  );
}

export default App;
