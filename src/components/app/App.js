import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Library imports
import React from 'react';
import NavBar from '../navbar/NavBar'
import InfoCard from '../body/card/InfoCard'
import MainFooter from '../footer/MainFooter'
import MainCarousel from '../body/carousel/MainCarousel'
import { Container, Row, Col } from 'reactstrap';
//import { createStore } from 'redux'
//Components

//import ShowUs from '../showUs/ShowUs'
//<ShowUs></ShowUs>
//import Counter from '../body/redux-tuto/Counter'

//Reducers
//import RedCounter from '../../reducers/RedCounter'

//const store = createStore(RedCounter);
//store.subscribe(Counter);

const App = () => (
  <div>
    <header>
      <NavBar></NavBar>
    </header>
    <body>
    <MainCarousel></MainCarousel>        
      <Container>
        <br></br>       
        <Row>
          <Col><InfoCard></InfoCard></Col>
          <Col><InfoCard></InfoCard></Col>          
          <Col><InfoCard></InfoCard></Col> 
        </Row>
        </Container>
    </body>
    <br></br>
    <MainFooter></MainFooter>
    
  </div>
);

export default App;
