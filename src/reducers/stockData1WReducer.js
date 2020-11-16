export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_STOCK_DATA_1W':
            return action.payload;
        default:
            return state;
    }
};