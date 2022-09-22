import { useState } from "react"
import "./navBar.css"
import {Link} from "react-router-dom"

const NavBar = () => {
  const [page, setPage] = useState("Home");

  const handlePage = () =>{
    setPage("Home")
  }
  const handlePage2 = () =>{
    setPage("WeDo")
  }
  const handlePage3 = () =>{
    setPage("WeHelp")
  }
  const handlePage4 = () =>{
    setPage("Quote")
  }
  const handlePage5 = () =>{
    setPage("Contact")
  }
  

  return (
    <div className="navbar">
        <div className="leftSideNav">
  
        <h1 className="logo mont">A<span style={{fontSize: "1.5rem", verticalAlign: "middle", color: "white", textShadow: "none"}}>merican</span><span className="oppo">C</span><span style={{fontSize: "1.5rem",  verticalAlign: "middle", color: "white", textShadow: "none"}}>ommunications</span> </h1>

        </div>

        <div className="rightSideNav">
          <Link className="link"  onClick= {handlePage}  to = "/">
          <h3 className="nav" style = {{textDecoration: page === "Home" ? "underline":""}}>HOME</h3>

          </Link>
            <Link className="link" onClick= {handlePage2} to = "/wedo">
            <h3 className="nav"  style = {{textDecoration: page === "WeDo" ? "underline":""}}>WHAT WE DO</h3>

            </Link>
            
            <h3 className="nav" onClick= {handlePage3}   style = {{textDecoration: page === "WeHelp" ? "underline":""}}>WHO WE HELP</h3>
            <h3 className="nav" onClick= {handlePage4} style = {{textDecoration: page === "Quote" ? "underline":""}}>QUOTE</h3>
            <h3 className="nav" onClick= {handlePage5}  style = {{textDecoration: page === "Contact" ? "underline":""}}>CONTACT</h3>
        </div>

        
       
    </div>
  )
}

export default NavBar