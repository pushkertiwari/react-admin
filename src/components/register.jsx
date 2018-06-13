import React, { Component } from 'react';
import OuterHeader from '../components/layouts/OuterHeader';
import '../assets/register.css';
import { withRouter } from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <div>
                <OuterHeader />
                <div className="row form_wrapper">
                    <h3>Sign Up for Valorem</h3>
                    <div className="form_tabs">
                        <ul className="nav nav-tabs">
                            <li role="presentation" className="active">
                                <a href="#step1" data-toggle="tab">Step 1</a>
                            </li>
                            <li role="presentation" className="">
                                <a href="#step2" data-toggle="tab">Step 2</a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div id="step1" className="tab-pane in active">
                                <h4>Create your username and password</h4>
                                <form className="form_fields">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="fa fa-user-circle"></i>
                                        </span>
                                        <input type="text" className="form-control" placeholder="Username" />
                                    </div>

                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                        <input type="text" className="form-control" placeholder="Email" />
                                    </div>

                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="fa fa-phone"></i>
                                        </span>
                                        <input type="text" className="form-control" placeholder="Contact Number" />
                                    </div>

                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="fa fa-lock"></i>
                                            </span>
                                            <input type="password" className="form-control" placeholder="Password" />
                                        </div>

                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="fa fa-lock"></i>
                                            </span>
                                            <input type="password" className="form-control" placeholder="Confirm Password" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="fa fa-globe"></i>
                                            </span>
                                            <select className="form-control">
                                                <option>-Select Country-</option>
                                                <option>India</option>
                                                <option>USA</option>
                                                <option>UK</option>
                                                <option>Australia</option>
                                                <option>New Zealand</option>
                                            </select>
                                        </div>

                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="fa fa-lock"></i>
                                            </span>
                                            <input type="date" className="form-control" placeholder="D.O.B" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="fa fa-user-circle"></i>
                                            </span>
                                            <input type="text" className="form-control" placeholder="First Name" />
                                        </div>

                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="fa fa-user-circle"></i>
                                            </span>
                                            <input type="text" className="form-control" placeholder="Last Name" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn yellow_btn continue">Continue <span className="fa fa-arrow-right"></span></button>
                                    </div>

                                </form>
                            </div>


                            <div id="step2" className="tab-pane">
                                <h4>Membership Agreement</h4>
                                <form className="form_fields">
                                    <div className="form-group">
                                        <div className="content mCustomScrollbar">
                                            <p>Membership Agreement</p>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <p>I have read, understand and consent to the language and authorizations outlined in VALOREM <span>Membership Agreement. Electronic Communication Policy, Privacy Policy and Terms of Use.</span></p>
                                    </div>

                                    <div className="form-group">
                                        <input className="hideme" id="check1" type="checkbox" />
                                        <label className="checkbox" htmlFor="check1">I Agree</label>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn yellow_btn"><span className="fa fa-arrow-left"></span> Back</button>
                                        <button type="submit" className="btn yellow_btn">Submit <span className="fa fa-arrow-right"></span></button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Register);