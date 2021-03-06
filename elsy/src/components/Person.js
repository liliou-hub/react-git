import React, { Component } from 'react';
import Icon from './core/Icon.js';
import Sliders from './core/Sliders.js';



class Person extends Component {
    render() {
        return (
            <div className='box col-md-2 col-6'>
                <Icon name='directions_walk' color= {'black'}/>
                <p>{this.props.steps} steps</p>    
                <Sliders  max={this.props.max}
                          min={this.props.min}
                          onChange={this.props.onChange}
                          value={this.props.steps}>
                </Sliders>  
            </div>
        );
    }
}

export default Person;
