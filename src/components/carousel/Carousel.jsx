import "./carousel.css";
import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from "react";

const Carousel = () => {
    const imgArray = ["./gym.jpeg", "/barber.jpeg", "/sportsbar.jpeg", "./office.jpeg", "./rv.jpeg", "./hotel.webp"]
    const [width, setWidth] = useState(0);
    const carouselDiv = useRef();
    const { newRef, viewing } = useInView({
        threshold: 0.1
      });

    useEffect(()=>{
        setWidth(carouselDiv.current.scrollWidth - carouselDiv.current.offsetWidth);


    },[viewing]);

  return (
    <>
    <motion.div ref={carouselDiv}  className="carousel">
        <motion.div  ref = {newRef} initial={{x: 0}}
  animate={{x: -width}}
  transition={{x: {repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear"}}}   
          className="inner-carousel">
            {imgArray.map(image=>{
                return(
                    <motion.div className = "item" key={image}>
                        <img src={image}  alt = ""/>
                    </motion.div>
                )
            })}


        </motion.div>
        
        <h3>Sports Bars, Gyms, Offices, Hotels, RV Parks, Barber Shops, Salons, no matter your business type we're here for you!</h3>
    </motion.div>
    
    </>
    
  )
}

export default Carousel