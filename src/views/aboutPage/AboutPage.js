import React, { Component } from 'react'
import { aboutData } from '../../datas/aboutData'
import HeroAboutPage from '../../components/heroAboutPage/HeroAboutPage'
import Collaps from '../../components/collaps/Collaps'
import './AboutPage.css'
export default class AboutPage extends Component {
    render() {
        return (
            <div className="about">
                <HeroAboutPage />
                {aboutData.map((data) => (
                    <Collaps key={data.id} title={data.title} content={data.content} />
                ))
                }
                
            </div>
        )
    }
}
