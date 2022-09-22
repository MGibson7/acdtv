import './weDoBox.css'
import { useInView } from 'react-intersection-observer';

const WeDoBox = () => {
  const { ref, inView } = useInView({
    threshold: 0.5
  });
  



  return (
    <div className='weDoBoxContain'>
      <div ref = {ref} className={`box ${inView ? "show" : ""}`} style={{transitionDelay: "200ms"}}><img src="./dtv.png" alt=""  /> <h3>Authorized Retailer</h3>
      <h4>DIRECTV</h4>
      <p>We provide the #1 satellite tv service with DirecTV for your business. Our trained professionals know exactly the right package to maximize your return on your entertainment investment.</p></div>
      
      <div ref = {ref} className={`box ${inView ? "show" : ""}`} style={{transitionDelay: "400ms"}}><img src="./via.png" alt="" /> <h3>Authorized Retailer</h3>
      <h4>VIASAT</h4>
      <p>If your business is largely reliant on the internet then Viasat can make for an affordable backup to ensure you stay online and connected throughout a cable outage.</p></div>
      
      <div ref = {ref} className={`box ${inView ? "show" : ""}`} style={{transitionDelay: "600ms"}}><img className='issue' src="./cable.png" alt="" /> <h3>Licensed and Insured</h3>
      <h4>CUSTOM INSTALLS AND CABLING</h4>
      <p>No matter how big or what your business looks like, we have a cabling/installation solution for it! Non-Standard and custom may be terms that scare most companies and their techs but not our elite team.</p></div>
      <h3>In Need of another service or product for your business? Check with us we have partnerships with the best in the biz!</h3>


    </div>
  )
}

export default WeDoBox