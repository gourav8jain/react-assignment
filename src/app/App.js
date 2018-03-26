import React from "react";

import Header from "./components/Header";
 
export class App extends React.Component {
    
    render() {
        return(
            <div>
                 <Header appName="ReactApp"/>
                 <div>
                    {this.props.children}
                </div>
            </div>
        )
    } 
    
}