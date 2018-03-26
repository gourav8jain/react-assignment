
import React, {Component} from "react";
import PropTypes from "prop-types";
import Address from "./Address";

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state={
            head:{
                street:'215, BPTP park centra',
                state:'Haryana',
                city:'Gurugram',
                pincode:'123456'
            },
            branch:{
                street:'3rd Floor wing A, Indiqube Alpha, Panathur junction ,Marathahalli -Sarjapur outer ring road',
                state:'Karnataka',
                city:'Bengaluru',
                pincode:'560103' 
            }

            // street:{
            //     head:'hello',
            //     brnach:'world'
            // }
        }
    }

    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div> 
            <h2><center>Contact Details</center></h2>
            <Address headOffice={this.state.head} branchOffice={this.state.branch}/>
            </div>
        )
    }
} 


Contact.defaultProps = {
    
}

Contact.propTypes = {
    
}