import './App.css';
import {Header} from './component/Header';
import Page from './component/Page';
import About from './component/About';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './component/Footer';
function App() {

  return (
      <BrowserRouter>
      <Header name={"RoJana"}/>
      <Routes>
        <Route path='/' element={<Page/>}/>
        <Route path='/About' element={<About companyName={"RoJana"}/>}/>
      </Routes>
      <br/><br/><br/><br/><br/><br/>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
