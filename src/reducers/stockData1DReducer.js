export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_STOCK_DATA_1D':
            return action.payload;
        default:
            return state;
    }
};