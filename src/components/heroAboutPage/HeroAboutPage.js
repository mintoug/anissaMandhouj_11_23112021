import React, { Component } from 'react'
import heroAbout from "../../assets/heroAbout.png"
import './HeroAboutPage.css'

class HeroAboutPage extends Component {
    render() {
        return (
           <section className='aboutHero'>
                <img src={heroAbout} alt='aboutHeroImg' className='aboutHeroImg'></img>
                <div className='aboutHeroWrapper'></div>
            </section>
        )
    }
}

export default HeroAboutPage