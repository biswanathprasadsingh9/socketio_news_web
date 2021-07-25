const AllNewsReducer = (state=[], action) => {
    switch(action.type){
        case 'GET_ALL_NEWS':
            return action.payload
        default:
            return state;
    }
}

export default AllNewsReducer;