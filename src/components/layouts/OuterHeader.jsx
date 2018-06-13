import React, { Component } from 'react';
import '../../App.css';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { setHref } from '../../actions/commonAction';

class OuterHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            href : '/',
        }
        this.routerChange = this.routerChange.bind(this);
    }

    routerChange(e) {
        e.preventDefault();
        let route = e.target.dataset.href;
        if (route !== 'undefined' && route !== '') {
            this.props.setHref(route);
            this.props.history.push(route);
        }
    }
    render() {
        console.log(this.props.setHrefReducer);
        return (
            <div>
                <div className="row header">
                    <nav className="navbar navbar-light">
                        <a className="navbar-brand">
                            <img src="images/logo.png" alt="Logo" className="img-responsive" />
                        </a>
                        <ul className="navbar-nav">
                            <li className={"nav-item " + (this.state.href === '/'?'active':'') }>
                                <a className="nav-link" data-href={'/'} onClick={this.routerChange}>Sign In</a>
                            </li>
                            <li className={"nav-item " + (this.state.href === 'sign-up' ? 'active' : '')}>
                                <a className="nav-link" data-href={'sign-up'} onClick={this.routerChange}>Sign Up</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state);

 }
OuterHeader = connect(null, { setHref })(OuterHeader);
export default withRouter(OuterHeader);