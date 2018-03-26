import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import {NavLink} from 'react-router-dom';

export default class Header extends Component {
    constructor() {
        super(); //MUST
        console.log("Header created");
    }

    //ES.NEXT
    // static propTypes = {
    //     title: PropTypes.string.isRequired
    // }



    render() {
        console.log("Header render");
        return (
            <div >
                <header style={{padding:'10px',backgroundColor:'#009270',color:'white'}}>
                <label style={{paddingRight:'50px'}}>{this.props.appName}</label>
                <NavLink  to="/"  exact className="button" activeClassName="success" >
                     Home
                </NavLink> 
                <NavLink to="/about"  exact className="button" activeClassName="success" >
                     About
                </NavLink> 
                <NavLink to="/contact"  exact className="button" activeClassName="success" >
                     Contact
                </NavLink> 
                <NavLink to="/statelist"  exact className="button" activeClassName="success" >
                     States
                </NavLink>
                <NavLink to="/statelist/create"  exact className="button" activeClassName="success" >
                     Create State
                </NavLink>  
                </header>
            </div>
        )
    }
}
 
//ES6
//static field
// Header.propTypes = {
//     title: PropTypes.string.isRequired
// }