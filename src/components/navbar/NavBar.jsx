import { useState } from "react"
import "./navBar.css"

const NavBar = () => {
  const [page, setPage] = useState("home");

  const handlePage = () =>{
    setPage("About")
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
            <h3 className="nav" onClick= {handlePage} style = {{textDecoration: page === "About" ? "underline":""}}>ABOUT</h3>
            <h3 className="nav" onClick= {handlePage2} style = {{textDecoration: page === "WeDo" ? "underline":""}}>WHAT WE DO</h3>
            <h3 className="nav" onClick= {handlePage3}   style = {{textDecoration: page === "WeHelp" ? "underline":""}}>WHO WE HELP</h3>
            <h3 className="nav" onClick= {handlePage4} style = {{textDecoration: page === "Quote" ? "underline":""}}>QUOTE</h3>
            <h3 className="nav" onClick= {handlePage5}  style = {{textDecoration: page === "Contact" ? "underline":""}}>CONTACT</h3>
        </div>

        
       
    </div>
  )
}

export default NavBar