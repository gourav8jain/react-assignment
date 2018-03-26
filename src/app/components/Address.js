
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Address extends Component {
    constructor(props) {
        super(props);

       
    }
    
    componentDidMount(props) {
        
    }

    
    
    render() {
        return (
            <div id="address"> 
                <table className="adresstable">
                    <tr>
                        <td>
                            Head Office Address
                        </td>
                        <td>
                            {this.props.headOffice.street}<br/>
                            {this.props.headOffice.state}<br/>
                            {this.props.headOffice.city}<br/>
                            {this.props.headOffice.pincode}<br/>
                            {this.props.headOffice.phoneNumber}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Branch Office Address
                        </td>
                        <td>
                            {this.props.branchOffice.street}<br/>
                            {this.props.branchOffice.state}<br/>
                            {this.props.branchOffice.city}<br/>
                            {this.props.branchOffice.pincode}<br/>
                            {this.props.branchOffice.phoneNumber}
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
} 


Address.defaultProps = {
    
}

Address.propTypes = {
    
}