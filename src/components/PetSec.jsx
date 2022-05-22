import React from 'react'
import '../styles/petsec.css'

import { Container,Row,Col } from 'reactstrap'

const PetSec = () => {
  return <section className='pet-sec'>
 <Container>
          <Row>
              <Col lg='6' md='6'>
                  <div className="pet_content">
                    
                     <h1 className='pet-title'>Discover Our Pet Selection</h1> 
                          
                  </div>
              </Col>
              <Col lg='6' md='6'>
                  <div className="pet-img">
                      <img src={process.env.PUBLIC_URL + "/pet_food.png"} className="w-100"alt="profile" />
                  </div>
              </Col>
          </Row>
      </Container>
  </section>
}

export default PetSec