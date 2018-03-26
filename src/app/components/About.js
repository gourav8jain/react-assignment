
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div style={{marginTop: 100}} >
                <center>
                    <div>
                        <div>
                            <img src="/assets/me.jpg"/>  
                        </div>

                    </div>
                </center>
            </div>
        )
    }
}


About.defaultProps = {

}

About.propTypes = {

}