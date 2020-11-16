export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_STOCK_FINANCIALS':
            return action.payload;
        default:
            return state;
    }
};