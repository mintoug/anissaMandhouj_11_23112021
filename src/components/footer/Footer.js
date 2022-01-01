import React, { Component } from 'react'
import "./Footer.css"
import logo_footer from  "../../assets/logo_footer.png"

 class Footer extends Component {
    render() {
        return (
            <footer>
                
                <img src={logo_footer} alt="Kasa" />
                
                <p>© 2021 Kasa. Tous droits réservés</p>
            </footer>
        )
    }
}

export default Footer