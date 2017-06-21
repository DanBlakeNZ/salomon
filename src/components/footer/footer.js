import React, {PropTypes} from 'react'
import CountrySelect from "react-country-select";
import Email from './Email'

const Footer = () => {
  return (
    <footer>
      <div className='footerWrapper'>
        <div className='footerRow'>
          <Email />
        </div>
        <div className='footerRow'>
          <div className='footerCol'>
            <h3>Stay Connected</h3>
            <ul>
              <li className='footerSocial'>
                <i className="fa fa-facebook" aria-hidden="true" />
              </li>
              <li className='footerSocial'>
                <i className="fa fa-twitter" aria-hidden="true" />
                </li>
              <li className='footerSocial'>
                <i className="fa fa-instagram" aria-hidden="true" />
              </li>
              <li className='footerSocial'>
                <i className="fa fa-youtube-play" aria-hidden="true" />
              </li>
            </ul>
          </div>
          <div className='footerCol'>
            <h3>About Salomon</h3>
            <ul>
              <li>Press Center</li>
              <li>Careers</li>
              <li>Find your dealer</li>
              <li>Subscribe to newsletter</li>
            </ul>
          </div>
          <div className='footerCol'>
            <h3>Access</h3>
            <ul>
              <li>Login as VIP</li>
              <li>Login as PRO</li>
              <li>Salomon TV</li>
            </ul>
          </div>

          <div className='footerCol'>
            <h3>Collection</h3>
            <ul>
              <li>Men / S/LAB Collection</li>
              <li>Men / Forces</li>
              <li>Men / Black Edition</li>
              <li>Men / Speedcross series</li>
              <li>Women / S/LAB Collection</li>
              <li>Women / Black Edition</li>
              <li>Women / Speedcross series</li>
              <li>kids / S/LAB Collection</li>
              <li>kids / Speedcross series</li>
            </ul>
          </div>
        </div>
      </div>
      <div id='legalSection'>
        <p>©2016 - Salomon S.A.S. | Privacy policy</p>
      </div>
    </footer>
  )
}


export default Footer
