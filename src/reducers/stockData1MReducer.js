export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_STOCK_DATA_1M':
            return action.payload;
        default:
            return state;
    }
};