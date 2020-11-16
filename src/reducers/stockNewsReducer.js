export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_STOCK_NEWS':
            return action.payload;
        default:
            return state;
    }
};