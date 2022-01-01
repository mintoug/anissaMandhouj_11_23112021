import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class ApartmentCard extends Component {

    render() {
        return (

            <div>
                <Link to={`apartment/${this.props.id}`} className="galleryApartmentBox">
                <img src={this.props.cover} alt={this.props.title} className='galleryApartmentImg'/>
                <div className="galleryOpacityDiv"></div>
                    <h2>{this.props.title}</h2>
                </Link>
            </div>
        )
    }
}

export default ApartmentCard