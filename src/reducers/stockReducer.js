export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_STOCK':
            return action.payload;
        default:
            return state;
    }
};