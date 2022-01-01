import React, { Component } from 'react'

export default class Tag extends Component {
    render() {
        return (
            <div className='containerTags'>
                <div className="apartmentTag">{this.props.tag}</div>
            </div>
        )
    }
}
