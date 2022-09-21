import Banner from "../../components/banner/Banner"
import Featured from "../../components/featured/Featured"
import HomeDisp from "../../components/homeDispl/HomeDisp"
import NavBar from "../../components/navbar/NavBar"
import WeDoBox from "../../components/weDoBoxes/WeDoBox"
import "./home.css"

const Home = () => {
  return (
    <div className="container">
        <Banner/>
        <Featured/>
        <NavBar/>
        <HomeDisp/>
        <WeDoBox/>
        
        
        

    </div>
  )
}

export default Home