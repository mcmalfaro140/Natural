import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import Fecha from '../images/flecha.png'
import FooterText from '../images/footerText.png'
import Bag from '../images/bag.png'

class Footer extends React.Component {
    render(){
        return(
            <div className="footer">
               <div>
                   <div>
                        <span><img src={Fecha}></img></span>
                        <span><img src={FooterText}></img></span>
                        <span><img src={Bag}></img></span>
                    </div>
               </div>
               <div>
                    <span>© Natural Selection 2020</span>
                    <div>
                        <span><FontAwesomeIcon icon={faTwitter} /></span>
                        <span><FontAwesomeIcon icon={faFacebook} /></span>
                        <span><FontAwesomeIcon icon={faInstagram} /></span>
                    </div>
               </div>
            </div>
        )
    }
}

export default Footer;