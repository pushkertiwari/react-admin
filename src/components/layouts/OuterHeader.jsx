import React, { Component } from 'react';
import '../../App.css';
import { withRouter } from 'react-router-dom';

class OuterHeader extends Component {
    constructor(props) {
        super(props);
        this.routerChange = this.routerChange.bind(this);
    }

    routerChange(e) {
        e.preventDefault();
        this.props.history.push('/sign-up')
    }
    render() {
        return (
            <div>
                <div className="row header">
                    <nav className="navbar navbar-light">
                        <a className="navbar-brand">
                            <img src="images/logo.png" alt="Logo" className="img-responsive" />
                        </a>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link">Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.routerChange}>Sign Up</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default withRouter(OuterHeader);