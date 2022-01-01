import React, { Component } from 'react'
import './HeroHomePage.css'
import HeroHome from '../../assets/HeroHome.png'


class HeroHomePage extends Component {
    render() {
        return (
            <div className="heroBanner">
                <img src= {HeroHome} alt="paysage forêt" className="heroHome"/>
                <div className='heroBannerWrapper'></div>
                <h2 className="heroText">Chez vous, partout et ailleurs</h2>

            </div>
        )
    }
}
export default HeroHomePage