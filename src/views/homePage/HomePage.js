import React, { Component } from 'react'
import ApartmentCard from '../../components/apartmentCard/ApartmentCard';
import HeroHomePage from '../../components/heroHomePage/HeroHomePage'
import {data} from '../../datas/data';
import './HomePage.css';

 class HomePage extends Component {
    render() {
        return (
            <div>
                <HeroHomePage />
                <section className="galleryApartmentCard">
                    {data.map((apartment)=> {
                      return   <ApartmentCard key={apartment.id} id={apartment.id} 
                      cover={apartment.cover} title={apartment.title} />
                    })}
                </section>
                
            </div>
        )
    }
}

export default HomePage