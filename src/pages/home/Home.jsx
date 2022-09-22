
import Carousel from "../../components/carousel/Carousel"
import Featured from "../../components/featured/Featured"
import HomeDisp from "../../components/homeDispl/HomeDisp"

import WeDoBox from "../../components/weDoBoxes/WeDoBox"
import "./home.css"

const Home = () => {
  return (
    <div className="container">

        <Featured/>

        <HomeDisp/>
        <WeDoBox/>
        <Carousel/>
        
        
        

    </div>
  )
}

export default Home