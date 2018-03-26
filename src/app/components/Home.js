import React, {Component} from "react";


export default class Home extends Component{
    render(){
        return(
            <div>
                <pre>{`
                React-Redux Post Training Assignment

Objective: The goal for this assignment is to let the developers who undergone React and Redux training to apply the skill and learnings on an independent assignment.

This assignment shall use the RESTful backend, available in https://github.com/nodesense/restful-server

The backend server can be deployed in developer machine using below commands.

1. Open Terminal/Command prompt
2. git clone https://github.com/nodesense/restful-server
3. cd restful-server
4. npm install
5. npm start

the server shall listen on port number 7070.

If the port to be changed, run below commands, or if developer is comfortable with node.js, the port can be changed in server.js file. 

1. npm start -- --port 9090



Tasks

1. Create a new react project either use https://github.com/nodesense/react-workshop as a base repository or by using https://github.com/facebook/create-react-app 

2. Implement App Component

3. Implement Home, About, Contact Components. 

4. Implement Address Component, an reusable component, that display address that consists of street, city, state, pincode, phone number information.

5. Contact component shall have Address component as child, Contact component shall pass head office, branch office addresses to Address component

6. About Component should display general description about the company, Team members, their name, role with photos and description/bio [text] in a list. 

7. Home component shall describe description about the website, about company tagline, hero section in bold text

8. Implement CRUD operations for states API, http://localhost:7070/api/states which contains below information

    "code": "DL",
    "id": 1,
    "name": "Delhi"


     Creates StateList, StateEdit, StateView components

 StateList shall call below API to get the list of states.
    GET http://localhost:7070/api/states

StateList shall list available states in table format, the table shall include ID, Name, Code columns, View and Edit Columns.

Each state can be navigated from the StateList, can be viewed in the StateView component.

The url mapping for pages.

Path
Component
/
Home
/about
About
/contact
Contact
/states
StateList
/states/view/:id   
StateView
/states/edit/1234
StateEdit
/states/create
StateEdit
 

Restful APIs

1. Fetch all the states from 

GET /api/states


2. Create new state in server
POST /api/states 
“Content-Types”: “application/json”
….

 

Redux

There must be 3 reducers in total, 

1. State Lists, and data loading   maintenance
2. State Edit – Keep the Edit Form data in the reducers
3. State View – Fetch the current state information.

Duration

Total hours: 10 hours

Developers should follow best practices, coding practices, immutable data modelling, react-router-dom.

Submission:

Submission cab be done through github or a folder link in Google Drive or whatever best works as per company/policices. 


                `}</pre>
            </div>
        )
    }
}

