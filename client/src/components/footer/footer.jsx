import React from 'react'
import icon from '../assets/icones/instagram_icon.png'
import icon_1 from '../assets/icones/whatsapp_icon.png'
import './footer.css'
const Footer = () => {
  return (
    <div >
       
            <div className='icon'>
                <div>
                    <img src={icon} alt="" />

                </div>
                <div>
                    <img src={icon_1} alt="" />
                </div>
            </div>
        </div>

  )
}

export default Footer