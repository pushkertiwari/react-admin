import React, { Component } from 'react';
import OuterHeader from '../components/layouts/OuterHeader';
import { withRouter } from 'react-router-dom';

class Register extends Component{
    render() {
        return (
            <div>
                <OuterHeader/>
            </div>
        )
    }
}

export default withRouter(Register);