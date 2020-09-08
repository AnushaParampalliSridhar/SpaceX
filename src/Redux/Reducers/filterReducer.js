const INITIAL_STATE = {
    launchYear : "",
    successfullLaunch : "",
    successfullLanding : ""
}

export const filterReducer = (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case 'SET_FILTER' : return{...state,[action.payload.type] : action.payload.value}
        default : return state;
    }
}