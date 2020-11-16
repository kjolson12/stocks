export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_STOCK_DATA_3M':
            return action.payload;
        default:
            return state;
    }
};