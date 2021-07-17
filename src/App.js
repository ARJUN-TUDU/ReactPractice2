
import './App.css';
import Header from './components/Header';
import {Container,Row,Col} from 'react-bootstrap';
import Homescreen from './components/screens/Homescreen';
import BlogScreen from './components/screens/BlogScreen';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Tours from './components/Tours';
import TourScreen from './components/screens/TourScreen';
import './w3css.css';



function App() {
  return ( 
  <Router>
    <header>
      <Header/>
    </header>



  

    
    

    
    <Container className=" p-5 rounded   " >
         <Route path = "/" component={Homescreen} exact className="p-5"/>
         <Route path = "/tour/:id" component={TourScreen}/>
     </Container>
    


  <p className='p-2'></p>
      <Container className=" shadow p-5"> 
        <h1>Blogs</h1>
        <hr></hr>
        <BlogScreen/>
      </Container>
     

   </Router>

  );
}

export default App;
