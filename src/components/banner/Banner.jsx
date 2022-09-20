import "./banner.css"
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Banner = () => {
  return (
    <div className="banner">
        <div className="centerB">
            <div className="centerBContent">
            <PhoneIcon className="phone"/>
            <h1>CALL US TODAY! 336-848-4077</h1>
            </div>
        

        </div>
        <div className="rightB">
    
            <FacebookIcon className="social"/>
            <LinkedInIcon className="social"/>
        </div>
        

        </div>

  )
}

export default Banner