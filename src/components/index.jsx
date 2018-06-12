import React, { Component } from 'react';
import OuterHeader from '../components/layouts/OuterHeader';

class App extends Component {
    render() {
        return (
            <div>
                <OuterHeader />
                <div className="row form_wrapper">
                    <div className="form_block">
                        <img src="images/user.png" className="img-responsive center-block" alt="User" />
                        <p>Please Sign In</p>
                        <form className="form_fields">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-user-circle"></i>
                                </span>
                                <input type="text" className="form-control" placeholder="Username or Email" />
                            </div>

                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-lock"></i>
                                </span>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>

                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-user"></i>
                                </span>
                                <input type="text" className="form-control" placeholder="2 step verification code" />
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn yellow_btn">Submit</button>
                            </div>

                            <div className="form-group">
                                <p>Don't have an account? <a>Sign Up</a></p>
                                <p><a>Forgot Password</a></p>
                                <p><a>Need help with Google Two-Step Verification?</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
