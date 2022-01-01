import React, { Component } from 'react'

export default class Profil extends Component {
    render() {
        return (
            
                 <div className="apartmentProfil">
                     <p className="apartmentNameHost">{this.props.host.name}</p>
                        <img className="apartmentImgHost" alt="" src={this.props.host.picture} />
                 </div>
            
        )
    }
}
