import Banner from "../../components/banner/Banner"
import NavBar from "../../components/navbar/NavBar"
import WeDoBox from "../../components/weDoBoxes/WeDoBox"
import "./weDo.css"

const WeDo = () => {
  return (
    <>
    <Banner/>
        <NavBar/>

<div className="weDoContain">
    <WeDoBox/>
</div>
    </>
    
  )
}

export default WeDo