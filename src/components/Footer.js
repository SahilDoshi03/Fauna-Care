import './css/Footer.css'
import logo from '../assets/fauna-care-logo.svg'
import instaIcon from '../assets/icons/square-instagram.svg'
import twitterIcon from '../assets/icons/square-twitter.svg'
import facebookIcon from '../assets/icons/square-facebook.svg'

export default function Footer(){
    return(
        <div className="footer container">
            <div className="pet-services-footer footer-column">
                <div className="pet-services-title-footer footer-title">
                    Pet Services
                </div>
                <ul className="pet-services-list-footer">
                    <li className="pet-services-list-items-footer">Grooming</li>
                    <li className="pet-services-list-items-footer">Foster Care</li>
                    <li className="pet-services-list-items-footer">Adopt</li>
                </ul>
            </div>
            <div className="social-media-footer footer-column">
                <img src={logo} alt="" className='footer-title'/>
                <ul className="social-media-list-footer">
                    <img src={instaIcon} alt="" />
                    <img src={twitterIcon} alt="" />
                    <img src={facebookIcon} alt="" />
                </ul>
            </div>
            <div className="about-us-footer footer-column">
                <div className="about-us-title-footer footer-title">
                    About Us
                </div>
                <ul className="about-us-list-footer">
                    <li className="about-us-list-items-footer">About</li>
                    <li className="about-us-list-items-footer">Contact Us</li>
                    <li className="about-us-list-items-footer">Health & Advice</li>
                </ul>
            </div>
        </div>
    )
}