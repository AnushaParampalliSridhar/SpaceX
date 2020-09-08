import axios from 'axios';

export const setFilter = (filterType,filterValue) => {
    return{
        type : 'SET_FILTER',
        payload : {
            type : filterType,
            value : filterValue
        }
    }
} 

export const getAllPrograms = () => {
    return async function(dispatch,getState){
        try{
            const response = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100`);
            dispatch({
                type : 'GET_ALL_PROGRAMS',
                payload : response.data
            })
        }
        catch(error){
            console.dir(error);
        }
    }
}

export const filterPrograms = () => {
    return async function(dispatch,getState){
        const {filters}=getState();
        try{
            const response = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&${filters.successfullLaunch?`launch_success=${filters.successfullLaunch.toLowerCase()}`:''}&${filters.successfullLanding?`land_success=${filters.successfullLanding.toLowerCase()}`:''}&${filters.launchYear?`launch_year=${filters.launchYear}`:''}`);
            dispatch({
                type : 'FILTER_PROGRAMS',
                payload : response.data
            })
        }
        catch(error){
            console.dir(error);
        }
    }
}
