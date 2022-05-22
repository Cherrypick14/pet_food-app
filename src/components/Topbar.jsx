import React, {useState} from 'react'
import {
        NavItem,
        Navbar,
        NavbarToggler,
        Collapse,
        NavLink,
        Nav, } from 'reactstrap'

const Topbar = ({data}) => {
  return (
    <div className="mainmenu d-flex">
         {
          data.map((item, index)=>(
           <NavItems
            key={index}
            type={item.type}
            day={item.day}
            categories={item.categories}
           />

          ))
         }
    </div>
  )
}
const NavItems =({type, day, categories})=>{
    const[isOpen, setIsOpen] = useState(false) 
    return (
        <div style={{display:'block', width:550, padding:30}}>
         <Navbar expand="md">
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>     
                    <NavItem>
                            <NavLink href="#">{type}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">{day}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">{categories}</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
    </div>
    )
}

export default Topbar