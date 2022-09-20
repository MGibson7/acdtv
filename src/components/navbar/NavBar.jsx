import "./navBar.css"

const NavBar = () => {
  return (
    <div className="navbar">
        <div className="leftSideNav">
        <h1 className="logo mont">A<span style={{fontSize: "1.5rem", verticalAlign: "middle", color: "white", textShadow: "none"}}>merican</span><span className="oppo">C</span><span style={{fontSize: "1.5rem",  verticalAlign: "middle", color: "white", textShadow: "none"}}>ommunications</span> </h1>

        </div>

        <div className="rightSideNav">
            <h3 className="nav">ABOUT</h3>
            <h3 className="nav">WHAT WE DO</h3>
            <h3 className="nav">WHO WE HELP</h3>
            <h3 className="nav">QUOTE</h3>
            <h3 className="nav">CONTACT</h3>
        </div>

        
       
    </div>
  )
}

export default NavBar