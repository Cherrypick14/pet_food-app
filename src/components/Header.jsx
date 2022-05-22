import React from 'react'
import '../styles/header.css'

import { Container,InputGroup, Button } from 'reactstrap'


const Header = () => {
  return <header className='header'>
      
      <Container fluid>
      <div className="navigation">
               <div className="logo">
                   <h5>Pet.<span className='logotitle'>World</span></h5>
               </div>
               <div className="nav-center"> 
                
                  <InputGroup className="mb-3 justify-content-center pt-4 ">
                      <span className='formIcon'><i class="ri-search-line"></i></span>
                         <input className="formheader w-65"
                           placeholder="What Are You Looking For..."
                      />
                 <Button variant="outline-secondary" id="button-addon2" >
                         ctrl+k
                  </Button>
                 </InputGroup>
               
               </div>
               <div className="nav-right">  
                 <ul className="nav-right-link">
                    <li className="nav-right-link-items">
                       <i class="ri-contacts-line">&nbsp;&nbsp;<span>Sign Up</span></i>
                       
                       </li>
                      <li className="nav-right-link-items">
                      <i class="ri-question-line">&nbsp;&nbsp;<span>Help</span></i>
                
                      </li>
                      <li className="nav-right-link-items">
                      <i class="ri-shopping-bag-line">&nbsp;&nbsp;<span>Cart</span></i>
            
                      </li>
                 </ul> 
               </div>
           </div>
          </Container>    

  </header>
}

export default Header