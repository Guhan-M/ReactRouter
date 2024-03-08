import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/index.css"
function Dashboard() {
    return <>
    <div style={{backgroundColor:"whitesmoke", padding:"5px", borderRadius:"20px"}}>
     <Nav justify variant="pills" className='h11'>
      <Link style={{textDecoration:" none"}} to="/"><Nav.Item className='h22'>All</Nav.Item></Link>
      <Link style={{textDecoration:" none"}} to="/carrer"> <Nav.Item className='h22'>Carrer</Nav.Item></Link>
      <Link style={{textDecoration:" none"}} to="/cybersecurity"> <Nav.Item className='h22'>Cyber Security</Nav.Item></Link>
      <Link style={{textDecoration:" none"}} to="/datascience"> <Nav.Item className='h22'>DataScience</Nav.Item></Link>
      <Link style={{textDecoration:" none"}} to="/full-stack"> <Nav.Item className='h22'>Full Stack</Nav.Item></Link>
    </Nav>
    </div>
      </>
  }
  
  export default Dashboard;