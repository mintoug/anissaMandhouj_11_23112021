import React, {Component} from 'react';
import './ApartmentPage.css';
import Title from '../../components/title/Title';
import Tag from '../../components/tag/Tag';
import Local from '../../components/local/Local';
import Profil from '../../components/profil/Profil';
import Collaps from '../../components/collaps/Collaps'
import Rating from '../../components/rating/Rating';
import Slides from '../../components/slides/Slides';
import { Redirect } from "react-router-dom";
 class ApartmentPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apartment: this.getApartment(),
        }
    }

    getApartment = () => {
        const apartment = this.props.apartments.filter(
            (apt) => apt.id === this.props.match.params.id
        )

        return apartment[0]
    }

    getTags = () => {
        return (
            <div className="apartmentTagsBox">

                {this.state.apartment.tags.map((tag, index) => (
                    <Tag tag={tag} key={index} />
                ))}
            </div>
        )
    }

    getCollapsibles = () => {
        return (
            <section className="apartmentCollapsible">
                <Collaps title='Description' content={this.state.apartment.description}/>
                <Collaps title='Équipements' content={this.state.apartment.equipments}/>
            </section>
        )
    }
 
    render() {

        if (!this.props.apartments.some((apt) => apt.id === this.props.match.params.id)) return <Redirect to="/404" />
        return (
            
            <main>
                   <Slides pictures={this.state.apartment.pictures}/>
                <section className="apartmentInformations">
                    <div className="apartmentBox">
                        <Title title = {this.state.apartment.title}/>
                        <Local location = {this.state.apartment.location}/>
                        {this.getTags()}
                    </div>
                    <div className="apartmentBoxAside">
                        <Profil host = {this.state.apartment.host}/>
                        <Rating rating={this.state.apartment.rating}/>
                        
                    </div>
                </section>
                {this.getCollapsibles()}
                
            </main>
        )
    }
}

export default ApartmentPage;