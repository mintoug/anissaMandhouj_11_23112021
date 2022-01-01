import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Error404.css'

export default class Error404 extends Component {
    render() {
        return (
            <div className="error404">
                <h1 className="errorCode">404</h1>
                <h2 className="errorTxt">Oups ! La page que vous demandez n'existe pas.</h2>
                <Link className="errorLinkToHome" to="/">Retourner sur la page d'accueil</Link>
            
            </div>
        )
    }
}
