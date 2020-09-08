const INITIAL_STATE = {
    programs : []
}

export const programsReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case 'GET_ALL_PROGRAMS' : return {...state,programs:action.payload}
        case 'FILTER_PROGRAMS' : return {...state,programs:action.payload}
        default : return state;
    }
}