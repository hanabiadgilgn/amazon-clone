import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import LanguageIcone from "@material-ui/icons/Language"

function Footer() {
    return (
        <div className="footer">
            <Link to="/" className="footer__imag">
                <img
                    className="footer__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>
            <div class="footer__link">

            </div>

        
        </div>
        
        
    )
}

export default Footer
