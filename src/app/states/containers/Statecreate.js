import {connect} from "react-redux";
import Statecreate from "../components/Statecreate";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    console.log("state :");
    return {
        viewState: state.stateViewStore.viewState,
        status: state.stateViewStore.status,
        error: state.stateViewStore.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    //     fetchStateById: function(id) {
    //     //let id = this.props.match.params.id;
    //     let actionFn=actions.fetchStateById(id);
    //     console.log("");
    //     dispatch(actionFn);
    //    },

    //    updateState: function(updatedState) {
    //     //let id = this.props.match.params.id;
    //     let actionFn=actions.initStateView(updatedState);
    //     dispatch(actionFn);
    //    },

        saveNewDetails: function(stateToEdit){
        let actionFn=actions.saveNewState(stateToEdit);
        dispatch(actionFn);
       }
    }
 }
 
 export default connect(mapStateToProps, 
                    mapDispatchToProps) (Statecreate)