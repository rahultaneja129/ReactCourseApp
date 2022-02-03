import logo from './logo.svg';
import './App.css';
import {Button, Container, Row, Col} from "reactstrap"
import {ToastContainer,toast} from "react-toastify"
import Home from "./components/Home"
import Course from './components/Course';
import AllCourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Allcourses from './components/Allcourses';

function App() {

  const btnHandle =()=>
  {
    toast.error("done",{position:"top-center"})
  }
  return (  
    <div>
      <Router>
      <ToastContainer />
      <Header/>
     <Container>
       <Row>
         <Col md={4}>
          <Menus />
         </Col>
         <Col md={8}>
           <Routes>         
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/add-course" element={<AddCourse/>}/>
          <Route exact path="/view-courses" element={<Allcourses/>} />
          </Routes>
         </Col>
       </Row>
     </Container>
      </Router>
    </div>
     
  );
}

export default App;
