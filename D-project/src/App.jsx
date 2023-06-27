import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';
import Footer from'./components/Footer';
import SignUp from './components/SignUp';
import Privatecomp from './components/Privatecomp';
import Login from './components/login';
import Addproduct from './components/Addproduct';
import ProductList from './components/ProductList';
import Update from './components/Update';


function App() {

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      
      <Route element={<Privatecomp/>}>
      <Route path='/' element = {<ProductList/>}/>
      <Route path='/Add-product' element = {<Addproduct/>}/>  
      <Route path='/Update/:id' element = {<Update/>}/>
      <Route path='/Log-Out' element = {<h1>logout </h1>}/>
      <Route path='/Profile' element = {<h1>Profile </h1>}/>
      </Route>
      <Route path='/signUp' element = {<SignUp/>}/>
      <Route path='/login' element = {<Login/>}/>

        

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
