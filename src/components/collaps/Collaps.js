import React, { Component } from 'react'
import './Collaps.css'

export default class Collaps extends Component {
    state = {
        show : false,
        className: 'isClose',
    }

    showContent = () => {
        this.setState({
            show : !this.state.show
        })
        this.state.show? this.setState({ className: 'isClose' }): this.setState({ className: 'isOpen' })
    }

    getCollapsibleVisible = () => {
        return (
            <div className={`collapsibleVisible ${this.state.className}`} onClick={this.showContent}>
                <h3>{this.props.title}</h3>
                <i className="fas fa-chevron-down"></i>
            </div>
        )
    }

    getCollapsibleContent = () => {
        if (Array.isArray(this.props.content)) {
            return (
                <div className={`collapsibleContent ${this.state.className}`}>
                    {this.props.content.map((item, index) => (
                        <p key={`item-${index}`}>{item}</p>
                    ))}
                </div>
            )
        }

        return (
            <div className={`collapsibleContent ${this.state.className}`}>
                <p>{this.props.content}</p>
            </div>
        )
    }

    render() {
        return (
            <article className="collapsibleArticle">
                {this.getCollapsibleVisible()}
                {this.getCollapsibleContent()}
            </article>
        )
    }
}
