export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_STOCK_QUOTE':
            return action.payload;
        default:
            return state;
    }
};