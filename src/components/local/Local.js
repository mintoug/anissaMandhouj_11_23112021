import React, { Component } from 'react'

export default class Local extends Component {
    render() {
        return (
            <div>
                <h3 className='locationapartment'>{this.props.location}</h3>
            </div>
        )
    }
}
