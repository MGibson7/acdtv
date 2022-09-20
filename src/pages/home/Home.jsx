import Banner from "../../components/banner/Banner"
import Featured from "../../components/featured/Featured"
import HomeDisp from "../../components/homeDispl/HomeDisp"
import NavBar from "../../components/navbar/NavBar"
import "./home.css"

const Home = () => {
  return (
    <div className="container">
        <Banner/>
        <Featured/>
        <NavBar/>
        <HomeDisp/>
        
        

    </div>
  )
}

export default Home